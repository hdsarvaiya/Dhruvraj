import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80" 
          alt="Construction site with cranes and modern buildings" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground opacity-50"></div>
      </div>
      
      <div className="container z-10 mt-20">
        <motion.div 
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <div className="inline-block px-4 py-1 bg-secondary text-primary font-bold mb-4 rounded-sm">
            TRUSTED CONSTRUCTION PARTNER
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            Building <span className="text-secondary">Excellence</span> Through Innovation
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            From Commercial Construction to Government Projects, Solar Farms to Luxury Accommodations, 
            Dhruvraj Infra delivers excellence across diverse construction verticals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="secondary" className="font-bold">
              <a href="#contact">Get Free Quote</a>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-primary transition">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent h-32 opacity-70"></div>
    </section>
  );
}
