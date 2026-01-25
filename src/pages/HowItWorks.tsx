import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList,
  Search,
  UserCheck,
  FileEdit,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Building2,
  Users
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Start a matter",
    description: "User answers a guided questionnaire about their legal need. The system captures all relevant details to understand the situation."
  },
  {
    number: "02",
    icon: Search,
    title: "Explore options",
    description: "Lejit structures the issue and suggests possible actions, documents, or expert support based on the information provided."
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Choose your lawyer",
    description: "Users review suggested firms or lawyers with relevant expertise and pick the best fit for their specific needs."
  },
  {
    number: "04",
    icon: FileEdit,
    title: "Draft and review documents",
    description: "Documents are generated and organized, with room for lawyer review and edits. Templates accelerate the process."
  },
  {
    number: "05",
    icon: MessageCircle,
    title: "Collaborate and track progress",
    description: "Messages, updates, and files stay organized in one timeline. Everyone stays informed without endless emails."
  },
  {
    number: "06",
    icon: CheckCircle,
    title: "Finalize and pay",
    description: "Representation agreements are signed digitally and payments are handled securely within the platform."
  }
];

const miniWorkflows = [
  {
    icon: Briefcase,
    title: "How it works for law firms",
    steps: [
      "Receive and triage new client inquiries automatically",
      "Manage all matters with centralized document and communication tracking",
      "Generate standard documents from templates with client data",
      "Bill clients and track payments in one system"
    ]
  },
  {
    icon: Building2,
    title: "How it works for corporates",
    steps: [
      "Submit legal requests through standardized intake forms",
      "Track all matters across departments in one dashboard",
      "Collaborate with outside counsel directly in the platform",
      "Report on legal spend and matter outcomes"
    ]
  },
  {
    icon: Users,
    title: "How it works for individuals",
    steps: [
      "Describe your legal situation through guided questions",
      "Get matched with suitable lawyers in your area",
      "Review and sign documents digitally",
      "Pay securely and track case progress"
    ]
  }
];

export default function HowItWorks() {
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
              How It Works
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              From question to resolution
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Lejit guides you from your first question to a resolved matter through clear, structured steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Workflow */}
      <Section>
        <SectionHeader 
          eyebrow="The Journey"
          title="Six steps to resolution"
          description="A clear path from initial inquiry to successful completion."
        />
        <div className="mt-12 lg:mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className={`lg:flex items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className="bg-card rounded-xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-shadow">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <span className="text-accent font-bold text-sm">{step.number}</span>
                          <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                        </div>
                      </div>
                      <p className={`text-muted-foreground ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center Node (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />
                  
                  {/* Empty space for alternating layout */}
                  <div className="lg:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mini Workflows */}
      <Section variant="muted">
        <SectionHeader 
          eyebrow="Tailored Paths"
          title="Workflows for every user"
          description="See how the process adapts to different types of users."
        />
        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {miniWorkflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 lg:p-8 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <workflow.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-4">
                {workflow.title}
              </h3>
              <ol className="space-y-3">
                {workflow.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-xs font-semibold text-accent">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
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
            See a live walkthrough
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Experience the full workflow with a personalized demonstration.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
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
