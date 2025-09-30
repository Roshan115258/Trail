import * as nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  consent: boolean;
}

interface NewsletterData {
  email: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    // Only initialize transporter if email credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Configure based on EMAIL_SERVICE environment variable or default to zoho
      const emailService = process.env.EMAIL_SERVICE || 'zoho';

      if (emailService === 'zoho') {
        // Zoho Mail SMTP configuration
        this.transporter = nodemailer.createTransport({
          host: 'smtp.zoho.com',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_USER, // your Zoho email
            pass: process.env.EMAIL_PASS, // your Zoho password or app password
          },
        });
      } else if (emailService === 'custom') {
        // For custom SMTP servers
        this.transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: parseInt(process.env.EMAIL_PORT || '587'),
          secure: process.env.EMAIL_SECURE === 'true',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
      } else {
        // For predefined services (gmail, hotmail, yahoo, etc.)
        this.transporter = nodemailer.createTransport({
          service: emailService,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
      }
    } else {
      console.log('Email service not configured - EMAIL_USER and EMAIL_PASS not set');
    }
  }

  async sendContactFormNotification(data: ContactFormData) {
    if (!this.transporter) {
      console.log('Email not configured, skipping contact form notification');
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <p><strong>Consent:</strong> ${data.consent ? 'Yes' : 'No'}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Contact form notification sent successfully');
    } catch (error) {
      console.error('Failed to send contact form notification:', error);
      throw error;
    }
  }

  async sendNewsletterNotification(data: NewsletterData) {
    if (!this.transporter) {
      console.log('Email not configured, skipping newsletter notification');
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Newsletter subscription notification sent successfully');
    } catch (error) {
      console.error('Failed to send newsletter notification:', error);
      throw error;
    }
  }

  async sendConfirmationEmail(email: string, name: string) {
    if (!this.transporter) {
      console.log('Email not configured, skipping confirmation email');
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Several Sustain',
      html: `
        <h2>Thank you for your inquiry, ${name}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our services and solutions on our website.</p>
        <br>
        <p>Best regards,<br>
        Several Sustain Team</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Confirmation email sent successfully');
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
      // Don't throw here as this is not critical
    }
  }
}

export const emailService = new EmailService();