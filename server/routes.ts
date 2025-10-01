import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { emailService } from "./email";

// Validation schemas
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine(val => val, "You must agree to receive communications"),
});

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // SMTP test endpoint
  app.post("/api/test-smtp", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ 
          success: false, 
          message: "Email address is required" 
        });
      }

      // Test email sending
      await emailService.sendConfirmationEmail(email, "Test User");
      
      res.json({ 
        success: true, 
        message: "Test email sent successfully!" 
      });
    } catch (error) {
      console.error("SMTP test failed:", error);
      res.status(500).json({ 
        success: false, 
        message: "SMTP test failed: " + (error as Error).message 
      });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContact(validatedData);
      
      // Send email notification to team
      try {
        await emailService.sendContactFormNotification(validatedData);
        await emailService.sendConfirmationEmail(validatedData.email, validatedData.name);
      } catch (error) {
        console.error('Email notification failed:', error);
        // Continue processing even if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      // Store the newsletter subscription
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      // Send email notification to team
      try {
        await emailService.sendNewsletterNotification(validatedData);
      } catch (error) {
        console.error('Email notification failed:', error);
        // Continue processing even if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Newsletter subscription successful",
        id: subscription.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      service: "Several Sustain API"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
