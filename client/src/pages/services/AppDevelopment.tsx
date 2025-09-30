import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Smartphone, CheckCircle, Globe, Monitor, Wifi } from "lucide-react";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="app-development-title">
              App Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mobile and web applications for IoT device control and data visualization platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Connected Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our app development services create seamless connections between your hardware and users. 
                We build intuitive mobile and web applications that provide real-time monitoring, control, 
                and data visualization for your IoT and embedded systems.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Cross-platform mobile apps</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Real-time data visualization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">IoT device management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Cloud integration</span>
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
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Mobile app development" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Mobile Apps</h3>
              <p className="text-muted-foreground">
                Native and cross-platform mobile applications for iOS and Android with 
                intuitive user interfaces and real-time device connectivity.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Web Applications</h3>
              <p className="text-muted-foreground">
                Responsive web applications with modern frameworks for data visualization, 
                device management, and system administration.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Desktop Apps</h3>
              <p className="text-muted-foreground">
                Desktop applications for industrial control systems, data analysis, 
                and configuration tools with advanced functionality.
              </p>
            </GlassCard>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <GlassCard className="p-8">
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

            <GlassCard className="p-8">
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

      <Footer />
    </div>
  );
};

export default AppDevelopment;
