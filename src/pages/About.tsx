import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  Target,
  Heart,
  Shield,
  Users,
  ArrowRight,
  Lightbulb
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Accessible",
    description: "Legal processes should be understandable to everyone, not just lawyers. We design with clarity in mind."
  },
  {
    icon: Shield,
    title: "Trustworthy",
    description: "We respect confidentiality and accuracy above all. Your data and your clients' data are safe with us."
  },
  {
    icon: Target,
    title: "Practical",
    description: "Built for real-world workloads, not demos. Every feature is designed to solve actual problems."
  },
  {
    icon: Heart,
    title: "Human-first",
    description: "Technology supports lawyers and clients, not replaces them. We enhance human judgment, not bypass it."
  }
];

export default function About() {
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
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              Making legal work simpler
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform how legal work gets done—making it more accessible, efficient, and human.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
              Our Mission
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Simplifying legal processes for everyone
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Legal work has long been fragmented—scattered across emails, spreadsheets, and disconnected tools. For law firms, this means inefficiency and administrative burden. For businesses, it means opacity and complexity. For individuals, it means confusion and intimidation.
              </p>
              <p>
                Lejit brings everything together. We've built a platform that connects the entire legal workflow—from the first question to the final resolution. Our goal is simple: make legal processes as straightforward as they should be.
              </p>
              <p>
                Whether you're a law firm managing hundreds of matters, a company tracking contracts, or an individual navigating your first legal issue, Lejit provides the structure and tools to move forward with confidence.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-border flex items-center justify-center"
          >
            <Lightbulb className="w-32 h-32 text-accent/30" />
          </motion.div>
        </div>
      </Section>

      {/* Story */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Built from experience
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 lg:p-12 shadow-card space-y-6 text-muted-foreground"
          >
            <p>
              Lejit was born from a simple observation: despite the digital transformation sweeping through every industry, legal work remained stubbornly manual and fragmented.
            </p>
            <p>
              We saw law firms drowning in administrative tasks that should have been automated. We saw businesses struggling to get visibility into their legal matters. We saw individuals intimidated by a system that seemed designed to exclude them.
            </p>
            <p>
              We knew there had to be a better way. So we built Lejit—a platform that brings structure, transparency, and efficiency to legal work without sacrificing the human judgment that makes legal advice valuable.
            </p>
            <p>
              Today, Lejit serves law firms, corporations, and individuals across the globe, helping them work smarter and achieve better outcomes.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader 
          eyebrow="Our Values"
          title="What guides us"
          description="The principles that shape how we build Lejit and serve our users."
        />
        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Team Placeholder */}
      <Section variant="muted">
        <SectionHeader 
          eyebrow="Leadership"
          title="Meet our team"
          description="The people behind Lejit are dedicated to transforming legal work."
        />
        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-card text-center"
            >
              <div className="aspect-square bg-gradient-to-br from-accent/10 via-accent/5 to-transparent" />
              <div className="p-6">
                <h3 className="font-display font-semibold">Team Member</h3>
                <p className="text-sm text-muted-foreground">Position</p>
              </div>
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
            Want to partner with us?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We're always looking for partners who share our vision for better legal work.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
