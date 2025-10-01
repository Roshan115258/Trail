import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Truck, CheckCircle, Download, Wifi, DollarSign, BarChart3, Star, Quote, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";
import dairyImage1 from "@assets/stock_images/dairy_farm_milk_coll_423d52cf.jpg";
import dairyImage2 from "@assets/stock_images/dairy_farm_milk_coll_f66b6350.jpg";
import dairyImage3 from "@assets/stock_images/dairy_farm_milk_coll_1204a2c2.jpg";

const DPUAMCUSystems = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "What capacity options are available for DPU/AMCU systems?",
      a: "Our systems range from 500L/hour for small collection centers to 5000L/hour for large cooperatives. We can also customize capacity based on your specific requirements and daily milk collection volumes."
    },
    {
      q: "How accurate is the integrated milk analyzer?",
      a: "The integrated analyzers provide ±0.02% accuracy for fat content and ±0.05% for SNF, meeting international dairy standards. Advanced models include adulteration detection and full composition analysis."
    },
    {
      q: "Can the system integrate with our existing payment infrastructure?",
      a: "Yes! Our systems support direct bank transfer integration, mobile payment apps, and can generate instant digital receipts. We provide APIs for integration with your existing ERP or payment systems."
    },
    {
      q: "What training is required to operate the system?",
      a: "Basic operation training takes 1-2 days for operators. We provide comprehensive training materials, hands-on setup assistance, and ongoing support. The intuitive touchscreen interface makes daily operation straightforward."
    },
    {
      q: "Do you provide installation and after-sales support?",
      a: "Absolutely! We handle complete installation, commissioning, and operator training. All systems include warranty coverage with 24/7 technical support, remote diagnostics, and on-site service when needed."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-24 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="hero-icon">
              <Truck className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8" data-testid="dpu-amcu-title">
              DPU/AMCU Collection Systems
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Automated milk collection units with integrated payment systems, quality testing, and real-time data transmission.
            </p>
            <div className="max-w-5xl mx-auto mb-12">
              <img 
                src={dairyImage1} 
                alt="Automated dairy milk collection system at farm with modern DPU/AMCU equipment and farmer delivering fresh milk" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" 
                data-testid="hero-image"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Complete Collection Solution</h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Our DPU (Dairy Processing Unit) and AMCU (Automatic Milk Collection Unit) systems revolutionize 
                dairy operations with fully automated collection, quality testing, and payment processing. 
                Designed for efficiency and transparency in dairy supply chains.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Automated milk collection and weighing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Real-time quality analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Instant payment calculation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Cloud-based data management</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="gradient-blue text-white hover:opacity-90 transition-opacity" size="lg" data-testid="button-get-quote">
                    Get Quote
                  </Button>
                </Link>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  alert('Product datasheet will be available for download soon. Please contact us for detailed specifications.');
                }} data-testid="button-download-datasheet">
                  <Button variant="outline" size="lg" className="hover:bg-muted/50 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download Datasheet
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <img 
                src={dairyImage2} 
                alt="Dairy farm milk collection center with automated AMCU system processing and quality testing equipment" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
                data-testid="content-image"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center hover-lift border-t-4 border-teal-500" data-testid="card-quality">
              <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Quality Testing</h3>
              <p className="text-lg text-muted-foreground">
                Integrated milk analyzer for fat, protein, and SNF testing with automatic 
                acceptance/rejection based on quality parameters.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-cyan-500" data-testid="card-payment">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Payment System</h3>
              <p className="text-lg text-muted-foreground">
                Automated payment calculation based on quantity and quality with 
                instant farmer receipts and bank transfer integration.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-blue-500" data-testid="card-monitoring">
              <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Remote Monitoring</h3>
              <p className="text-lg text-muted-foreground">
                Real-time data transmission to cloud servers with mobile app 
                access for farmers and dairy managers.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-20 hover-lift" data-testid="features-card">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">System Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Collection Features</h4>
                <ul className="text-lg text-muted-foreground space-y-2">
                  <li>• Capacity: 500-5000L per hour</li>
                  <li>• Automatic can washing</li>
                  <li>• RFID farmer identification</li>
                  <li>• Digital weighing (±10g accuracy)</li>
                  <li>• Temperature monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Quality Parameters</h4>
                <ul className="text-lg text-muted-foreground space-y-2">
                  <li>• Fat content analysis</li>
                  <li>• SNF measurement</li>
                  <li>• Protein content</li>
                  <li>• Adulteration detection</li>
                  <li>• pH level monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Data Management</h4>
                <ul className="text-lg text-muted-foreground space-y-2">
                  <li>• Cloud data storage</li>
                  <li>• Real-time reporting</li>
                  <li>• SMS notifications</li>
                  <li>• Mobile app integration</li>
                  <li>• GPS tracking</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <div className="mb-20">
            <div className="text-center mb-12">
              <img 
                src={dairyImage3} 
                alt="Dairy milk collection center with automated weighing system and quality control for fresh milk processing" 
                className="w-full max-w-4xl h-80 object-cover rounded-3xl shadow-2xl mx-auto mb-12" 
                data-testid="feature-image"
              />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <GlassCard className="p-8 hover-lift border-l-4 border-teal-500" data-testid="benefits-farmers">
                <h3 className="text-2xl font-bold text-foreground mb-6">Benefits for Farmers</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Transparent payment system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Instant quality feedback</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Reduced waiting time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Digital records and receipts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Direct bank transfers</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-cyan-500" data-testid="benefits-dairies">
                <h3 className="text-2xl font-bold text-foreground mb-6">Benefits for Dairies</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Automated operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Quality assurance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Reduced labor costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Real-time monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-lg text-foreground">Data-driven decisions</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* System Comparison */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Choose Your System</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <GlassCard className="p-8 relative hover-lift" data-testid="model-card-dpu-basic">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">DPU Basic</h3>
                  <p className="text-sm text-muted-foreground mb-4">For small collection centers</p>
                  <div className="text-3xl font-bold text-primary">From ₹15,00,000</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">500L/hour capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Basic milk analyzer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">RFID farmer ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">SMS notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">1 year warranty</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full" variant="outline" data-testid="button-quote-dpu-basic">Get Quote</Button>
                </Link>
              </GlassCard>

              <GlassCard className="p-8 relative border-2 border-primary hover-lift" data-testid="model-card-amcu-standard">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">AMCU Standard</h3>
                  <p className="text-sm text-muted-foreground mb-4">Complete automation</p>
                  <div className="text-3xl font-bold text-primary">From ₹28,00,000</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">2000L/hour capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Advanced analyzer + adulteration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Auto can washing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Cloud + mobile app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">2 years warranty + support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full gradient-blue text-white hover:opacity-90 transition-opacity" data-testid="button-quote-amcu-standard">Get Quote</Button>
                </Link>
              </GlassCard>

              <GlassCard className="p-8 relative hover-lift" data-testid="model-card-amcu-premium">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">AMCU Premium</h3>
                  <p className="text-sm text-muted-foreground mb-4">For large cooperatives</p>
                  <div className="text-3xl font-bold text-primary">From ₹45,00,000</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">5000L/hour capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Full lab-grade analyzer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">GPS tracking system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Bank integration + API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">3 years warranty + priority support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full" variant="outline" data-testid="button-quote-amcu-premium">Get Quote</Button>
                </Link>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming dairy operations across the country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-8 hover-lift" data-testid="testimonial-card-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "Our AMCU system has revolutionized milk collection. Farmers get instant payment receipts, and we've reduced collection time by 70%. ROI was achieved in just 18 months!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">AS</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Anil Sharma</div>
                  <div className="text-sm text-muted-foreground">Dairy Cooperative Manager</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 hover-lift" data-testid="testimonial-card-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "The cloud-based monitoring is a game changer. I can track all collection centers from my office in real-time. Quality issues are detected immediately, preventing bad milk from entering the supply chain."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">PJ</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Priya Joshi</div>
                  <div className="text-sm text-muted-foreground">Operations Director</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 hover-lift" data-testid="testimonial-card-3">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "As a farmer, I love the transparency. I see the exact fat and SNF content of my milk, get a printed receipt, and the money is in my bank the same evening. No disputes, no delays."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">VN</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Vijay Naik</div>
                  <div className="text-sm text-muted-foreground">Dairy Farmer</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our DPU/AMCU collection systems
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
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Automate Your Dairy Collection?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your dairy operations with our DPU/AMCU systems. Get a customized solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-blue text-white hover:opacity-90 transition-opacity" data-testid="button-dpu-amcu-contact">
                  Schedule Site Visit
                </Button>
              </Link>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                alert('Product datasheet will be available for download soon. Please contact us for detailed specifications.');
              }} data-testid="button-download-catalog">
                <Button size="lg" variant="outline" className="hover:bg-muted/50 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download Catalog
                </Button>
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "DPU/AMCU Collection Systems",
            "description": "Automated milk collection units with integrated payment systems, quality testing, and real-time data transmission for efficient dairy operations.",
            "manufacturer": {
              "@type": "Organization",
              "name": "Several Sustain"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD"
            },
            "applicationCategory": "Dairy Technology",
            "operatingSystem": "Embedded Linux"
          })
        }}
      />
    </div>
  );
};

export default DPUAMCUSystems;
