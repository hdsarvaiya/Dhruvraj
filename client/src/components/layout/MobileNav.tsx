import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed top-0 right-0 h-full w-4/5 bg-primary z-50 shadow-2xl p-6"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex justify-end mb-8">
            <button 
              onClick={onClose}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <a href="#home" onClick={onClose} className="text-white text-xl font-medium hover:text-secondary transition-colors">Home</a>
            <a href="#services" onClick={onClose} className="text-white text-xl font-medium hover:text-secondary transition-colors">Services</a>
            <a href="#projects" onClick={onClose} className="text-white text-xl font-medium hover:text-secondary transition-colors">Projects</a>
            <a href="#about" onClick={onClose} className="text-white text-xl font-medium hover:text-secondary transition-colors">About</a>
            <a href="#testimonials" onClick={onClose} className="text-white text-xl font-medium hover:text-secondary transition-colors">Testimonials</a>
            <a href="#contact" onClick={onClose} className="text-white text-xl font-medium hover:text-secondary transition-colors">Contact</a>
          </nav>
          
          <div className="mt-12 pt-6 border-t border-blue-400">
            <div className="text-white mb-4">Contact Us</div>
            <div className="text-blue-200 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 9876543210
            </div>
            <div className="text-blue-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@dhruvrajinfra.com
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
