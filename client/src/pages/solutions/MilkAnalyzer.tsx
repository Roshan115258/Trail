import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Beaker, CheckCircle, Download, BarChart3, Settings, Shield, Star, Quote } from "lucide-react";

const MilkAnalyzer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Beaker className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="milk-analyzer-title">
              Milk Analyzer Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision milk composition analysis with real-time fat, protein, lactose, and solids measurement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Advanced Milk Analysis</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our milk analyzer systems utilize cutting-edge near-infrared spectroscopy technology to provide 
                accurate, real-time analysis of milk composition. Perfect for dairy farms, processing plants, 
                and quality control laboratories requiring precise measurements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Fat, protein, lactose, and SNF analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Real-time results in 60 seconds</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">±0.02% accuracy for fat content</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Automatic calibration and cleaning</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-get-quote">
                    Get Quote
                  </Button>
                </Link>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  alert('Product specification sheet will be available for download soon. Please contact us for detailed specifications.');
                }} data-testid="button-download-spec">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Specs
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced milk analyzer equipment" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Real-Time Analysis</h3>
              <p className="text-muted-foreground">
                Instantaneous measurement of milk composition with results displayed in under 60 seconds 
                for immediate quality control decisions.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Auto Calibration</h3>
              <p className="text-muted-foreground">
                Automatic calibration and self-cleaning functions ensure consistent accuracy 
                with minimal maintenance requirements.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Built-in quality control features with automatic outlier detection 
                and compliance with international dairy standards.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Measurement Parameters</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Fat: 0.01% - 20.00%</li>
                  <li>• Protein: 0.01% - 10.00%</li>
                  <li>• Lactose: 0.01% - 10.00%</li>
                  <li>• SNF: 0.01% - 25.00%</li>
                  <li>• Density: 1.000 - 1.200 g/cm³</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Accuracy</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Fat: ±0.02%</li>
                  <li>• Protein: ±0.02%</li>
                  <li>• Lactose: ±0.03%</li>
                  <li>• SNF: ±0.05%</li>
                  <li>• Temperature: ±0.5°C</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Operating Conditions</h4>
                <ul className="text-muted-foreground space-y-2">
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
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Dairy Farms</h4>
                <p className="text-sm text-muted-foreground">On-farm milk testing for herd management and payment systems</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Processing Plants</h4>
                <p className="text-sm text-muted-foreground">Incoming milk quality control and batch monitoring</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Laboratories</h4>
                <p className="text-sm text-muted-foreground">Reference testing and calibration services</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Collection Centers</h4>
                <p className="text-sm text-muted-foreground">Rapid screening and farmer payment calculation</p>
              </div>
            </div>
          </div>

          {/* Product Comparison */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Choose Your Model</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <GlassCard className="p-8 relative">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Basic</h3>
                  <p className="text-sm text-muted-foreground mb-4">Perfect for small farms</p>
                  <div className="text-3xl font-bold text-primary">From $8,500</div>
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

              <GlassCard className="p-8 relative border-2 border-primary">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
                  <p className="text-sm text-muted-foreground mb-4">Ideal for collection centers</p>
                  <div className="text-3xl font-bold text-primary">From $15,000</div>
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
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-quote-professional">Get Quote</Button>
                </Link>
              </GlassCard>

              <GlassCard className="p-8 relative">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
                  <p className="text-sm text-muted-foreground mb-4">For processing plants</p>
                  <div className="text-3xl font-bold text-primary">From $25,000</div>
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by dairy farms and processing plants worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-8">
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

            <GlassCard className="p-8">
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

            <GlassCard className="p-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="p-12 text-center max-w-4xl mx-auto">
            <Beaker className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Upgrade Your Milk Testing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get precise milk analysis with our advanced analyzer systems. Contact us for a demo and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-milk-analyzer-contact">
                  Request Demo
                </Button>
              </Link>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                alert('Product specification sheet will be available for download soon. Please contact us for detailed specifications.');
              }} data-testid="button-download-brochure">
                <Button size="lg" variant="outline">
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
