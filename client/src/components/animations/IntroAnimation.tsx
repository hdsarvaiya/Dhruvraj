import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/logo";

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-50 bg-primary flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <Logo className="mx-auto" size="large" color="intro" />
            <div className="mt-4 text-gray-200 text-sm">BUILDING THE FUTURE</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
