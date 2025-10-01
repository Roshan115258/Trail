import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, CheckCircle, Smartphone, Search, Palette, Zap, Lightbulb, Pencil, Code, TestTube2, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";
import webImage1 from "@assets/stock_images/professional_web_des_9796e36b.jpg";
import webImage2 from "@assets/stock_images/professional_web_des_960414d2.jpg";

const WebDesign = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "How long does it take to design and build a website?",
      a: "A standard business website typically takes 4-6 weeks from start to launch. More complex sites with custom features or e-commerce functionality may take 8-12 weeks. We provide a detailed timeline during our initial consultation."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look great and function perfectly on all devices - smartphones, tablets, and desktops."
    },
    {
      q: "Can I update the website content myself?",
      a: "Yes! We integrate user-friendly content management systems (CMS) that allow you to easily update text, images, and other content without any technical knowledge. We also provide training on how to use the CMS."
    },
    {
      q: "Do you provide ongoing support after the website launches?",
      a: "Yes, we offer various maintenance and support packages including regular updates, security monitoring, content updates, and technical support to keep your website running smoothly."
    },
    {
      q: "Will my website be optimized for search engines (SEO)?",
      a: "Yes, SEO optimization is built into every website we create. This includes proper meta tags, structured data, fast loading speeds, mobile responsiveness, and clean code - all factors that help your site rank well in search results."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-24 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="hero-icon">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8" data-testid="web-design-title">
              Professional Web Design Services
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Custom, responsive, SEO-optimized websites that transform your online presence and drive business growth.
            </p>
            <div className="max-w-5xl mx-auto mb-12">
              <img 
                src={webImage1} 
                alt="Professional web design and development workspace showcasing modern UI/UX design on multiple devices" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" 
                data-testid="hero-image"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Transform Your Digital Presence</h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                We create stunning, user-friendly websites that not only look great but also deliver exceptional 
                performance and convert visitors into customers. Our web design services combine modern aesthetics 
                with cutting-edge technology to build websites that stand out in today's competitive digital landscape.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Mobile-first responsive design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">SEO-optimized architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Fast loading speeds & performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Cross-browser compatibility</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="gradient-hero text-white hover:opacity-90 transition-opacity" size="lg" data-testid="button-get-quote">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={webImage2} 
                alt="Modern responsive web design showcasing professional website development and user interface design" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
                data-testid="content-image"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center hover-lift border-t-4 border-teal-500" data-testid="card-responsive">
              <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Responsive Design</h3>
              <p className="text-lg text-muted-foreground">
                Mobile-first approach ensuring your website looks perfect and functions flawlessly 
                on all devices, from smartphones to desktops.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-green-500" data-testid="card-seo">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">SEO Optimization</h3>
              <p className="text-lg text-muted-foreground">
                Built-in SEO best practices with optimized meta tags, structured data, 
                and fast loading speeds to rank higher in search results.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-teal-600" data-testid="card-uiux">
              <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Custom UI/UX</h3>
              <p className="text-lg text-muted-foreground">
                Unique, brand-focused designs with intuitive user experiences 
                that engage visitors and drive conversions.
              </p>
            </GlassCard>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Our Web Design Process</h2>
            <div className="space-y-8">
              <GlassCard className="p-8 hover-lift border-l-4 border-teal-500" data-testid="process-card-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</span>
                      <h3 className="text-xl font-bold text-foreground">Discovery & Strategy</h3>
                      <span className="ml-auto text-sm text-muted-foreground">3-5 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Deep dive into your business, brand identity, target audience, and competitors. We define project goals, user personas, and create a comprehensive strategy for your website.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Brand Analysis</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">User Research</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Strategy Document</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-green-500" data-testid="process-card-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Pencil className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</span>
                      <h3 className="text-xl font-bold text-foreground">Design & Wireframing</h3>
                      <span className="ml-auto text-sm text-muted-foreground">5-7 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Create wireframes and visual mockups that bring your vision to life. We iterate on designs until you're completely satisfied with the look and feel.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Wireframes</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Visual Mockups</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Design Iterations</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-teal-600" data-testid="process-card-3">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</span>
                      <h3 className="text-xl font-bold text-foreground">Development & Build</h3>
                      <span className="ml-auto text-sm text-muted-foreground">10-15 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Transform designs into a fully functional, responsive website using modern technologies. We build with performance, security, and scalability in mind.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Responsive Coding</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CMS Integration</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Performance Optimization</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-green-600" data-testid="process-card-4">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                    <TestTube2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</span>
                      <h3 className="text-xl font-bold text-foreground">Testing & Quality Assurance</h3>
                      <span className="ml-auto text-sm text-muted-foreground">3-5 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Rigorous testing across browsers, devices, and screen sizes. We ensure everything works perfectly before launch.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Cross-browser Testing</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Device Testing</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">SEO Audit</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-teal-500" data-testid="process-card-5">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">5</span>
                      <h3 className="text-xl font-bold text-foreground">Launch & Support</h3>
                      <span className="ml-auto text-sm text-muted-foreground">2-3 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Deploy your website to production with proper monitoring and analytics. We provide training and ongoing support to ensure your success.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Deployment</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Training</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Ongoing Support</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <GlassCard className="p-8 mb-20 hover-lift border-t-4 border-green-500" data-testid="features-card">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">Key Features</h2>
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Recent Web Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of stunning websites built for clients across various industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="overflow-hidden group hover-lift" data-testid="portfolio-card-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern e-commerce fashion store website design with responsive layout and seamless shopping experience" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  E-commerce
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Fashion E-Store</h3>
                <p className="text-muted-foreground mb-4">Modern online store with seamless checkout and inventory management</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-muted rounded">React</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">Shopify</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">SEO</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden group hover-lift" data-testid="portfolio-card-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional corporate tech startup website with clean design and dynamic content management" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Corporate
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Tech Startup Site</h3>
                <p className="text-muted-foreground mb-4">Clean, professional website with dynamic content and analytics integration</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-muted rounded">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">CMS</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">Analytics</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden group hover-lift" data-testid="portfolio-card-3">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Beautiful restaurant website design with online reservation system and elegant menu showcase" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Restaurant
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Gourmet Restaurant</h3>
                <p className="text-muted-foreground mb-4">Beautiful restaurant site with online reservations and menu showcase</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-muted rounded">WordPress</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">Booking</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">Mobile-First</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our web design services
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

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="p-12 text-center max-w-4xl mx-auto hover-lift" data-testid="cta-card">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="cta-icon">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a stunning website that drives results. Get in touch for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity" data-testid="button-web-contact">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="hover:bg-muted/50 transition-colors" data-testid="button-view-portfolio">
                  View Full Portfolio
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

export default WebDesign;
