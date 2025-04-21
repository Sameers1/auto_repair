import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-xl backdrop-blur-sm bg-white/10 p-8 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6"
            >
              Precision <span className="text-white">Auto Repair</span> & Excellence
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={slideUp}
              className="font-montserrat text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
            >
              Professional service with state-of-the-art equipment and ASE-certified mechanics for vehicles of every make and model.
            </motion.p>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={1}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="font-poppins bg-white hover:bg-gray-200 text-black rounded-md shadow-lg transform transition duration-300 hover:scale-105"
                >
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-poppins bg-transparent hover:bg-white/20 text-white border-white rounded-md shadow-lg transform transition duration-300 hover:scale-105"
                >
                  Book Appointment
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Service badges */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {["24/7 Service", "Free Diagnostics", "Quality Parts", "Warranty Included"].map((badge, index) => (
              <motion.div 
                key={index}
                className="bg-white text-black px-4 py-2 rounded-full font-poppins text-sm flex items-center shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Down arrow at bottom middle of the page */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <a href="#services" className="text-white hover:text-gray-300 transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
