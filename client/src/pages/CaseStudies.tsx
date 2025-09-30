import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Clock, Users, Target } from "lucide-react";
import { Link } from "wouter";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      category: "IoT Agriculture",
      title: "Smart Farm Monitoring System",
      description: "Complete IoT solution for precision agriculture with soil sensors, weather monitoring, and mobile app integration.",
      duration: "6 months development",
      client: "Agricultural Cooperative",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["IoT", "Agriculture", "Mobile App", "Sensors"],
      challenge: "Farmers needed real-time monitoring of soil conditions, weather, and crop health across large agricultural areas.",
      solution: "Deployed wireless sensor network with LoRaWAN connectivity, cloud-based data analytics, and mobile app for farmers.",
      results: ["30% increase in crop yield", "40% reduction in water usage", "Real-time alerts prevented crop damage"]
    },
    {
      id: 2,
      category: "Medical Device",
      title: "Patient Monitoring System",
      description: "FDA-compliant medical device with real-time vital signs monitoring and cloud connectivity for healthcare providers.",
      duration: "12 months development",
      client: "Healthcare Technology Company",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Medical", "FDA", "Real-time", "Cloud"],
      challenge: "Develop FDA-compliant device for continuous patient monitoring with secure data transmission.",
      solution: "Created medical-grade device with multiple sensors, encrypted data transmission, and clinical dashboard.",
      results: ["FDA 510(k) clearance obtained", "24/7 patient monitoring", "50% reduction in emergency incidents"]
    },
    {
      id: 3,
      category: "Industrial IoT",
      title: "Factory Automation Controller",
      description: "High-performance industrial controller with predictive maintenance capabilities and Industry 4.0 integration.",
      duration: "8 months development",
      client: "Manufacturing Consortium",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Industrial", "Automation", "Predictive Maintenance", "Industry 4.0"],
      challenge: "Modernize legacy manufacturing equipment with predictive maintenance and real-time monitoring.",
      solution: "Developed industrial IoT controller with machine learning algorithms for predictive analytics.",
      results: ["60% reduction in unplanned downtime", "25% increase in productivity", "Predictive maintenance alerts"]
    },
    {
      id: 4,
      category: "Dairy Technology",
      title: "Automated Milk Collection Network",
      description: "Deployment of 50+ DPU/AMCU systems across rural dairy cooperative with centralized monitoring.",
      duration: "10 months deployment",
      client: "Regional Dairy Cooperative",
      image: "https://images.unsplash.com/photo-1606880700051-d70bdf7cb265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Dairy", "Automation", "Payment Systems", "Rural Technology"],
      challenge: "Modernize milk collection across 200+ villages with transparent payment and quality assurance.",
      solution: "Deployed network of automated collection units with real-time quality testing and payment systems.",
      results: ["98% farmer satisfaction", "Zero payment disputes", "15% increase in milk quality scores"]
    },
    {
      id: 5,
      category: "Energy Management",
      title: "Smart Grid Monitoring System",
      description: "Real-time power grid monitoring with fault detection and automatic load balancing for utility company.",
      duration: "14 months development",
      client: "Regional Power Utility",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Smart Grid", "Power Systems", "Fault Detection", "Load Balancing"],
      challenge: "Implement real-time grid monitoring with automatic fault detection and load management.",
      solution: "Created distributed monitoring system with AI-powered fault detection and automated response.",
      results: ["40% reduction in power outages", "Real-time grid visualization", "Automated fault isolation"]
    },
    {
      id: 6,
      category: "Environmental Monitoring",
      title: "Water Quality Monitoring Network",
      description: "Wireless sensor network for real-time water quality monitoring in municipal water treatment facilities.",
      duration: "7 months development",
      client: "Municipal Water Authority",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Environmental", "Water Quality", "Wireless", "Municipal"],
      challenge: "Monitor water quality parameters across multiple treatment facilities with real-time alerts.",
      solution: "Deployed wireless sensor network with cloud-based analytics and automated alert system.",
      results: ["100% regulatory compliance", "Early contamination detection", "Remote monitoring capability"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="case-studies-title">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform their ideas into successful electronic products 
              that drive innovation and deliver measurable results.
            </p>
          </div>

          {/* Featured Case Study */}
          <GlassCard className="p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-primary font-semibold mb-2">Featured Case Study</div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{caseStudies[0].title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{caseStudies[0].description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">Duration</div>
                    <div className="text-xs text-muted-foreground">{caseStudies[0].duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">Client</div>
                    <div className="text-xs text-muted-foreground">{caseStudies[0].client}</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">Category</div>
                    <div className="text-xs text-muted-foreground">{caseStudies[0].category}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudies[0].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/contact">
                  <div className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all cursor-pointer" data-testid="link-discuss-project">
                    Discuss Your Project <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
              <div>
                <img 
                  src={caseStudies[0].image} 
                  alt={caseStudies[0].title} 
                  className="w-full h-80 object-cover rounded-xl" 
                />
              </div>
            </div>
          </GlassCard>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.slice(1).map((study) => (
              <GlassCard key={study.id} className="group overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{study.category}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{study.duration}</span>
                    <Link href="/contact">
                      <div className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all cursor-pointer" data-testid={`link-case-study-${study.id}`}>
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <GlassCard className="p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help transform your innovative ideas into market-ready products 
                that deliver exceptional results.
              </p>
              <Link href="/contact">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors cursor-pointer" data-testid="button-start-project">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Case Studies - Several Sustain",
            "description": "Success stories and case studies showcasing Several Sustain's electronics development projects across various industries.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": caseStudies.map((study, index) => ({
                "@type": "Article",
                "position": index + 1,
                "headline": study.title,
                "description": study.description,
                "articleSection": study.category,
                "author": {
                  "@type": "Organization",
                  "name": "Several Sustain"
                }
              }))
            }
          })
        }}
      />
    </div>
  );
};

export default CaseStudies;
