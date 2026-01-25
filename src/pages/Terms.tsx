import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";

export default function Terms() {
  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold tracking-tight mb-8">Terms of Use</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using Lejit's platform and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-4">
              Lejit provides a legal technology platform that helps law firms, businesses, and individuals manage legal matters, documents, communications, and payments. Our platform is designed to streamline legal workflows and improve collaboration.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              To access certain features of the platform, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground mb-4">
              You agree to use the platform only for lawful purposes and in accordance with these Terms. You may not use the platform in any way that could damage, disable, or impair the service.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              The platform and its original content, features, and functionality are owned by Lejit and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              Lejit shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform. The platform does not provide legal advice; users should consult qualified legal professionals for legal matters.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these terms at any time. We will notify users of significant changes through the platform or via email.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about these Terms, please contact us at legal@lejit.ai.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
