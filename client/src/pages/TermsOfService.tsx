import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="terms-of-service-title">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <GlassCard className="p-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using the Several Sustain website and services, you accept and agree 
                    to be bound by the terms and provision of this agreement. If you do not agree to abide 
                    by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                  <p className="text-muted-foreground mb-4">
                    Several Sustain provides electronics development services including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>PCB design and layout services</li>
                    <li>Hardware development and embedded systems design</li>
                    <li>Firmware programming and software development</li>
                    <li>Mobile and web application development</li>
                    <li>Specialized dairy technology solutions</li>
                    <li>Consulting and technical support services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Service Agreements</h2>
                  <p className="text-muted-foreground">
                    Specific project terms, timelines, deliverables, and pricing will be outlined in 
                    separate service agreements or statements of work. These documents will take 
                    precedence over these general terms for specific project requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    Unless otherwise specified in a project agreement:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Several Sustain retains rights to general methodologies, techniques, and know-how</li>
                    <li>Clients receive rights to project-specific deliverables and custom designs</li>
                    <li>Third-party intellectual property remains with respective owners</li>
                    <li>Open-source components are subject to their respective licenses</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
                  <p className="text-muted-foreground">
                    We respect the confidentiality of client information and maintain strict 
                    confidentiality standards. Both parties agree to protect confidential information 
                    shared during the course of business and not disclose such information to third 
                    parties without prior written consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    Payment terms will be specified in individual project agreements. Generally:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Invoices are payable within 30 days of receipt</li>
                    <li>Projects may require upfront deposits or milestone payments</li>
                    <li>Late payments may incur interest charges</li>
                    <li>All prices are exclusive of applicable taxes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Warranties and Disclaimers</h2>
                  <p className="text-muted-foreground mb-4">
                    We warrant that our services will be performed in a professional manner consistent 
                    with industry standards. However:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Services are provided "as is" without additional warranties</li>
                    <li>We disclaim all implied warranties of merchantability and fitness</li>
                    <li>Technology solutions may have inherent limitations</li>
                    <li>Client is responsible for testing and validation of deliverables</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Several Sustain's liability for any claims related to our services shall not exceed 
                    the total amount paid by the client for the specific services giving rise to the claim. 
                    We shall not be liable for indirect, incidental, special, or consequential damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Force Majeure</h2>
                  <p className="text-muted-foreground">
                    Neither party shall be liable for any failure or delay in performance due to 
                    circumstances beyond their reasonable control, including but not limited to acts 
                    of God, natural disasters, pandemics, government actions, or supply chain disruptions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                  <p className="text-muted-foreground">
                    Either party may terminate a service agreement with written notice as specified 
                    in the project agreement. Upon termination, client shall pay for all services 
                    performed up to the termination date, and each party shall return confidential 
                    information of the other party.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These terms shall be governed by and construed in accordance with the laws of 
                    the jurisdiction where Several Sustain is incorporated. Any disputes shall be 
                    resolved through binding arbitration or in the courts of competent jurisdiction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">12. Modifications</h2>
                  <p className="text-muted-foreground">
                    Several Sustain reserves the right to modify these terms at any time. Changes 
                    will be effective immediately upon posting on our website. Continued use of 
                    our services constitutes acceptance of modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    For questions regarding these terms of service, please contact:
                  </p>
                  <div className="text-muted-foreground">
                    <p>Several Sustain</p>
                    <p>Email: legal@severalsustain.com</p>
                    <p>Phone: +1 (555) SUSTAIN</p>
                  </div>
                </section>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
