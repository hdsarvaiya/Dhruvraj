import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Construction team at work site" 
                className="rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-secondary p-6 rounded-sm shadow-lg hidden md:block">
                <div className="text-primary font-accent text-5xl">15+</div>
                <div className="text-primary font-bold">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-bold uppercase tracking-wider mb-2">About Us</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Building India's Future Since 2008</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Dhruvraj Infra has been at the forefront of India's infrastructure development for over 15 years. 
              What started as a small construction company has grown into a multifaceted organization with expertise 
              across various construction verticals.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our commitment to quality, innovation, and timely delivery has established us as a trusted partner for both 
              government and private sector projects. With a team of seasoned professionals and cutting-edge technology, 
              we tackle complex challenges with confidence and precision.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="text-secondary text-2xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Highly skilled professionals with extensive industry experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary text-2xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">Rigorous quality control at every stage of project execution.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary text-2xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">Utilizing cutting-edge construction methods and equipment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary text-2xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Sustainability Focus</h3>
                  <p className="text-gray-600">Committed to environmentally responsible construction practices.</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="font-bold">
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
