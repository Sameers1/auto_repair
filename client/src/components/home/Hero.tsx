import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1597766250388-c77c0496a211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6"
        >
          Excellence in <span className="text-[#FF6B6B]">Auto Repair</span>
        </motion.h1>
        
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="font-montserrat text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
        >
          Professional service with state-of-the-art equipment and certified mechanics you can trust.
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
              className="font-poppins bg-[#FF6B6B] hover:bg-opacity-90 text-white rounded-md shadow-lg"
            >
              Our Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="outline"
              className="font-poppins bg-white hover:bg-gray-100 text-primary border-white rounded-md shadow-lg"
            >
              Book Appointment
            </Button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <a href="#services" className="text-white">
            <ChevronDown className="h-8 w-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
