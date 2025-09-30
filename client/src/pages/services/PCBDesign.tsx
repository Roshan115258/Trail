import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CircuitBoard, CheckCircle, Layers, Zap, Shield } from "lucide-react";

const PCBDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CircuitBoard className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="pcb-design-title">
              PCB Design Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert circuit board layout with HDI, RF, and high-speed design capabilities for complex applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional PCB Design</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our PCB design services combine cutting-edge technology with years of engineering expertise 
                to deliver circuit boards that meet the most demanding requirements. From simple single-layer 
                boards to complex multilayer HDI designs, we ensure optimal performance and manufacturability.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">High-density interconnect (HDI) design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">RF and microwave circuit design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">High-speed digital signal integrity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">EMI/EMC compliance design</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="PCB design and manufacturing" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Multilayer Design</h3>
              <p className="text-muted-foreground">
                Complex multilayer PCB designs up to 32 layers with advanced stackup optimization 
                for signal integrity and power distribution.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">High-Speed Design</h3>
              <p className="text-muted-foreground">
                Specialized in high-speed digital design with DDR4/5 memory interfaces, 
                SerDes, and gigabit ethernet implementations.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">EMI/EMC Compliance</h3>
              <p className="text-muted-foreground">
                Design for electromagnetic compatibility with proper grounding, shielding, 
                and filtering techniques to meet international standards.
              </p>
            </GlassCard>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our PCB Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  1
                </div>
                <h4 className="font-semibold text-foreground mb-2">Requirements Analysis</h4>
                <p className="text-sm text-muted-foreground">Detailed review of specifications and constraints</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-2">Schematic Design</h4>
                <p className="text-sm text-muted-foreground">Circuit design and component selection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-2">Layout & Routing</h4>
                <p className="text-sm text-muted-foreground">Optimized placement and signal routing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  4
                </div>
                <h4 className="font-semibold text-foreground mb-2">Verification</h4>
                <p className="text-sm text-muted-foreground">DRC, signal integrity, and thermal analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PCBDesign;
