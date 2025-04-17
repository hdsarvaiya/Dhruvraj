import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Building, SquareAsterisk, ShieldCheck, Sun, Home, Building2, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const iconMap: Record<string, React.ReactNode> = {
  "building": <Building size={48} />,
  "road": <SquareAsterisk size={48} />,
  "shield-check": <ShieldCheck size={48} />,
  "sun": <Sun size={48} />,
  "hotel": <Home size={48} />,
  "city": <Building2 size={48} />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="section-subheading">What We Do</p>
          <h2 className="section-heading">Our Services</h2>
          <div className="section-divider"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 shadow-lg rounded-sm hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="text-primary mb-6 transform transition-transform duration-300 group-hover:translate-y-[-10px] group-hover:text-secondary">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <a href="#" className="text-primary font-bold flex items-center hover:text-secondary transition-colors">
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
