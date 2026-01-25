import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";

export default function Cookies() {
  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold tracking-tight mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use the site.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies to authenticate users, remember preferences, analyze site usage, and improve our services. We use both session cookies (deleted when you close your browser) and persistent cookies (remain until expiry or deletion).
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="font-display text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
            <p className="text-muted-foreground mb-4">
              Required for the platform to function. These cannot be disabled without affecting core functionality.
            </p>

            <h3 className="font-display text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-muted-foreground mb-4">
              Help us understand how visitors use our platform so we can improve it. These are anonymized and do not identify you personally.
            </p>

            <h3 className="font-display text-xl font-semibold mt-6 mb-3">Preference Cookies</h3>
            <p className="text-muted-foreground mb-4">
              Remember your settings and preferences for a better experience on return visits.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Most browsers allow you to control cookies through settings. You can block or delete cookies, but this may affect your experience on our platform.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">5. Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Some cookies may be set by third-party services we use (such as analytics providers). These are governed by their respective privacy policies.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">6. Updates to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our use of cookies, please contact us at privacy@lejit.ai.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
