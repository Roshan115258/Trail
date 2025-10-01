import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Award, Users, Target, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
              About Several Sustain
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovating for a Smarter Future: Transforming Ideas into Sustainable Solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Innovative engineering solutions tailored to your needs, offering end-to-end services from PCB Design 
                to advanced Firmware Development, transforming ideas into sustainable solutions.
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in electronics development, recognized for our innovation, quality, 
                and commitment to sustainable technology solutions.
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence in engineering, integrity in business, innovation in solutions, and sustainability 
                in everything we create and deliver.
              </p>
            </GlassCard>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
              <p>
                Located in Bihar, India, Several Sustain (Several Sustain Pvt. Ltd.) specializes in Engineering, 
                Embedded Systems, IoT Product Design, Web & App Development, and Analytical Instruments. 
                Our team of experienced engineers with backgrounds in PCB design and embedded systems provides 
                comprehensive development services that take projects from initial concept through to production.
              </p>
              <p>
                We offer end-to-end engineering solutions including PCB Design, Hardware Development, Firmware 
                Development, Web Development, and App Development. Our specialized solutions include industry-leading 
                Milk Analyzers and DPU & AMCU systems that have revolutionized dairy operations. Our commitment 
                to quality and innovation ensures our clients receive the highest level of service and reliability.
              </p>
              <p>
                Today, Several Sustain continues to grow, serving clients across multiple industries while maintaining 
                our core values of excellence, integrity, and sustainability. We're proud to transform innovative 
                ideas into sustainable solutions and look forward to helping shape the future of electronic innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
