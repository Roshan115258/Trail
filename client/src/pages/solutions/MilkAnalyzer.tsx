import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Beaker, CheckCircle, Download, BarChart3, Settings, Shield, Star, Quote, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";
import milkImage1 from "@assets/stock_images/milk_analyzer_labora_7c542620.jpg";
import milkImage2 from "@assets/stock_images/milk_analyzer_labora_cde72be9.jpg";
import milkImage3 from "@assets/stock_images/milk_analyzer_labora_0190cea5.jpg";

const MilkAnalyzer = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "How accurate are the milk analyzer measurements?",
      a: "Our milk analyzers provide industry-leading accuracy with ±0.02% for fat content, ±0.02% for protein, ±0.03% for lactose, and ±0.05% for SNF. This precision meets international dairy standards and ensures reliable quality testing."
    },
    {
      q: "Can the analyzer handle different types of milk?",
      a: "Yes! Our analyzers can test cow milk, buffalo milk, goat milk, sheep milk, and even plant-based milk alternatives. The system automatically adjusts calibration for different milk types."
    },
    {
      q: "How often does the analyzer need calibration?",
      a: "The Professional and Enterprise models feature automatic calibration that runs daily. The Basic model requires manual calibration every 7 days. All calibration procedures are simple and take less than 5 minutes."
    },
    {
      q: "What training is required to operate the analyzer?",
      a: "Basic operation training takes just 2-3 hours. We provide comprehensive training materials, video tutorials, and hands-on training during installation. The intuitive interface makes daily operation straightforward for all users."
    },
    {
      q: "Do you provide technical support and service?",
      a: "Yes! All models include warranty coverage with technical support via phone, email, and remote assistance. We also offer on-site service, spare parts, and preventive maintenance contracts for uninterrupted operation."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-24 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="hero-icon">
              <Beaker className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8" data-testid="milk-analyzer-title">
              Milk Analyzer Systems
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Precision milk composition analysis with real-time fat, protein, lactose, and solids measurement for dairy excellence.
            </p>
            <div className="max-w-5xl mx-auto mb-12">
              <img 
                src={milkImage1} 
                alt="Advanced milk analyzer equipment in dairy laboratory with precision testing instruments" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" 
                data-testid="hero-image"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Advanced Milk Analysis</h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Our milk analyzer systems utilize cutting-edge near-infrared spectroscopy technology to provide 
                accurate, real-time analysis of milk composition. Perfect for dairy farms, processing plants, 
                and quality control laboratories requiring precise measurements for optimal dairy production.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Fat, protein, lactose, and SNF analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Real-time results in 60 seconds</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">±0.02% accuracy for fat content</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-foreground">Automatic calibration and cleaning</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="gradient-hero text-white hover:opacity-90 transition-opacity" size="lg" data-testid="button-get-quote">
                    Get Quote
                  </Button>
                </Link>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  alert('Product specification sheet will be available for download soon. Please contact us for detailed specifications.');
                }} data-testid="button-download-spec">
                  <Button variant="outline" size="lg" className="hover:bg-muted/50 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download Specs
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <img 
                src={milkImage2} 
                alt="Professional milk analyzer laboratory setup with quality control testing equipment" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
                data-testid="content-image"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center hover-lift border-t-4 border-teal-500" data-testid="card-realtime">
              <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Real-Time Analysis</h3>
              <p className="text-lg text-muted-foreground">
                Instantaneous measurement of milk composition with results displayed in under 60 seconds 
                for immediate quality control decisions.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-emerald-500" data-testid="card-calibration">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Auto Calibration</h3>
              <p className="text-lg text-muted-foreground">
                Automatic calibration and self-cleaning functions ensure consistent accuracy 
                with minimal maintenance requirements.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover-lift border-t-4 border-green-500" data-testid="card-quality">
              <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Quality Assurance</h3>
              <p className="text-lg text-muted-foreground">
                Built-in quality control features with automatic outlier detection 
                and compliance with international dairy standards.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-20 hover-lift" data-testid="specifications-card">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Measurement Parameters</h4>
                <ul className="text-lg text-muted-foreground space-y-2">
                  <li>• Fat: 0.01% - 20.00%</li>
                  <li>• Protein: 0.01% - 10.00%</li>
                  <li>• Lactose: 0.01% - 10.00%</li>
                  <li>• SNF: 0.01% - 25.00%</li>
                  <li>• Density: 1.000 - 1.200 g/cm³</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Accuracy</h4>
                <ul className="text-lg text-muted-foreground space-y-2">
                  <li>• Fat: ±0.02%</li>
                  <li>• Protein: ±0.02%</li>
                  <li>• Lactose: ±0.03%</li>
                  <li>• SNF: ±0.05%</li>
                  <li>• Temperature: ±0.5°C</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Operating Conditions</h4>
                <ul className="text-lg text-muted-foreground space-y-2">
                  <li>• Temperature: 5°C - 40°C</li>
                  <li>• Humidity: &lt;95% RH</li>
                  <li>• Power: 100-240V AC</li>
                  <li>• Sample volume: 20ml</li>
                  <li>• Analysis time: &lt;60 seconds</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Applications & Industries</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="p-8 hover-lift border-l-4 border-teal-500" data-testid="application-card-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                    <Beaker className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Dairy Farms</h3>
                    <p className="text-lg text-muted-foreground">
                      On-farm milk testing for herd management, nutrition optimization, and farmer payment systems. 
                      Monitor individual cow milk quality to improve herd health and productivity.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-emerald-500" data-testid="application-card-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Processing Plants</h3>
                    <p className="text-lg text-muted-foreground">
                      Incoming milk quality control and batch monitoring for consistent product quality. 
                      Ensure compliance with regulatory standards and optimize production processes.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-green-500" data-testid="application-card-3">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Quality Control Labs</h3>
                    <p className="text-lg text-muted-foreground">
                      Reference testing and calibration services with highest precision standards. 
                      Conduct detailed analysis for research, certification, and regulatory compliance.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 hover-lift border-l-4 border-cyan-500" data-testid="application-card-4">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Collection Centers</h3>
                    <p className="text-lg text-muted-foreground">
                      Rapid screening and farmer payment calculation with cloud-based data management. 
                      Process high sample volumes efficiently with accurate and transparent testing.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Choose Your Model</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <GlassCard className="p-8 relative hover-lift" data-testid="model-card-basic">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Basic</h3>
                  <p className="text-sm text-muted-foreground mb-4">Perfect for small farms</p>
                  <div className="text-3xl font-bold text-primary">From ₹7,00,000</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Fat & SNF analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">60 samples/hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Basic calibration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Manual data entry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">1 year warranty</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full" variant="outline" data-testid="button-quote-basic">Get Quote</Button>
                </Link>
              </GlassCard>

              <GlassCard className="p-8 relative border-2 border-primary hover-lift" data-testid="model-card-professional">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
                  <p className="text-sm text-muted-foreground mb-4">Ideal for collection centers</p>
                  <div className="text-3xl font-bold text-primary">From ₹12,50,000</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Fat, Protein, Lactose & SNF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">100 samples/hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Auto calibration & cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Cloud connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">2 years warranty + support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full gradient-hero text-white hover:opacity-90 transition-opacity" data-testid="button-quote-professional">Get Quote</Button>
                </Link>
              </GlassCard>

              <GlassCard className="p-8 relative hover-lift" data-testid="model-card-enterprise">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
                  <p className="text-sm text-muted-foreground mb-4">For processing plants</p>
                  <div className="text-3xl font-bold text-primary">From ₹20,00,000</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Full composition analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">200+ samples/hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Advanced auto calibration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Full API integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">3 years warranty + priority support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full" variant="outline" data-testid="button-quote-enterprise">Get Quote</Button>
                </Link>
              </GlassCard>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <img 
                src={milkImage3} 
                alt="Dairy laboratory milk analyzer equipment with precision measurement technology" 
                className="w-full max-w-4xl h-80 object-cover rounded-3xl shadow-2xl mx-auto mb-12" 
                data-testid="feature-image"
              />
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose Our Milk Analyzers?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Industry-leading technology backed by exceptional support and service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="p-8 hover-lift" data-testid="advantage-card-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Proven Accuracy</h3>
                <p className="text-lg text-muted-foreground">
                  Our analyzers meet ISO 9001 quality standards and are validated against international reference methods. 
                  Trusted by thousands of dairy professionals worldwide for consistent, reliable results.
                </p>
              </GlassCard>

              <GlassCard className="p-8 hover-lift" data-testid="advantage-card-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">Easy to Use</h3>
                <p className="text-lg text-muted-foreground">
                  Intuitive touchscreen interface with multilingual support makes operation simple. 
                  Minimal training required, and comprehensive video tutorials ensure quick onboarding.
                </p>
              </GlassCard>

              <GlassCard className="p-8 hover-lift" data-testid="advantage-card-3">
                <h3 className="text-2xl font-bold text-foreground mb-4">Comprehensive Support</h3>
                <p className="text-lg text-muted-foreground">
                  24/7 technical support, regular software updates, and nationwide service network. 
                  We're committed to keeping your analyzer running optimally throughout its lifetime.
                </p>
              </GlassCard>

              <GlassCard className="p-8 hover-lift" data-testid="advantage-card-4">
                <h3 className="text-2xl font-bold text-foreground mb-4">Cost Effective</h3>
                <p className="text-lg text-muted-foreground">
                  Low operating costs with minimal consumables and energy-efficient operation. 
                  Excellent ROI through improved milk quality, reduced waste, and optimized processes.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by dairy farms and processing plants worldwide
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
                "The accuracy and speed of this milk analyzer have transformed our collection process. We can now test 100+ samples per hour with consistent results. Best investment we've made!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">RK</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Rajesh Kumar</div>
                  <div className="text-sm text-muted-foreground">Collection Center Manager</div>
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
                "Auto calibration and cleaning features save us hours every week. The cloud connectivity allows us to monitor quality from anywhere. Highly recommend for dairy processing plants."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">SP</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Suresh Patil</div>
                  <div className="text-sm text-muted-foreground">Quality Control Head, Dairy Plant</div>
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
                "Exceptional accuracy and reliability. The ±0.02% precision for fat content gives us confidence in our quality testing. Support team is also very responsive and helpful."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MD</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Meena Desai</div>
                  <div className="text-sm text-muted-foreground">Laboratory Manager</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our milk analyzer systems
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
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Upgrade Your Milk Testing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get precise milk analysis with our advanced analyzer systems. Contact us for a demo, detailed specifications, and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity" data-testid="button-milk-analyzer-contact">
                  Request Demo
                </Button>
              </Link>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                alert('Product specification sheet will be available for download soon. Please contact us for detailed specifications.');
              }} data-testid="button-download-brochure">
                <Button size="lg" variant="outline" className="hover:bg-muted/50 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilkAnalyzer;
