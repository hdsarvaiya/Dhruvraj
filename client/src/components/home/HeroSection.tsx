import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  MovingTruck, 
  MovingConstruction, 
  FloatingHardDrive, 
  AnimatedBuilding, 
  ConstructionWorker 
} from "@/components/animations/HomePageAnimations";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const isMobile = useIsMobile();
  
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
      
      {/* Animated construction elements - hidden on mobile */}
      {!isMobile && (
        <div className="relative z-10 w-full h-full pointer-events-none">
          <MovingTruck />
          <MovingConstruction />
          <FloatingHardDrive />
          <AnimatedBuilding />
          <ConstructionWorker />
        </div>
      )}
      
      <div className="container z-10 px-4 sm:px-6 md:px-8">
        <motion.div 
          className="max-w-2xl text-white mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 7.2 }} // Delayed to appear after intro animation
        >
          <div className="inline-block px-4 py-1 bg-secondary text-primary font-bold mb-4 rounded-sm text-xs sm:text-sm">
            TRUSTED CONSTRUCTION PARTNER
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight mb-4 sm:mb-6">
            Building <span className="text-secondary">Excellence</span> Through Innovation
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8">
            From Commercial Construction to Government Projects, Solar Farms to Luxury Accommodations, 
            Dhruvraj Infra delivers excellence across diverse construction verticals.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button asChild variant="secondary" className="font-bold text-sm sm:text-base">
              <a href="#contact">Get Free Quote</a>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-primary transition text-sm sm:text-base">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Animated construction particles - reduced on mobile */}
      {Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-yellow-400 z-10"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, Math.random() * (isMobile ? -50 : -100) - (isMobile ? 25 : 50)],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent h-24 sm:h-32 opacity-70"></div>
    </section>
  );
}
