import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, CheckCircle, Smartphone, Search, Palette, Zap } from "lucide-react";

const WebDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="web-design-title">
              Professional Web Design Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom, responsive, SEO-optimized websites that transform your online presence and drive business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Transform Your Digital Presence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We create stunning, user-friendly websites that not only look great but also deliver exceptional 
                performance and convert visitors into customers. Our web design services combine modern aesthetics 
                with cutting-edge technology to build websites that stand out in today's competitive digital landscape.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Mobile-first responsive design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">SEO-optimized architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Fast loading speeds & performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Cross-browser compatibility</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-get-quote">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional web design workspace" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Responsive Design</h3>
              <p className="text-muted-foreground">
                Mobile-first approach ensuring your website looks perfect and functions flawlessly 
                on all devices, from smartphones to desktops.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">SEO Optimization</h3>
              <p className="text-muted-foreground">
                Built-in SEO best practices with optimized meta tags, structured data, 
                and fast loading speeds to rank higher in search results.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Custom UI/UX</h3>
              <p className="text-muted-foreground">
                Unique, brand-focused designs with intuitive user experiences 
                that engage visitors and drive conversions.
              </p>
            </GlassCard>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  1
                </div>
                <h4 className="font-semibold text-foreground mb-2">Discovery</h4>
                <p className="text-sm text-muted-foreground">Understanding your brand, goals, and target audience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-2">Design</h4>
                <p className="text-sm text-muted-foreground">Creating wireframes and visual mockups</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-2">Development</h4>
                <p className="text-sm text-muted-foreground">Building responsive, performant websites</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  4
                </div>
                <h4 className="font-semibold text-foreground mb-2">Launch</h4>
                <p className="text-sm text-muted-foreground">Testing, deployment, and ongoing support</p>
              </div>
            </div>
          </div>

          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Lightning Fast Performance</h4>
                  <p className="text-muted-foreground text-sm">Optimized code and assets for blazing fast load times that keep visitors engaged</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Content Management</h4>
                  <p className="text-muted-foreground text-sm">Easy-to-use CMS integration for effortless content updates without technical knowledge</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">E-commerce Ready</h4>
                  <p className="text-muted-foreground text-sm">Integrated shopping carts, payment gateways, and inventory management systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Analytics Integration</h4>
                  <p className="text-muted-foreground text-sm">Built-in tracking and analytics to measure performance and user behavior</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesign;
