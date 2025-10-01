import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import contactImage from "@assets/stock_images/engineering_team_col_b8595299.jpg";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us - Several Sustain | Get Expert Engineering Solutions</title>
        <meta name="description" content="Contact Several Sustain for PCB design, hardware development, firmware programming, and dairy technology solutions. Located in Bihar, India. Phone: 06202428157, Email: info@severalsustain.in" />
        <link rel="canonical" href="https://severalsustain.in/contact" />
        
        <meta property="og:title" content="Contact Us - Several Sustain | Get Expert Engineering Solutions" />
        <meta property="og:description" content="Get in touch with Several Sustain for expert PCB design, embedded systems, and dairy technology solutions. We're here to help bring your ideas to life." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://severalsustain.in/contact" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us - Several Sustain" />
        <meta name="twitter:description" content="Get in touch with Several Sustain for expert engineering solutions. Phone: 06202428157, Email: info@severalsustain.in" />
      </Helmet>
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="heading-contact-title">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
              Ready to start your project? Our engineering team is here to help bring your ideas to life.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift" data-testid="card-contact-hero">
              <img 
                src={contactImage} 
                alt="Engineering team collaboration" 
                className="w-full h-64 lg:h-96 object-cover"
                data-testid="img-contact-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2" data-testid="text-hero-overlay-title">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-lg opacity-90" data-testid="text-hero-overlay-subtitle">
                  Expert engineering solutions for your next innovation
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-10" data-testid="heading-contact-info">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5 hover-lift" data-testid="card-contact-email">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-7 h-7 text-white" data-testid="icon-email" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-email-label">Email</h3>
                    <p className="text-muted-foreground text-base" data-testid="text-email-value">info@severalsustain.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 hover-lift" data-testid="card-contact-phone">
                  <div className="w-14 h-14 gradient-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7 text-white" data-testid="icon-phone" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-phone-label">Phone</h3>
                    <p className="text-muted-foreground text-base" data-testid="text-phone-value">06202428157</p>
                    <p className="text-muted-foreground text-sm mt-1" data-testid="text-phone-hours">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 hover-lift" data-testid="card-contact-response">
                  <div className="w-14 h-14 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-7 h-7 text-white" data-testid="icon-clock" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-response-label">Response Time</h3>
                    <p className="text-muted-foreground text-base" data-testid="text-response-quotes">24 hours for quotes</p>
                    <p className="text-muted-foreground text-sm mt-1" data-testid="text-response-urgent">Same day for urgent inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 hover-lift" data-testid="card-contact-location">
                  <div className="w-14 h-14 gradient-purple rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" data-testid="icon-location" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-location-label">Location</h3>
                    <p className="text-muted-foreground text-base" data-testid="text-location-line1">Village Walidad, Post Balidad,</p>
                    <p className="text-muted-foreground text-base" data-testid="text-location-line2">P.S. Balidad Panchayat, Mahendia,</p>
                    <p className="text-muted-foreground text-base" data-testid="text-location-line3">Bihar – 804402, India</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Card */}
              <GlassCard className="p-8 mt-10 hover-lift border-l-4 border-primary shadow-lg" data-testid="card-why-choose-us">
                <h3 className="text-xl font-semibold text-foreground mb-5" data-testid="heading-why-choose">
                  Why Choose Several Sustain?
                </h3>
                <ul className="space-y-3 text-muted-foreground text-base">
                  <li className="flex items-start gap-3" data-testid="text-feature-pcb">
                    <span className="text-primary mt-1">✓</span>
                    <span>Expert PCB Design & Hardware Development</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-feature-firmware">
                    <span className="text-primary mt-1">✓</span>
                    <span>Firmware & Software Solutions</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-feature-webapp">
                    <span className="text-primary mt-1">✓</span>
                    <span>Web & App Development Services</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-feature-iot">
                    <span className="text-primary mt-1">✓</span>
                    <span>End-to-end IoT Product Design</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-feature-instruments">
                    <span className="text-primary mt-1">✓</span>
                    <span>Specialized Analytical Instruments</span>
                  </li>
                </ul>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <GlassCard className="p-10 hover-lift border-t-4 border-blue-500 shadow-lg" data-testid="card-contact-form">
              <h2 className="text-3xl font-semibold text-foreground mb-8" data-testid="heading-contact-form">
                Send Us a Message
              </h2>
              <ContactForm />
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
