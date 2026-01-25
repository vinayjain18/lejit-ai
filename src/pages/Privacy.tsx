import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";

export default function Privacy() {
  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              At Lejit, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly, such as account details, matter information, and communications. We also collect technical information like device data and usage patterns to improve our services.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use your information to provide and improve our services, communicate with you, ensure security, and comply with legal obligations. We never sell your personal data to third parties.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">4. Data Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We share data only with service providers who help us operate the platform, when required by law, or with your explicit consent. All third-party providers are bound by confidentiality agreements.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement industry-standard security measures including encryption, access controls, and regular security assessments to protect your data.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have rights to access, correct, delete, or export your data. You can also opt out of certain data processing activities. Contact us to exercise these rights.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your data for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your account and associated data at any time.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">8. International Transfers</h2>
            <p className="text-muted-foreground mb-4">
              Your data may be processed in countries outside your residence. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="font-display text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For privacy-related questions or to exercise your rights, contact our privacy team at privacy@lejit.ai.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
