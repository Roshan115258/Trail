import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Truck, CheckCircle, Download, Wifi, DollarSign, BarChart3 } from "lucide-react";

const DPUAMCUSystems = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Truck className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="dpu-amcu-title">
              DPU/AMCU Collection Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automated milk collection units with integrated payment systems, quality testing, and real-time data transmission.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Complete Collection Solution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our DPU (Dairy Processing Unit) and AMCU (Automatic Milk Collection Unit) systems revolutionize 
                dairy operations with fully automated collection, quality testing, and payment processing. 
                Designed for efficiency and transparency in dairy supply chains.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Automated milk collection and weighing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Real-time quality analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Instant payment calculation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Cloud-based data management</span>
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
                  alert('Product datasheet will be available for download soon. Please contact us for detailed specifications.');
                }} data-testid="button-download-datasheet">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Datasheet
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1606880700051-d70bdf7cb265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern dairy processing facility" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Quality Testing</h3>
              <p className="text-muted-foreground">
                Integrated milk analyzer for fat, protein, and SNF testing with automatic 
                acceptance/rejection based on quality parameters.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Payment System</h3>
              <p className="text-muted-foreground">
                Automated payment calculation based on quantity and quality with 
                instant farmer receipts and bank transfer integration.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Remote Monitoring</h3>
              <p className="text-muted-foreground">
                Real-time data transmission to cloud servers with mobile app 
                access for farmers and dairy managers.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">System Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Collection Features</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Capacity: 500-5000L per hour</li>
                  <li>• Automatic can washing</li>
                  <li>• RFID farmer identification</li>
                  <li>• Digital weighing (±10g accuracy)</li>
                  <li>• Temperature monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Quality Parameters</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Fat content analysis</li>
                  <li>• SNF measurement</li>
                  <li>• Protein content</li>
                  <li>• Adulteration detection</li>
                  <li>• pH level monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Data Management</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Cloud data storage</li>
                  <li>• Real-time reporting</li>
                  <li>• SMS notifications</li>
                  <li>• Mobile app integration</li>
                  <li>• GPS tracking</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <div className="grid lg:grid-cols-2 gap-12">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefits for Farmers</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Transparent payment system</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Instant quality feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Reduced waiting time</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Digital records and receipts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Direct bank transfers</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefits for Dairies</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Automated operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Quality assurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Reduced labor costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Real-time monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Data-driven decisions</span>
                </div>
              </div>
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
