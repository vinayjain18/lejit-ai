import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Building2, 
  Users, 
  GraduationCap,
  FileText,
  Search,
  MessageSquare,
  CreditCard,
  FolderOpen,
  Scale,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const valuePillars = [
  "Manage every matter in one place",
  "Automate repetitive legal paperwork",
  "Give clients a smoother experience",
  "Learn real workflows as a future lawyer"
];

const audiences = [
  {
    icon: Briefcase,
    title: "Law Firms",
    description: "Centralize all your matters, automate standard documents, and keep clients updated without endless emails."
  },
  {
    icon: Building2,
    title: "Corporates & In-House Legal",
    description: "Standardize contracts, track outside counsel, and give leadership clear visibility into legal operations."
  },
  {
    icon: Users,
    title: "Individuals & Citizens",
    description: "Get guided help understanding your legal needs, find suitable lawyers, and track your case in one place."
  },
  {
    icon: GraduationCap,
    title: "Students & Learners",
    description: "Practice real-world legal workflows, draft documents, and learn how professional firms operate."
  }
];

const useCases = [
  { icon: FolderOpen, text: "Create and track legal matters from start to finish" },
  { icon: Search, text: "Find and select suitable law firms or lawyers" },
  { icon: FileText, text: "Generate and manage case documents" },
  { icon: Scale, text: "Handle representation agreements and client onboarding" },
  { icon: MessageSquare, text: "Communicate securely with a timeline of the case" },
  { icon: CreditCard, text: "Manage payments and invoices" }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-lejit-sky font-medium text-sm lg:text-base mb-6 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Built for law firms, corporates, and citizens
            </motion.p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight tracking-tight">
              All your legal work in one connected workspace
            </h1>
            <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Lejit connects matter creation, finding the right law firm, representation agreements, document creation, communication, and payments into one seamless system.
            </p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 h-12">
                  Talk to Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Strip */}
      <Section size="sm" variant="muted">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {valuePillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center gap-3 p-4 rounded-lg bg-card shadow-card"
            >
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-medium text-foreground">{pillar}</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Who Lejit Helps */}
      <Section>
        <SectionHeader 
          eyebrow="Who We Help"
          title="Built for every legal need"
          description="From law firms managing complex caseloads to individuals navigating their first legal matter."
        />
        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {audiences.map((audience, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <FeatureCard 
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
                variant="outlined"
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Use Cases */}
      <Section variant="muted">
        <SectionHeader 
          eyebrow="Capabilities"
          title="What you can do with Lejit"
          description="A complete toolkit for managing legal work from start to finish."
        />
        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-start gap-4 p-6 rounded-xl bg-card shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <useCase.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="font-medium text-foreground leading-relaxed pt-2">
                {useCase.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Social Proof */}
      <Section>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 lg:p-12">
              <p className="font-display text-5xl lg:text-6xl font-bold text-primary">
                10,000+
              </p>
              <p className="mt-2 text-muted-foreground text-lg">
                Legal questions answered
              </p>
            </div>
          </motion.div>
          <p className="mt-8 text-muted-foreground">
            Trusted by law firms and legal professionals across the globe
          </p>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section variant="primary" size="lg">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            Ready to simplify your legal work?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Join thousands of legal professionals who have transformed their workflows with Lejit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 h-12">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
