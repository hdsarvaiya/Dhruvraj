import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/logo";
import { Hammer, Ruler, Wrench, HardDrive, Construction, Truck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(1);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Stage 1: Initial tools animation
    const stage1Timeout = setTimeout(() => {
      setStage(2);
    }, isMobile ? 1500 : 2000);
    
    // Stage 2: Logo formation
    const stage2Timeout = setTimeout(() => {
      setStage(3);
    }, isMobile ? 3000 : 4000);
    
    // Stage 3: Tagline appears
    const stage3Timeout = setTimeout(() => {
      setStage(4);
    }, isMobile ? 4500 : 5500);
    
    // Final: Animation exits
    const exitTimeout = setTimeout(() => {
      setIsVisible(false);
    }, isMobile ? 6000 : 7000);
    
    return () => {
      clearTimeout(stage1Timeout);
      clearTimeout(stage2Timeout);
      clearTimeout(stage3Timeout);
      clearTimeout(exitTimeout);
    };
  }, [isMobile]);
  
  const iconVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * (isMobile ? 0.15 : 0.2),
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: 30,
      scale: 0,
      transition: {
        delay: i * (isMobile ? 0.05 : 0.1),
        duration: 0.3
      }
    })
  };
  
  // Select fewer icons for mobile
  const constructionIcons = [
    { icon: <Hammer size={isMobile ? 30 : 40} />, color: "text-yellow-400" },
    { icon: <Ruler size={isMobile ? 30 : 40} />, color: "text-blue-400" },
    { icon: <Wrench size={isMobile ? 30 : 40} />, color: "text-gray-300" },
    ...(isMobile ? [] : [
      { icon: <HardDrive size={40} />, color: "text-yellow-500" },
      { icon: <Construction size={40} />, color: "text-gray-200" },
      { icon: <Truck size={40} />, color: "text-blue-300" }
    ])
  ];
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-50 bg-primary flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full border-[1px] border-white" style={{ background: 'linear-gradient(90deg, transparent 99%, white 1%), linear-gradient(transparent 99%, white 1%)', backgroundSize: isMobile ? '10px 10px' : '20px 20px' }}></div>
          </div>
          
          {/* Animated bars on the sides (construction site barrier effect) */}
          <div className="absolute top-0 left-0 h-full w-2 sm:w-4 bg-yellow-500"></div>
          <div className="absolute top-0 right-0 h-full w-2 sm:w-4 bg-yellow-500"></div>
          <motion.div 
            className="absolute top-0 left-2 sm:left-4 h-2 sm:h-4 bg-yellow-500" 
            initial={{ width: 0 }}
            animate={{ width: 'calc(100% - 4px)' }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-2 sm:left-4 h-2 sm:h-4 bg-yellow-500" 
            initial={{ width: 0 }}
            animate={{ width: 'calc(100% - 4px)' }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
          
          {/* Stage 1: Tools fly in */}
          {stage >= 1 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-4 sm:space-x-8">
                {constructionIcons.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`${item.color} transform`}
                    custom={i}
                    variants={iconVariants}
                    initial="hidden"
                    animate={stage < 2 ? "visible" : "exit"}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Stage 2: Logo appears with construction effect */}
          {stage >= 2 && (
            <motion.div
              className="text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
              >
                <Logo className="mx-auto relative" size={isMobile ? "medium" : "large"} color="intro" />
                
                {/* Construction effect particles */}
                {Array.from({ length: isMobile ? 5 : 10 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-yellow-500 rounded-full"
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      opacity: 1 
                    }}
                    animate={{ 
                      x: Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100), 
                      y: Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100), 
                      opacity: 0,
                      scale: Math.random() * 2
                    }}
                    transition={{ 
                      duration: 1 + Math.random(), 
                      delay: Math.random() * 0.5,
                      repeat: 2,
                      repeatType: "loop"
                    }}
                    style={{
                      top: `calc(50% + ${Math.random() * 40 - 20}px)`,
                      left: `calc(50% + ${Math.random() * 40 - 20}px)`,
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Stage 3: Tagline appears with typing effect */}
              {stage >= 3 && (
                <motion.div
                  className="mt-4 text-gray-200 text-xs sm:text-sm overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="whitespace-nowrap overflow-hidden">
                    {isMobile ? "BUILDING THE FUTURE" : "BUILDING THE FUTURE — CONSTRUCTING EXCELLENCE"}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
