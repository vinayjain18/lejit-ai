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
  Check,
  HelpCircle
} from "lucide-react";

const pricingPlans = [
  {
    icon: Briefcase,
    title: "Law Firms",
    pricing: "Per-user or per-firm subscription",
    description: "Comprehensive tools for managing your firm's legal matters.",
    features: [
      "Unlimited matter management",
      "Document automation & templates",
      "Client communication portal",
      "Billing & payment integration",
      "Team collaboration tools",
      "Priority support"
    ],
    cta: "Contact Sales",
    featured: true
  },
  {
    icon: Building2,
    title: "Corporates",
    pricing: "Based on volume of matters and users",
    description: "Enterprise-grade legal operations for your organization.",
    features: [
      "Multi-department matter tracking",
      "Outside counsel management",
      "Contract standardization",
      "Executive reporting dashboards",
      "Compliance tracking",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    featured: false
  },
  {
    icon: Users,
    title: "Individuals",
    pricing: "Pay per matter or per document",
    description: "Transparent pricing for your personal legal needs.",
    features: [
      "Guided legal intake",
      "Lawyer matching service",
      "Document generation",
      "Secure messaging",
      "Payment processing",
      "Clear upfront pricing"
    ],
    cta: "Get Started",
    featured: false
  },
  {
    icon: GraduationCap,
    title: "Education",
    pricing: "Special plans for institutions",
    description: "Training the next generation of legal professionals.",
    features: [
      "Student practice accounts",
      "Realistic workflow simulations",
      "Progress tracking",
      "Instructor dashboards",
      "Bulk licensing",
      "Academic support"
    ],
    cta: "Contact Us",
    featured: false
  }
];

const faqs = [
  {
    question: "How does pricing work for law firms?",
    answer: "Law firm pricing is based on the number of users and can be structured as monthly or annual subscriptions. Volume discounts are available for larger firms."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free trial period so you can explore the platform before committing. Contact us to get started with your trial."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade or adjust your plan at any time as your needs evolve. Our team will help ensure a smooth transition."
  },
  {
    question: "Are there any setup fees?",
    answer: "There are no hidden setup fees. The pricing you see includes onboarding and initial training to get your team up and running."
  }
];

export default function Pricing() {
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
              Pricing
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              Flexible plans for every need
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Lejit offers flexible plans for law firms, businesses, and individuals. We adapt pricing to your size and usage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Section>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-6 lg:p-8 ${
                plan.featured 
                  ? 'bg-primary text-primary-foreground ring-2 ring-accent' 
                  : 'bg-card shadow-card border border-border'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  plan.featured ? 'bg-accent/20' : 'bg-accent/10'
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.featured ? 'text-accent' : 'text-accent'}`} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{plan.title}</h3>
                  <p className={`text-sm ${plan.featured ? 'text-primary-foreground/70' : 'text-accent'}`}>
                    {plan.pricing}
                  </p>
                </div>
              </div>
              <p className={`mb-6 ${plan.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-accent' : 'text-accent'}`} />
                    <span className={`text-sm ${plan.featured ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button 
                  className={`w-full ${
                    plan.featured 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FAQs */}
      <Section variant="muted">
        <SectionHeader 
          eyebrow="FAQs"
          title="Common questions"
          description="Get answers to frequently asked questions about our pricing."
        />
        <motion.div 
          className="mt-12 lg:mt-16 max-w-3xl mx-auto space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card"
            >
              <div className="flex items-start gap-4">
                <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
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
            Contact us for detailed pricing
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our team will work with you to find the right plan for your needs and budget.
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
