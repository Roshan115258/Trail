import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cpu, CheckCircle, Microchip, Settings, Zap, Lightbulb, Pencil, Wrench, TestTube, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";
import hardwareImage1 from "@assets/stock_images/hardware_development_71859658.jpg";
import hardwareImage2 from "@assets/stock_images/hardware_development_1d1d7cab.jpg";

const HardwareDevelopment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "What types of microcontrollers do you work with?",
      a: "We work with a wide range of microcontrollers including ARM Cortex-M (STM32, NXP), ESP32/ESP8266 for IoT applications, PIC microcontrollers, and RISC-V processors. We select the best platform based on your project requirements."
    },
    {
      q: "Can you help with both hardware and firmware development?",
      a: "Yes! We provide complete embedded systems solutions including hardware design, PCB layout, firmware development, and testing. Our integrated approach ensures optimal hardware-software co-design."
    },
    {
      q: "Do you provide prototyping services?",
      a: "Absolutely. We offer rapid prototyping services including breadboard prototypes, development board integration, and custom PCB prototypes with iterative testing and refinement."
    },
    {
      q: "What is your experience with IoT and wireless connectivity?",
      a: "We have extensive experience with IoT protocols and wireless technologies including WiFi, Bluetooth/BLE, LoRa/LoRaWAN, Zigbee, and cellular (4G/5G). We can help design and implement complete IoT solutions."
    },
    {
      q: "Do you offer power optimization for battery-powered devices?",
      a: "Yes, power optimization is one of our specialties. We implement low-power design techniques, efficient power management circuits, sleep modes, and energy harvesting solutions to maximize battery life."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-24 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="hero-icon">
              <Cpu className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8" data-testid="hardware-development-title">
              Hardware Development Services
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Complete embedded systems design including microcontroller programming and FPGA development for cutting-edge IoT and industrial applications.
            </p>
            <div className="max-w-5xl mx-auto mb-12">
              <img 
                src={hardwareImage1} 
                alt="Advanced hardware development with embedded systems, microcontrollers, and circuit boards" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" 
                data-testid="hero-image"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Embedded Systems Excellence</h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Our hardware development services encompass the complete spectrum of embedded systems design, 
                from microcontroller-based solutions to complex FPGA implementations. We deliver optimized 
                hardware that meets your performance, power, and cost requirements with industry-leading expertise.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">ARM Cortex-M and RISC-V microcontrollers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">FPGA design and implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">IoT and wireless connectivity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Power management optimization</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="gradient-blue text-white hover:opacity-90 transition-opacity" size="lg" data-testid="button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={hardwareImage2} 
                alt="Professional hardware development workspace with embedded systems and testing equipment" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
                data-testid="content-image"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center hover-lift border-t-4 border-blue-500" data-testid="card-microcontroller">
              <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <Microchip className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Microcontroller Design</h3>
              <p className="text-lg text-muted-foreground">
                Custom microcontroller-based solutions with optimized firmware for real-time applications 
                and low-power requirements.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-cyan-500" data-testid="card-fpga">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">FPGA Development</h3>
              <p className="text-lg text-muted-foreground">
                High-performance FPGA solutions for signal processing, communication protocols, 
                and custom digital logic implementations.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-purple-500" data-testid="card-power">
              <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Power Management</h3>
              <p className="text-lg text-muted-foreground">
                Advanced power management circuits with battery optimization, energy harvesting, 
                and ultra-low power design techniques.
              </p>
            </GlassCard>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Our Development Process</h2>
            <div className="space-y-8">
              <GlassCard className="p-8 hover-lift border-l-4 border-blue-500" data-testid="process-card-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</span>
                      <h3 className="text-xl font-bold text-foreground">Requirements & Architecture</h3>
                      <span className="ml-auto text-sm text-muted-foreground">3-5 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Analyze project requirements, define system architecture, select optimal microcontroller/FPGA platform, and plan power budget and connectivity needs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">System Architecture</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Platform Selection</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Requirements Doc</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-cyan-500" data-testid="process-card-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Pencil className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</span>
                      <h3 className="text-xl font-bold text-foreground">Schematic & PCB Design</h3>
                      <span className="ml-auto text-sm text-muted-foreground">7-10 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Create detailed schematics with component selection, design PCB layout with signal integrity considerations, and prepare manufacturing files.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Circuit Design</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PCB Layout</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">BOM Creation</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-purple-500" data-testid="process-card-3">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</span>
                      <h3 className="text-xl font-bold text-foreground">Prototyping & Assembly</h3>
                      <span className="ml-auto text-sm text-muted-foreground">5-7 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Build prototypes, assemble and solder components, perform initial bring-up and basic functionality testing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PCB Fabrication</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Assembly</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Initial Testing</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-orange-500" data-testid="process-card-4">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</span>
                      <h3 className="text-xl font-bold text-foreground">Testing & Validation</h3>
                      <span className="ml-auto text-sm text-muted-foreground">5-7 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive testing including functional tests, power consumption analysis, EMC testing, and environmental stress testing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Functional Testing</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Power Analysis</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">EMC Testing</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-teal-500" data-testid="process-card-5">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">5</span>
                      <h3 className="text-xl font-bold text-foreground">Production & Support</h3>
                      <span className="ml-auto text-sm text-muted-foreground">Ongoing</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Prepare for mass production, provide manufacturing support, documentation, and ongoing technical assistance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Production Files</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Documentation</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Support</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <GlassCard className="p-8 hover-lift" data-testid="technologies-card">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Technologies We Work With</h2>
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

      {/* FAQs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our hardware development services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="overflow-hidden hover-lift">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="p-12 text-center max-w-4xl mx-auto hover-lift" data-testid="cta-card">
            <div className="w-20 h-20 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="cta-icon">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Build Your Hardware Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From concept to production, we deliver complete embedded systems solutions. Contact us for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-blue text-white hover:opacity-90 transition-opacity" data-testid="button-hardware-contact">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="hover:bg-muted/50 transition-colors" data-testid="button-view-projects">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HardwareDevelopment;
