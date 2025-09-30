import { Link } from "wouter";
import { Award, ShieldCheck, Clock, Users, CircuitBoard, Cpu, Code, Smartphone, CheckCircle, ArrowRight, Zap, Calendar, Mail, Phone, TrendingUp, Target, Rocket, Star, Quote } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import ContactForm from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Home = () => {
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0, accuracy: 0 });
  
  useEffect(() => {
    const duration = 2000;
    const targets = { years: 14, projects: 500, clients: 200, accuracy: 99 };
    const steps = 60;
    const interval = duration / steps;
    
    let current = { years: 0, projects: 0, clients: 0, accuracy: 0 };
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      current = {
        years: Math.min(Math.floor((targets.years * step) / steps), targets.years),
        projects: Math.min(Math.floor((targets.projects * step) / steps), targets.projects),
        clients: Math.min(Math.floor((targets.clients * step) / steps), targets.clients),
        accuracy: Math.min(Math.floor((targets.accuracy * step) / steps), targets.accuracy),
      };
      setCounts(current);
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 via-background to-accent/20 pt-16 lg:pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23059669"/><path d="M10 5v10M5 10h10" stroke="%23059669" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>')`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight" data-testid="hero-title">
              Transform Your Electronic
              <span className="text-primary block">Concepts Into Reality</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
              Expert PCB design, hardware development, and specialized dairy technology solutions. 
              14+ years of engineering excellence delivering market-ready products.
            </p>

            {/* Hero CTA Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 animate-slide-up">
              <GlassCard className="p-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick Quote</h3>
                <p className="text-muted-foreground text-sm mb-4">Get a detailed quote for your project in 24 hours</p>
                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-start-project">
                    Start Project
                  </Button>
                </Link>
              </GlassCard>
              <GlassCard className="p-6 group">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-secondary/20 transition-colors">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Free Consultation</h3>
                <p className="text-muted-foreground text-sm mb-4">Discuss your requirements with our experts</p>
                <Link href="/contact">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" data-testid="button-book-call">
                    Book Call
                  </Button>
                </Link>
              </GlassCard>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70" data-testid="trust-indicators">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">IPC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">14+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">500+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 lg:py-32 bg-background" data-testid="services-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Electronics Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to production, we provide end-to-end solutions for your electronic product development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard className="p-6 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <CircuitBoard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">PCB Design</h3>
              <p className="text-muted-foreground mb-6">Expert circuit board layout with HDI, RF, and high-speed design capabilities for complex applications.</p>
              <Link href="/services/design/pcb-design" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid="link-pcb-design">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>

            <GlassCard className="p-6 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Hardware Development</h3>
              <p className="text-muted-foreground mb-6">Complete embedded systems design including microcontroller programming and FPGA development.</p>
              <Link href="/services/development/hardware" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid="link-hardware-development">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>

            <GlassCard className="p-6 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Firmware Programming</h3>
              <p className="text-muted-foreground mb-6">Low-level firmware development for optimal performance and reliability in embedded systems.</p>
              <Link href="/services/development/firmware" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid="link-firmware-programming">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>

            <GlassCard className="p-6 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">App Development</h3>
              <p className="text-muted-foreground mb-6">Mobile and web applications for IoT device control and data visualization platforms.</p>
              <Link href="/services/development/app-development" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid="link-app-development">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Delivering Excellence at Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies across industries for innovative electronics and dairy technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard className="p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2" data-testid="stat-years">
                {counts.years}+
              </div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </GlassCard>
            
            <GlassCard className="p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2" data-testid="stat-projects">
                {counts.projects}+
              </div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </GlassCard>
            
            <GlassCard className="p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2" data-testid="stat-clients">
                {counts.clients}+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </GlassCard>
            
            <GlassCard className="p-8 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2" data-testid="stat-accuracy">
                {counts.accuracy}%
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Specialized Solutions Section */}
      <section className="py-20 lg:py-32 bg-muted/30" data-testid="solutions-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Specialized Dairy Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading milk analysis and collection systems trusted by dairy professionals worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Milk Analyzer */}
            <GlassCard className="p-8">
              <img 
                src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced milk analyzer equipment" 
                className="w-full h-64 object-cover rounded-xl mb-6" 
              />
              <h3 className="text-2xl font-bold text-foreground mb-4">Milk Analyzer Systems</h3>
              <p className="text-muted-foreground mb-6">
                Precision milk composition analysis with real-time fat, protein, lactose, and solids measurement. 
                Advanced spectroscopy technology for accurate quality control.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Real-time composition analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Advanced spectroscopy technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Quality control automation</span>
                </div>
              </div>
              <Link href="/solutions/milk-analyzer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-milk-analyzer-specs">
                  View Specifications
                </Button>
              </Link>
            </GlassCard>

            {/* DPU/AMCU System */}
            <GlassCard className="p-8">
              <img 
                src="https://images.unsplash.com/photo-1606880700051-d70bdf7cb265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern dairy processing facility" 
                className="w-full h-64 object-cover rounded-xl mb-6" 
              />
              <h3 className="text-2xl font-bold text-foreground mb-4">DPU/AMCU Collection Systems</h3>
              <p className="text-muted-foreground mb-6">
                Automated milk collection units with integrated payment systems, quality testing, 
                and real-time data transmission for efficient dairy operations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Automated collection & payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Integrated quality testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Real-time data transmission</span>
                </div>
              </div>
              <Link href="/solutions/dpu-amcu-systems">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-dpu-amcu-datasheet">
                  Download Datasheet
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world examples of how we've helped clients transform their ideas into successful products
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-6 group hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CircuitBoard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">IoT Gateway Development</h3>
              <p className="text-muted-foreground mb-4">
                Designed and developed a multi-protocol IoT gateway supporting 5+ communication standards with 99.9% uptime.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 months
                </span>
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  Industrial
                </span>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid="link-case-study-1">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
            
            <GlassCard className="p-6 group hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Smart Dairy Management</h3>
              <p className="text-muted-foreground mb-4">
                Implemented automated milk collection system serving 1000+ dairy farmers with real-time quality monitoring.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  4 months
                </span>
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  Agriculture
                </span>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid="link-case-study-2">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
            
            <GlassCard className="p-6 group hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Medical Device PCB</h3>
              <p className="text-muted-foreground mb-4">
                Delivered IPC Class 3 medical device PCB with advanced signal integrity and FDA compliance certification.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 months
                </span>
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  Healthcare
                </span>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid="link-case-study-3">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by industry leaders and innovative startups worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-8 relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "Several Sustain delivered our complex PCB design ahead of schedule. Their expertise in high-speed digital design was instrumental in our product's success."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">CTO, TechVision Systems</div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-8 relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "The milk analyzer system has transformed our quality control process. We now have real-time insights that have improved our product consistency by 40%."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Priya Sharma</div>
                  <div className="text-sm text-muted-foreground">Operations Manager, DairyFresh</div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-8 relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "Professional, responsive, and technically excellent. They understood our unique requirements and delivered a solution that exceeded expectations."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">David Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Founder, SmartAgri Solutions</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 200+ satisfied clients who have successfully launched their products with our expert engineering team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-cta-get-quote">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/services/design/pcb-design">
                <Button size="lg" variant="outline" data-testid="button-cta-explore">
                  Explore Services
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-background" data-testid="contact-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our engineering team to discuss your requirements and receive a detailed quote.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">contact@severalsustain.com</p>
                      <p className="text-muted-foreground">quotes@severalsustain.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) SUSTAIN</p>
                      <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                      <p className="text-muted-foreground">24 hours for quotes</p>
                      <p className="text-muted-foreground">Same day for urgent inquiries</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <GlassCard className="p-8">
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Several Sustain",
            "url": "https://severalsustain.com",
            "logo": "https://severalsustain.com/logo.png",
            "description": "Expert PCB design, hardware development, firmware programming, and specialized dairy technology solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-SUSTAIN",
              "contactType": "customer service",
              "email": "contact@severalsustain.com"
            },
            "sameAs": [
              "https://linkedin.com/company/severalsustain",
              "https://twitter.com/severalsustain",
              "https://youtube.com/severalsustain"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electronics Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "PCB Design Services",
                    "description": "Expert circuit board layout with HDI, RF, and high-speed design capabilities"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hardware Development",
                    "description": "Complete embedded systems design including microcontroller programming and FPGA development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Milk Analyzer Systems",
                    "description": "Precision milk composition analysis with real-time measurement capabilities"
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  );
};

export default Home;
