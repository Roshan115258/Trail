import { Link } from "wouter";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import NewsletterForm from "@/components/forms/NewsletterForm";
import logoImage from "@assets/WhatsApp_Image_2025-10-01_at_1.27.41_PM-removebg-preview_1759322801060.png";

const Footer = () => {
  return (
    <footer className="glass border-t border-border/50 mt-20" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoImage} 
                alt="Several Sustain Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Several <span className="text-primary">Sustain</span>
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming electronic concepts into market-ready products with expert PCB design, 
              hardware development, and specialized dairy technology solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="social-twitter">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="social-youtube">
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/design/pcb-design" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-pcb-design">PCB Design</Link></li>
              <li><Link href="/services/design/web-design" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-web-design">Web Design</Link></li>
              <li><Link href="/services/development/hardware" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-hardware-development">Hardware Development</Link></li>
              <li><Link href="/services/development/firmware" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-firmware">Firmware Development</Link></li>
              <li><Link href="/services/development/app-development" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-app-development">App Development</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions/milk-analyzer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-milk-analyzers">Milk Analyzers</Link></li>
              <li><Link href="/solutions/dpu-amcu-systems" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-dpu-amcu-systems">DPU/AMCU Systems</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-case-studies">Case Studies</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-downloads">Downloads</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-careers">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-support">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">Get the latest news and insights from our engineering team.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Several Sustain. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-privacy">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-terms">Terms of Service</Link>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
