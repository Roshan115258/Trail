import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, CheckCircle, Terminal, Shield, Cog } from "lucide-react";

const FirmwareProgramming = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="firmware-programming-title">
              Firmware Programming
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Low-level firmware development for optimal performance and reliability in embedded systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Optimized Embedded Software</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our firmware programming services deliver highly optimized, reliable code that maximizes 
                hardware performance while ensuring robust operation. From bare-metal programming to 
                RTOS-based applications, we create firmware that meets your exact requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Real-time operating systems (RTOS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Bare-metal programming</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Communication protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Safety-critical applications</span>
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
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Firmware development and debugging" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Terminal className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">RTOS Development</h3>
              <p className="text-muted-foreground">
                Real-time operating system implementation with FreeRTOS, ThreadX, and custom RTOS 
                solutions for time-critical applications.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Safety Critical</h3>
              <p className="text-muted-foreground">
                Firmware for safety-critical systems with DO-178C, IEC 61508, and ISO 26262 
                compliance for automotive and aerospace applications.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cog className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Protocol Stacks</h3>
              <p className="text-muted-foreground">
                Implementation of communication protocols including TCP/IP, Modbus, CAN, 
                LoRaWAN, and custom proprietary protocols.
              </p>
            </GlassCard>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Primary</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>C/C++</li>
                    <li>Assembly</li>
                    <li>Rust</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Specialized</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>VHDL/Verilog</li>
                    <li>Python</li>
                    <li>MATLAB/Simulink</li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Development Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">IDEs</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>STM32CubeIDE</li>
                    <li>Keil MDK</li>
                    <li>IAR Embedded</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Debug Tools</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>JTAG/SWD</li>
                    <li>Oscilloscopes</li>
                    <li>Logic Analyzers</li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirmwareProgramming;
