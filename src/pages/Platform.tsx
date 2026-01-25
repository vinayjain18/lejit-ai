import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  FolderKanban, 
  Users, 
  FileText, 
  MessageSquare, 
  CreditCard,
  GraduationCap,
  ArrowRight,
  Check,
  Zap,
  Target,
  Heart
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const modules = [
  {
    icon: FolderKanban,
    title: "Matter Management",
    description: "Central hub for all your legal matters",
    features: [
      "Create and categorize matters with custom fields",
      "Track status, deadlines, and key events",
      "See all documents and communication in one timeline",
      "Assign team members and set permissions"
    ]
  },
  {
    icon: Users,
    title: "Firm / Lawyer Matching",
    description: "Find the right legal expertise",
    features: [
      "Capture user needs via guided forms",
      "Suggest suitable law firms or lawyers",
      "Support comparison and selection",
      "Track engagement and outcomes"
    ]
  },
  {
    icon: FileText,
    title: "Document Automation",
    description: "Generate documents faster",
    features: [
      "Generate drafts from structured inputs",
      "Standardize frequently used agreements",
      "Store and reuse clause-level content",
      "Version control and audit trails"
    ]
  },
  {
    icon: MessageSquare,
    title: "Communication & Collaboration",
    description: "Keep everyone in sync",
    features: [
      "Secure messaging between all parties",
      "Centralized updates instead of scattered emails",
      "File sharing and annotations",
      "Activity notifications and reminders"
    ]
  },
  {
    icon: CreditCard,
    title: "Payments & Agreements",
    description: "Streamline billing and contracts",
    features: [
      "Manage representation agreements digitally",
      "Track and process payments in-platform",
      "Generate invoices automatically",
      "Payment history and reporting"
    ]
  },
  {
    icon: GraduationCap,
    title: "Learning / Student Mode",
    description: "Train the next generation",
    features: [
      "Guided flows for practicing real-world workflows",
      "Safe environment for learning case management",
      "Feedback and assessment tools",
      "Integration with educational programs"
    ]
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Less admin, more legal work",
    description: "Automate routine tasks and focus on what matters most—your clients and cases."
  },
  {
    icon: Target,
    title: "One place for every matter",
    description: "No more switching between tools. Everything you need is in one connected workspace."
  },
  {
    icon: Heart,
    title: "Better experience for clients and teams",
    description: "Clear communication, transparent progress, and streamlined collaboration."
  }
];

export default function Platform() {
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
              The Platform
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              A unified platform for legal work
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Lejit connects intake, matter management, expert selection, document creation, communication, and payments. Instead of juggling disconnected tools, you run legal work end-to-end in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Modules */}
      <Section>
        <SectionHeader 
          eyebrow="Core Modules"
          title="Everything you need, integrated"
          description="Six powerful modules that work together seamlessly to handle every aspect of legal work."
        />
        <div className="mt-12 lg:mt-16 space-y-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-shadow p-6 lg:p-8"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <module.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-2">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {module.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section variant="muted">
        <SectionHeader 
          eyebrow="Benefits"
          title="Why teams use Lejit"
          description="Real benefits that transform how legal work gets done."
        />
        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-card rounded-xl p-8 shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
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
            See the platform in action
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Get a personalized demo and see how Lejit can transform your legal workflows.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
