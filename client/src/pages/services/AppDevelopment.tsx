import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Smartphone, CheckCircle, Globe, Monitor, Wifi, Lightbulb, Pencil, Code, TestTube, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";
import appImage1 from "@assets/stock_images/mobile_app_developme_2ad31b4c.jpg";
import appImage2 from "@assets/stock_images/mobile_app_developme_d0a03ac7.jpg";

const AppDevelopment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "Do you develop both mobile and web applications?",
      a: "Yes, we develop all types of applications including native iOS/Android apps, cross-platform mobile apps (React Native, Flutter), responsive web applications, and desktop applications. We recommend the best platform based on your specific needs."
    },
    {
      q: "Can the app connect to IoT devices and hardware?",
      a: "Absolutely! We specialize in building applications that connect to IoT devices, embedded systems, and hardware. We implement real-time communication protocols including Bluetooth, WiFi, MQTT, and RESTful APIs for device control and monitoring."
    },
    {
      q: "What about offline functionality?",
      a: "We build apps with robust offline capabilities including local data storage, background synchronization, and queue-based operations. This ensures your app works seamlessly even without internet connectivity."
    },
    {
      q: "How do you handle app security and data privacy?",
      a: "Security is built into every layer of our apps. We implement secure authentication, encrypted data transmission, secure local storage, and follow platform-specific security best practices. We also ensure GDPR and data privacy compliance."
    },
    {
      q: "Do you provide app maintenance and updates?",
      a: "Yes, we offer comprehensive maintenance packages including bug fixes, performance optimization, OS updates compatibility, new feature development, and regular security updates to keep your app running smoothly."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-24 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="hero-icon">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8" data-testid="app-development-title">
              App Development Services
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Mobile and web applications for IoT device control and data visualization platforms.
            </p>
            <div className="max-w-5xl mx-auto mb-12">
              <img 
                src={appImage1} 
                alt="Modern mobile app development with innovative user interface design and seamless user experience" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" 
                data-testid="hero-image"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Connected Solutions</h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Our app development services create seamless connections between your hardware and users. 
                We build intuitive mobile and web applications that provide real-time monitoring, control, 
                and data visualization for your IoT and embedded systems.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Cross-platform mobile apps</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Real-time data visualization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">IoT device management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Cloud integration</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="gradient-secondary text-white hover:opacity-90 transition-opacity" size="lg" data-testid="button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={appImage2} 
                alt="Professional mobile application development with advanced features and responsive design" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
                data-testid="content-image"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center hover-lift border-t-4 border-orange-500" data-testid="card-mobile">
              <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mobile Apps</h3>
              <p className="text-lg text-muted-foreground">
                Native and cross-platform mobile applications for iOS and Android with 
                intuitive user interfaces and real-time device connectivity.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-amber-500" data-testid="card-web">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Web Applications</h3>
              <p className="text-lg text-muted-foreground">
                Responsive web applications with modern frameworks for data visualization, 
                device management, and system administration.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-yellow-500" data-testid="card-desktop">
              <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Desktop Apps</h3>
              <p className="text-lg text-muted-foreground">
                Desktop applications for industrial control systems, data analysis, 
                and configuration tools with advanced functionality.
              </p>
            </GlassCard>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Our App Development Process</h2>
            <div className="space-y-8">
              <GlassCard className="p-8 hover-lift border-l-4 border-orange-500" data-testid="process-card-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</span>
                      <h3 className="text-xl font-bold text-foreground">Discovery & Planning</h3>
                      <span className="ml-auto text-sm text-muted-foreground">3-5 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Define user requirements, create user personas, select technology stack, and plan app architecture with feature prioritization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">User Research</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tech Stack Selection</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Feature Planning</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-amber-500" data-testid="process-card-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Pencil className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</span>
                      <h3 className="text-xl font-bold text-foreground">UI/UX Design</h3>
                      <span className="ml-auto text-sm text-muted-foreground">5-7 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Create wireframes, design mockups, build interactive prototypes, and iterate based on feedback for optimal user experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Wireframing</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">UI Design</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Prototyping</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-yellow-500" data-testid="process-card-3">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</span>
                      <h3 className="text-xl font-bold text-foreground">Development & Integration</h3>
                      <span className="ml-auto text-sm text-muted-foreground">15-20 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Build frontend and backend, implement device connectivity, integrate APIs, and develop real-time features with cloud services.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Frontend Development</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Backend APIs</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Device Integration</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-orange-600" data-testid="process-card-4">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</span>
                      <h3 className="text-xl font-bold text-foreground">Testing & QA</h3>
                      <span className="ml-auto text-sm text-muted-foreground">5-7 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive testing including functional, performance, security, and user acceptance testing across all target devices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Functional Testing</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Device Testing</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Security Audit</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-amber-600" data-testid="process-card-5">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">5</span>
                      <h3 className="text-xl font-bold text-foreground">Deployment & Support</h3>
                      <span className="ml-auto text-sm text-muted-foreground">3-5 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Deploy to app stores/web servers, monitor performance, provide user training, and offer ongoing maintenance and updates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Store Deployment</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Monitoring</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Maintenance</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <GlassCard className="p-8 hover-lift" data-testid="card-technologies">
              <h3 className="text-2xl font-bold text-foreground mb-6">Technologies We Use</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mobile Development</h4>
                  <p className="text-muted-foreground">React Native, Flutter, Native iOS/Android, Xamarin</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Web Development</h4>
                  <p className="text-muted-foreground">React, Vue.js, Angular, Node.js, Python Django</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Desktop Development</h4>
                  <p className="text-muted-foreground">Electron, Qt, .NET, WPF, Java Swing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Backend Services</h4>
                  <p className="text-muted-foreground">Node.js, Python, Go, Docker, Kubernetes</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 hover-lift" data-testid="card-features">
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Real-time data synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Offline functionality</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Push notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">User authentication</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Data analytics dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Cloud storage integration</span>
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
              Common questions about our app development services
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
            <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="cta-icon">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Build Your Connected App?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From mobile to web to desktop, we create apps that connect seamlessly with your devices. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-secondary text-white hover:opacity-90 transition-opacity" data-testid="button-app-contact">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="hover:bg-muted/50 transition-colors" data-testid="button-view-app-portfolio">
                  View App Portfolio
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

export default AppDevelopment;
