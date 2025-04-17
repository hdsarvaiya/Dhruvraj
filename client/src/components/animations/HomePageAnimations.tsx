import { motion } from "framer-motion";
import { Truck, HardDrive, Building, Construction } from "lucide-react";

export function MovingTruck() {
  return (
    <motion.div
      className="absolute bottom-20 right-full"
      animate={{
        x: ["0vw", "120vw"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        },
      }}
    >
      <Truck size={60} className="text-primary" />
    </motion.div>
  );
}

export function MovingConstruction() {
  return (
    <motion.div
      className="absolute bottom-10 left-full"
      animate={{
        x: ["0vw", "-120vw"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
            delay: 2,
          },
        },
      }}
    >
      <Construction size={50} className="text-accent" />
    </motion.div>
  );
}

export function FloatingHardDrive() {
  return (
    <motion.div
      className="absolute top-1/4 right-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -15, 0],
        transition: {
          opacity: { duration: 0.5, delay: 4 },
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          },
        },
      }}
    >
      <HardDrive size={40} className="text-secondary" />
    </motion.div>
  );
}

export function AnimatedBuilding() {
  return (
    <motion.div
      className="absolute top-40 right-20"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        rotate: [0, 5, 0, -5, 0],
        transition: {
          opacity: { duration: 0.5, delay: 3.5 },
          rotate: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 8,
            ease: "easeInOut",
          },
        },
      }}
    >
      <Building size={80} className="text-primary" />
    </motion.div>
  );
}

export function ConstructionWorker() {
  return (
    <motion.div
      className="absolute bottom-10 left-10 hidden md:block" // Hide on mobile, only show on medium and larger screens
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -5, 0],
        transition: {
          opacity: { duration: 0.5, delay: 4.5 },
          scale: { duration: 0.5, delay: 4.5 },
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut",
            delay: 4.5,
          },
        },
      }}
    >
      <div className="relative">
        <div className="w-10 h-20 bg-blue-500 rounded-t-full relative">
          <div className="absolute top-3 left-2 w-6 h-2 bg-white rounded-full"></div>
          <div className="absolute top-3 right-2 w-2 h-2 bg-white rounded-full"></div>
          <motion.div
            className="absolute top-7 left-4 w-2 h-1 bg-black rounded-full"
            animate={{
              scaleY: [1, 0.1, 1],
              transition: {
                repeat: Infinity,
                repeatDelay: 3,
                duration: 0.3,
              },
            }}
          ></motion.div>
        </div>
        <div className="w-5 h-8 bg-yellow-500 absolute -top-8 left-2.5 rounded-t-lg">
          {/* Hard hat */}
        </div>
        <div className="w-16 h-3 bg-yellow-500 absolute -top-5 left-[calc(50%-8px)] rounded-full">
          {/* Hard hat brim */}
        </div>
        <div className="w-6 h-10 bg-blue-500 absolute top-[calc(100%-10px)] left-[calc(50%-3px)] transform -rotate-12">
          {/* Left leg */}
        </div>
        <div className="w-6 h-10 bg-blue-500 absolute top-[calc(100%-10px)] left-[calc(50%-3px)] transform rotate-12">
          {/* Right leg */}
        </div>
        <div className="w-12 h-4 bg-blue-500 absolute top-5 left-[calc(100%-4px)] transform rotate-12">
          {/* Right arm */}
        </div>
        <motion.div
          className="w-12 h-4 bg-blue-500 absolute top-5 left-[-8px] transform -rotate-12 origin-right"
          animate={{
            rotate: [-12, 30, -12],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          {/* Animated left arm */}
        </motion.div>
      </div>
    </motion.div>
  );
}