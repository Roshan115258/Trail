import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Award, Users, Target, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import teamImage from "@assets/stock_images/professional_about_u_79366e14.jpg";
import officeImage from "@assets/stock_images/professional_about_u_bbc2017d.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Several Sustain | Premier Electronics & Engineering Solutions</title>
        <meta name="description" content="Learn about Several Sustain's journey in electronics development, embedded systems, and dairy technology. 14+ years of engineering excellence transforming ideas into sustainable solutions." />
        <link rel="canonical" href="https://severalsustain.in/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Several Sustain | Premier Electronics & Engineering Solutions" />
        <meta property="og:description" content="Learn about Several Sustain's journey in electronics development, embedded systems, and dairy technology. 14+ years of engineering excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://severalsustain.in/about" />
      </Helmet>

      <Header />
      
      {/* Hero Section with Team Image Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={teamImage} 
            alt="Professional engineering team collaborating on innovative electronics development projects" 
            className="w-full h-full object-cover"
            data-testid="img-hero-team"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-[hsl(174,72%,56%)]/85 to-[hsl(217,91%,60%)]/80"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff"/><path d="M10 5v10M5 10h10" stroke="%23ffffff" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>')`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="heading-about-title">
              About Several Sustain
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow" data-testid="text-about-subtitle">
              Innovating for a Smarter Future: Transforming Ideas into Sustainable Solutions
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/90">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full" data-testid="badge-years">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">14+ Years Excellence</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full" data-testid="badge-projects">
                <Target className="w-5 h-5" />
                <span className="text-sm font-medium">500+ Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full" data-testid="badge-clients">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">200+ Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full" data-testid="badge-global">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-8 text-center hover-lift border-t-4 border-primary group" data-testid="card-mission">
              <div className="w-20 h-20 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid="heading-mission">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-mission">
                Innovative engineering solutions tailored to your needs, offering end-to-end services from PCB Design 
                to advanced Firmware Development, transforming ideas into sustainable solutions.
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center hover-lift border-t-4 border-[hsl(217,91%,60%)] group" data-testid="card-vision">
              <div className="w-20 h-20 gradient-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid="heading-vision">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-vision">
                To be the global leader in electronics development, recognized for our innovation, quality, 
                and commitment to sustainable technology solutions.
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center hover-lift border-t-4 border-[hsl(174,72%,56%)] group" data-testid="card-values">
              <div className="w-20 h-20 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid="heading-values">Our Values</h3>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-values">
                Excellence in engineering, integrity in business, innovation in solutions, and sustainability 
                in everything we create and deliver.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Our Story Section with Office Image */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6" data-testid="heading-our-story">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey of innovation, excellence, and sustainable engineering solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Office Image */}
            <div className="order-2 lg:order-1">
              <GlassCard className="p-0 overflow-hidden hover-lift group">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={officeImage} 
                    alt="Modern office environment showcasing Several Sustain's professional workspace and collaborative culture" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-testid="img-office-environment"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Innovation Hub</h3>
                    <p className="text-white/90">Where engineering excellence meets sustainable solutions</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Story Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <GlassCard className="p-8 hover-lift border-l-4 border-primary" data-testid="card-story-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Foundation & Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Located in Bihar, India, Several Sustain (Several Sustain Pvt. Ltd.) specializes in Engineering, 
                  Embedded Systems, IoT Product Design, Web & App Development, and Analytical Instruments. 
                  Our team of experienced engineers with backgrounds in PCB design and embedded systems provides 
                  comprehensive development services that take projects from initial concept through to production.
                </p>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-[hsl(217,91%,60%)]" data-testid="card-story-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">Comprehensive Solutions</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer end-to-end engineering solutions including PCB Design, Hardware Development, Firmware 
                  Development, Web Development, and App Development. Our specialized solutions include industry-leading 
                  Milk Analyzers and DPU & AMCU systems that have revolutionized dairy operations. Our commitment 
                  to quality and innovation ensures our clients receive the highest level of service and reliability.
                </p>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-[hsl(174,72%,56%)]" data-testid="card-story-3">
                <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Innovation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, Several Sustain continues to grow, serving clients across multiple industries while maintaining 
                  our core values of excellence, integrity, and sustainability. We're proud to transform innovative 
                  ideas into sustainable solutions and look forward to helping shape the future of electronic innovation.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6" data-testid="heading-expertise">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering world-class engineering solutions across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard className="p-6 text-center hover-lift border-b-4 border-primary group" data-testid="card-expertise-pcb">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">PCB Design</h3>
              <p className="text-muted-foreground">Expert circuit design & layout</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-b-4 border-[hsl(217,91%,60%)] group" data-testid="card-expertise-hardware">
              <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Hardware Dev</h3>
              <p className="text-muted-foreground">Embedded systems excellence</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-b-4 border-secondary group" data-testid="card-expertise-firmware">
              <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Firmware</h3>
              <p className="text-muted-foreground">Low-level programming mastery</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-b-4 border-[hsl(174,72%,56%)] group" data-testid="card-expertise-dairy">
              <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Dairy Tech</h3>
              <p className="text-muted-foreground">Industry-leading solutions</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
