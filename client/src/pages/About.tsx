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
              14+ years of engineering excellence in electronics development and specialized dairy technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To transform innovative electronic concepts into market-ready products that drive technological advancement 
                and improve lives through reliable, sustainable solutions.
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
                Founded in 2010, Several Sustain began as a vision to bridge the gap between innovative electronic 
                concepts and practical, market-ready solutions. Our founders, experienced engineers with backgrounds 
                in PCB design and embedded systems, recognized the need for comprehensive development services that 
                could take projects from initial concept through to production.
              </p>
              <p>
                Over the years, we've expanded our expertise to include specialized dairy technology solutions, 
                developing industry-leading milk analyzers and collection systems that have revolutionized dairy 
                operations worldwide. Our commitment to quality and innovation has earned us certifications in 
                IPC standards and ISO 9001, ensuring our clients receive the highest level of service and reliability.
              </p>
              <p>
                Today, Several Sustain continues to grow, serving clients across multiple industries while maintaining 
                our core values of excellence, integrity, and sustainability. We're proud to have delivered over 500 
                successful projects and look forward to helping shape the future of electronic innovation.
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
