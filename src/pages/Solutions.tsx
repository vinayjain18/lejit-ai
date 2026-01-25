import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Building2, 
  Users, 
  GraduationCap,
  ArrowRight,
  Check
} from "lucide-react";

const solutions = [
  {
    id: "law-firms",
    icon: Briefcase,
    title: "Law Firms",
    headline: "A single workspace for your firm's matters",
    description: "Streamline operations, reduce administrative burden, and deliver better client experiences.",
    features: [
      "Centralize intake, matters, and documents in one system",
      "Automate standard documents and repetitive tasks",
      "Provide clients with clear progress and less paperwork",
      "Improve team collaboration and oversight",
      "Track time, billing, and payments seamlessly"
    ],
    cta: "Law firm demo"
  },
  {
    id: "corporates",
    icon: Building2,
    title: "Corporates & Businesses",
    headline: "Simplify corporate legal workflows",
    description: "Bring structure and visibility to your legal operations across the organization.",
    features: [
      "Keep all legal matters in one unified view",
      "Standardize contracts, approvals, and recurring documentation",
      "Track outside counsel and internal stakeholders",
      "Provide leadership with clear, simple summaries",
      "Reduce legal spend with better process control"
    ],
    cta: "Corporate demo"
  },
  {
    id: "individuals",
    icon: Users,
    title: "Individuals & Citizens",
    headline: "Legal help that feels simple",
    description: "Navigate legal matters with confidence, even without prior legal experience.",
    features: [
      "Guided forms to understand your legal issue",
      "Match with suitable firms or lawyers",
      "Generate and review key documents within the platform",
      "Clear, trackable communication and payments",
      "Transparent pricing with no surprises"
    ],
    cta: "Individual help"
  },
  {
    id: "students",
    icon: GraduationCap,
    title: "Students & Learning",
    headline: "A practice ground for future lawyers",
    description: "Build practical skills with real-world legal workflows in a safe environment.",
    features: [
      "Walk through realistic legal workflows",
      "Practice drafting, reviewing, and organizing matters",
      "Learn how real firms manage cases and documents",
      "Use Lejit as a safe learning environment",
      "Get feedback and track your progress"
    ],
    cta: "Education demo"
  }
];

export default function Solutions() {
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
              Solutions
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              Solutions for every legal need
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Lejit adapts to different legal needs—from law firms and corporate legal teams to individuals and students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <Section size="sm" variant="muted">
        <div className="flex flex-wrap justify-center gap-3">
          {solutions.map((solution) => (
            <a
              key={solution.id}
              href={`#${solution.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card hover:shadow-card-hover transition-all text-sm font-medium"
            >
              <solution.icon className="w-4 h-4 text-accent" />
              {solution.title}
            </a>
          ))}
        </div>
      </Section>

      {/* Solution Sections */}
      {solutions.map((solution, index) => (
        <Section 
          key={solution.id} 
          variant={index % 2 === 0 ? "default" : "muted"}
          className="scroll-mt-24"
        >
          <div id={solution.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">
                  {solution.title}
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                  {solution.headline}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {solution.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                    {solution.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-border flex items-center justify-center">
                  <solution.icon className="w-24 h-24 text-accent/30" />
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Bottom CTA */}
      <Section variant="primary" size="lg">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Choose the path that fits you
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Get started with a personalized demo tailored to your specific needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
