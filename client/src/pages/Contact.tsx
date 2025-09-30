import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="contact-title">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? Our engineering team is here to help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@severalsustain.com</p>
                    <p className="text-muted-foreground">quotes@severalsustain.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) SUSTAIN</p>
                    <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">24 hours for quotes</p>
                    <p className="text-muted-foreground">Same day for urgent inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Serving clients worldwide</p>
                    <p className="text-muted-foreground">Remote consultation available</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Info */}
              <GlassCard className="p-6 mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Why Choose Several Sustain?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 14+ years of industry experience</li>
                  <li>• IPC certified and ISO 9001 compliant</li>
                  <li>• 500+ successful projects delivered</li>
                  <li>• End-to-end development services</li>
                  <li>• Specialized dairy technology expertise</li>
                </ul>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <GlassCard className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
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
