import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const categories = [
  { name: "All", value: "all" },
  { name: "For Law Firms", value: "law-firms" },
  { name: "For Corporates", value: "corporates" },
  { name: "For Individuals", value: "individuals" },
  { name: "Learning", value: "learning" }
];

const articles = [
  {
    title: "How to prepare for your first legal consultation",
    excerpt: "A step-by-step guide to making the most of your initial meeting with a lawyer.",
    category: "For Individuals",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    slug: "prepare-legal-consultation"
  },
  {
    title: "Five ways law firms can streamline matter management",
    excerpt: "Practical strategies for improving efficiency and client satisfaction in your practice.",
    category: "For Law Firms",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    slug: "streamline-matter-management"
  },
  {
    title: "What small businesses should track in their contracts",
    excerpt: "Essential contract elements every business owner needs to monitor and manage.",
    category: "For Corporates",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    slug: "contract-tracking-businesses"
  },
  {
    title: "Using Lejit to learn real-world legal workflows",
    excerpt: "How law students can build practical skills with Lejit's learning environment.",
    category: "Learning",
    date: "Dec 28, 2024",
    readTime: "4 min read",
    slug: "learn-legal-workflows"
  },
  {
    title: "The complete guide to digital representation agreements",
    excerpt: "Everything you need to know about creating and managing client agreements online.",
    category: "For Law Firms",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    slug: "digital-representation-agreements"
  },
  {
    title: "Reducing legal spend: A guide for in-house teams",
    excerpt: "Strategies for optimizing your legal budget without sacrificing quality.",
    category: "For Corporates",
    date: "Dec 15, 2024",
    readTime: "6 min read",
    slug: "reducing-legal-spend"
  }
];

export default function Resources() {
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
              Resources
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              Insights for legal professionals
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Practical guides, best practices, and insights to help you work smarter and deliver better outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <Section size="sm" variant="muted">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category.value === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card hover:bg-secondary text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Articles Grid */}
      <Section>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="muted">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight mb-4">
            Stay updated with our newsletter
          </h2>
          <p className="text-muted-foreground mb-6">
            Get the latest insights and best practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Bottom CTA */}
      <Section variant="primary" size="lg">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Need help getting started?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our team is here to answer your questions and help you find the right solution.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
