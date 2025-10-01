import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, CheckCircle, Terminal, Shield, Cog, Lightbulb, Pencil, Wrench, TestTube, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";
import firmwareImage1 from "@assets/stock_images/software_engineer_co_e48f8e0b.jpg";
import firmwareImage2 from "@assets/stock_images/software_engineer_co_b31f5c8b.jpg";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Firmware Programming Services - Several Sustain | Low-Level Embedded Development</title>
        <meta name="description" content="Professional firmware programming services in Bihar, India. Low-level development for embedded systems with RTOS, C/C++, and safety-critical applications. Expert firmware solutions from Several Sustain." />
        <link rel="canonical" href="https://severalsustain.in/services/development/firmware" />
        
        <meta property="og:title" content="Firmware Programming Services - Several Sustain" />
        <meta property="og:description" content="Low-level firmware development for optimal performance and reliability in embedded systems with RTOS support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://severalsustain.in/services/development/firmware" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Firmware Programming Services - Several Sustain" />
        <meta name="twitter:description" content="Professional firmware development with RTOS, C/C++, and safety-critical application support." />
      </Helmet>
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-24 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="hero-icon">
              <Code className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8" data-testid="firmware-programming-title">
              Firmware Programming Services
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Low-level firmware development for optimal performance and reliability in embedded systems.
            </p>
            <div className="max-w-5xl mx-auto mb-12">
              <img 
                src={firmwareImage1} 
                alt="Professional firmware programming with modern development tools and embedded systems engineering" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" 
                data-testid="hero-image"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Optimized Embedded Software</h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Our firmware programming services deliver highly optimized, reliable code that maximizes 
                hardware performance while ensuring robust operation. From bare-metal programming to 
                RTOS-based applications, we create firmware that meets your exact requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Real-time operating systems (RTOS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Bare-metal programming</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Communication protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Safety-critical applications</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="gradient-purple text-white hover:opacity-90 transition-opacity" size="lg" data-testid="button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={firmwareImage2} 
                alt="Expert firmware development and embedded systems programming with modern debugging tools" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
                data-testid="content-image"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center hover-lift border-t-4 border-purple-500" data-testid="card-rtos">
              <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">RTOS Development</h3>
              <p className="text-lg text-muted-foreground">
                Real-time operating system implementation with FreeRTOS, ThreadX, and custom RTOS 
                solutions for time-critical applications.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-blue-500" data-testid="card-safety">
              <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Safety Critical</h3>
              <p className="text-lg text-muted-foreground">
                Firmware for safety-critical systems with DO-178C, IEC 61508, and ISO 26262 
                compliance for automotive and aerospace applications.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-purple-600" data-testid="card-protocols">
              <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Protocol Stacks</h3>
              <p className="text-lg text-muted-foreground">
                Implementation of communication protocols including TCP/IP, Modbus, CAN, 
                LoRaWAN, and custom proprietary protocols.
              </p>
            </GlassCard>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Our Firmware Development Process</h2>
            <div className="space-y-8">
              <GlassCard className="p-8 hover-lift border-l-4 border-purple-500" data-testid="process-card-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-8 h-8 text-white" />
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

              <GlassCard className="p-8 hover-lift border-l-4 border-blue-500" data-testid="process-card-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Pencil className="w-8 h-8 text-white" />
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

              <GlassCard className="p-8 hover-lift border-l-4 border-purple-600" data-testid="process-card-3">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-8 h-8 text-white" />
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

              <GlassCard className="p-8 hover-lift border-l-4 border-indigo-500" data-testid="process-card-4">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-8 h-8 text-white" />
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

              <GlassCard className="p-8 hover-lift border-l-4 border-purple-500" data-testid="process-card-5">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-white" />
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
            <GlassCard className="p-8 hover-lift" data-testid="card-languages">
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

            <GlassCard className="p-8 hover-lift" data-testid="card-tools">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our firmware development services
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
            <div className="w-20 h-20 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="cta-icon">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Build Reliable Firmware?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From bare-metal to RTOS, we deliver optimized firmware solutions. Get in touch for expert firmware development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-purple text-white hover:opacity-90 transition-opacity" data-testid="button-firmware-contact">
                  Get Free Consultation
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
