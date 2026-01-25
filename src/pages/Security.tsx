import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  Shield,
  Lock,
  Eye,
  Server,
  Users,
  FileCheck,
  ArrowRight,
  Check
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    features: [
      "All data encrypted in transit with TLS 1.3",
      "Data at rest encrypted with AES-256",
      "End-to-end encryption for sensitive communications",
      "Secure key management practices"
    ]
  },
  {
    icon: Users,
    title: "Access Controls",
    features: [
      "Role-based access control (RBAC)",
      "Multi-factor authentication support",
      "Session management and timeout policies",
      "Audit trails for all user actions"
    ]
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    features: [
      "Hosted on enterprise-grade cloud infrastructure",
      "Regular security assessments and penetration testing",
      "Automated backup and disaster recovery",
      "Network isolation and firewall protection"
    ]
  },
  {
    icon: Eye,
    title: "Monitoring & Response",
    features: [
      "24/7 security monitoring",
      "Intrusion detection systems",
      "Incident response procedures",
      "Regular vulnerability scanning"
    ]
  }
];

const compliancePoints = [
  "Alignment with ISO 27001-style controls for information security management",
  "GDPR-compliant data processing and user rights",
  "Privacy by design principles built into our platform",
  "Regular third-party security audits",
  "Data residency options for enterprise customers",
  "Formal certification roadmap in progress"
];

export default function Security() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lejit-sky font-medium text-sm lg:text-base mb-4 tracking-wide">
              Security & Compliance
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              Your trust is our foundation
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We know legal work depends on confidentiality and trust. Lejit is built with security and privacy at its core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <Section>
        <SectionHeader 
          eyebrow="Data Protection"
          title="Enterprise-grade security"
          description="Comprehensive security measures to protect your data at every level."
        />
        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 lg:p-8 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Compliance */}
      <Section variant="muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <FileCheck className="w-8 h-8 text-accent" />
            </div>
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">
              Compliance
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Built for regulatory requirements
            </h2>
            <p className="text-muted-foreground mb-8">
              Lejit aims to align with recognized standards for information security and privacy. We're committed to expanding formal certifications over time as we grow.
            </p>
            <ul className="space-y-3">
              {compliancePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-border flex items-center justify-center"
          >
            <Shield className="w-32 h-32 text-accent/30" />
          </motion.div>
        </div>
      </Section>

      {/* Privacy */}
      <Section>
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Eye className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Privacy & Confidentiality
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Your data is yours. We treat privacy and confidentiality as fundamental design principles, not afterthoughts.
          </p>
          <div className="bg-card rounded-2xl p-8 shadow-card text-left space-y-4">
            <div className="flex items-start gap-4">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">No data selling</h4>
                <p className="text-sm text-muted-foreground">Your data is never sold or used for unrelated purposes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Attorney-client confidentiality</h4>
                <p className="text-sm text-muted-foreground">Our platform is designed with attorney-client privilege principles in mind.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Data minimization</h4>
                <p className="text-sm text-muted-foreground">We only collect and retain data necessary for providing our services.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/privacy">
              <Button variant="outline">Privacy Policy</Button>
            </Link>
            <Link to="/terms">
              <Button variant="outline">Terms of Use</Button>
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section variant="primary" size="lg">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Have security questions?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our team is happy to discuss our security practices and answer any questions.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
                Contact Security Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
