import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, CheckCircle, Terminal, Shield, Cog, Lightbulb, Pencil, Wrench, TestTube, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";

const FirmwareProgramming = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "What programming languages do you use for firmware development?",
      a: "We primarily use C/C++ for embedded systems due to their efficiency and direct hardware access. We also work with Assembly for performance-critical sections, Rust for safety-critical applications, and Python/MATLAB for prototyping and simulation."
    },
    {
      q: "Do you work with RTOS (Real-Time Operating Systems)?",
      a: "Yes, we have extensive experience with various RTOS platforms including FreeRTOS, ThreadX, Zephyr, and QNX. We can help you select the right RTOS for your application and implement efficient task scheduling and resource management."
    },
    {
      q: "Can you develop firmware for safety-critical applications?",
      a: "Absolutely. We have experience developing firmware that complies with safety standards including DO-178C (aerospace), IEC 61508 (industrial), and ISO 26262 (automotive). We follow rigorous development processes with comprehensive testing and documentation."
    },
    {
      q: "How do you handle firmware updates and versioning?",
      a: "We implement robust over-the-air (OTA) update mechanisms with secure bootloaders, version management, and rollback capabilities. All firmware updates are encrypted and authenticated to ensure security."
    },
    {
      q: "What debugging tools and techniques do you use?",
      a: "We use professional debugging tools including JTAG/SWD debuggers, oscilloscopes, logic analyzers, and protocol analyzers. Our debugging techniques include real-time tracing, memory profiling, and comprehensive logging systems."
    }
  ];
  
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

          {/* Process Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Firmware Development Process</h2>
            <div className="space-y-8">
              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</span>
                      <h3 className="text-xl font-bold text-foreground">Requirements & Architecture</h3>
                      <span className="ml-auto text-sm text-muted-foreground">2-3 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Define system requirements, select RTOS or bare-metal approach, design software architecture, and establish coding standards.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Requirements Analysis</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Architecture Design</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">RTOS Selection</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Pencil className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</span>
                      <h3 className="text-xl font-bold text-foreground">Core Development</h3>
                      <span className="ml-auto text-sm text-muted-foreground">7-14 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Implement drivers, communication protocols, application logic, and real-time task scheduling with efficient memory management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Driver Development</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Protocol Implementation</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Task Scheduling</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</span>
                      <h3 className="text-xl font-bold text-foreground">Optimization & Debugging</h3>
                      <span className="ml-auto text-sm text-muted-foreground">5-7 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Optimize code for performance and memory usage, debug using JTAG/SWD tools, and implement error handling and logging.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Code Optimization</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JTAG Debugging</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Memory Profiling</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</span>
                      <h3 className="text-xl font-bold text-foreground">Testing & Validation</h3>
                      <span className="ml-auto text-sm text-muted-foreground">5-7 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive unit testing, integration testing, stress testing, and compliance validation for safety-critical systems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Unit Testing</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Integration Tests</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Stress Testing</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">5</span>
                      <h3 className="text-xl font-bold text-foreground">Deployment & Maintenance</h3>
                      <span className="ml-auto text-sm text-muted-foreground">Ongoing</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Deploy firmware with secure bootloader, implement OTA update mechanism, and provide ongoing maintenance and support.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Secure Boot</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">OTA Updates</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Maintenance</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
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

      {/* FAQs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our firmware development services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="overflow-hidden">
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
          <GlassCard className="p-12 text-center max-w-4xl mx-auto">
            <Code className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Build Reliable Firmware?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              From bare-metal to RTOS, we deliver optimized firmware solutions. Get in touch for expert firmware development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-firmware-contact">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" data-testid="button-view-firmware-projects">
                  View Our Work
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

export default FirmwareProgramming;
