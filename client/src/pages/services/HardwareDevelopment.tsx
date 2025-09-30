import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cpu, CheckCircle, Microchip, Settings, Zap } from "lucide-react";

const HardwareDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="hardware-development-title">
              Hardware Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete embedded systems design including microcontroller programming and FPGA development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Embedded Systems Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our hardware development services encompass the complete spectrum of embedded systems design, 
                from microcontroller-based solutions to complex FPGA implementations. We deliver optimized 
                hardware that meets your performance, power, and cost requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">ARM Cortex-M and RISC-V microcontrollers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">FPGA design and implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">IoT and wireless connectivity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Power management optimization</span>
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Hardware development and testing" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Microchip className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Microcontroller Design</h3>
              <p className="text-muted-foreground">
                Custom microcontroller-based solutions with optimized firmware for real-time applications 
                and low-power requirements.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">FPGA Development</h3>
              <p className="text-muted-foreground">
                High-performance FPGA solutions for signal processing, communication protocols, 
                and custom digital logic implementations.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Power Management</h3>
              <p className="text-muted-foreground">
                Advanced power management circuits with battery optimization, energy harvesting, 
                and ultra-low power design techniques.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Technologies We Work With</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Microcontrollers</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>STM32 (ARM Cortex-M)</li>
                  <li>ESP32/ESP8266</li>
                  <li>PIC Microcontrollers</li>
                  <li>RISC-V Processors</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">FPGAs</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Xilinx Zynq</li>
                  <li>Intel Cyclone</li>
                  <li>Lattice iCE40</li>
                  <li>Microsemi SmartFusion</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Connectivity</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>WiFi/Bluetooth</li>
                  <li>LoRa/LoRaWAN</li>
                  <li>Cellular (4G/5G)</li>
                  <li>Ethernet/CAN</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Sensors</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Environmental Sensors</li>
                  <li>IMU/Accelerometers</li>
                  <li>Optical Sensors</li>
                  <li>Pressure/Flow Sensors</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HardwareDevelopment;
