import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="privacy-policy-title">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <GlassCard className="p-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Fill out contact forms or request quotes</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Communicate with us via email or phone</li>
                    <li>Use our website and services</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    This information may include your name, email address, phone number, company name, 
                    project details, and any other information you choose to provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Process and fulfill your service requests</li>
                    <li>Send you technical updates, security alerts, and administrative messages</li>
                    <li>Provide you with news and information about our services (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, 
                    except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To service providers who assist us in operating our website and conducting business</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction. 
                    However, no method of transmission over the internet is 100% secure, and we cannot 
                    guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We retain your personal information for as long as necessary to fulfill the purposes 
                    outlined in this privacy policy, unless a longer retention period is required or 
                    permitted by law. We will delete or anonymize your personal information when it is 
                    no longer needed.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your experience on our website, 
                    analyze usage patterns, and provide personalized content. You can control cookie settings 
                    through your browser preferences, but disabling cookies may affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party websites. We are not responsible for the 
                    privacy practices or content of these external sites. We encourage you to review the 
                    privacy policies of any third-party websites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not intended for individuals under the age of 16. We do not knowingly 
                    collect personal information from children under 16. If we become aware that we have 
                    collected personal information from a child under 16, we will take steps to delete 
                    such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this privacy policy from time to time. We will notify you of any changes 
                    by posting the new privacy policy on this page and updating the "Last updated" date. 
                    We encourage you to review this privacy policy periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
                  <div className="text-muted-foreground">
                    <p>Several Sustain</p>
                    <p>Email: privacy@severalsustain.com</p>
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

export default PrivacyPolicy;
