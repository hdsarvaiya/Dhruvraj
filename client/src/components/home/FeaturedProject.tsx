import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FeaturedProject() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern commercial building construction" 
                className="w-full h-auto transform hover:scale-105 transition duration-700"
              />
              <div className="absolute top-0 left-0 bg-secondary text-primary py-2 px-6 font-bold">
                FEATURED PROJECT
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-bold uppercase tracking-wider mb-2">Completed 2023</p>
            <h2 className="text-4xl font-heading font-bold mb-6">Ganga Business Tower</h2>
            <p className="text-gray-600 mb-6 text-lg">
              A 30-story commercial high-rise designed with sustainable principles and advanced engineering techniques. The project features smart building technology, energy-efficient systems, and earthquake-resistant construction.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-primary font-bold mb-1">Location</p>
                <p className="text-gray-600">Mumbai, Maharashtra</p>
              </div>
              <div>
                <p className="text-primary font-bold mb-1">Size</p>
                <p className="text-gray-600">450,000 sq ft</p>
              </div>
              <div>
                <p className="text-primary font-bold mb-1">Client</p>
                <p className="text-gray-600">Ganga Developments Ltd</p>
              </div>
              <div>
                <p className="text-primary font-bold mb-1">Duration</p>
                <p className="text-gray-600">36 months</p>
              </div>
            </div>
            <Button asChild className="font-bold">
              <a href="#projects">View All Projects</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
