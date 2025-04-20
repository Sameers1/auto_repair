import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { ChevronDown, Wrench, BarChart4, Shield, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D-like floating icons with parallax effect
  const floatingIcons = [
    { Icon: Wrench, x: -20, y: 50, delay: 0, scale: 1.2 },
    { Icon: Shield, x: 25, y: -30, delay: 0.5, scale: 1.4 },
    { Icon: BarChart4, x: -25, y: -50, delay: 1, scale: 1 },
    { Icon: Clock, x: 35, y: 60, delay: 1.5, scale: 1.3 }
  ];

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1625047509252-6ae49b42fe3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          transform: `translateY(${scrollY * 0.4}px)`,
          backgroundPosition: "center",
          transition: "transform 0.1s linear"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      
      {/* Animated car silhouette */}
      <motion.div 
        className="absolute right-0 bottom-0 w-full h-full opacity-10 z-0 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center right"
        }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      
      {/* Floating icons with 3D effect */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ 
            x: `calc(50% + ${item.x}vw)`, 
            y: `calc(50% + ${item.y}vh)`,
            zIndex: 5
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.7, 
            scale: item.scale,
            y: [`calc(50% + ${item.y}vh)`, `calc(50% + ${item.y - 10}vh)`, `calc(50% + ${item.y}vh)`],
            rotateY: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <item.Icon className="h-16 w-16 text-white drop-shadow-lg" />
        </motion.div>
      ))}

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
              Precision <span className="text-[#FF6B6B]">Auto Repair</span> & Excellence
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
                  className="font-poppins bg-[#FF6B6B] hover:bg-opacity-90 text-white rounded-md shadow-lg transform transition duration-300 hover:scale-105"
                >
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-poppins bg-white hover:bg-gray-100 text-primary border-white rounded-md shadow-lg transform transition duration-300 hover:scale-105"
                >
                  Book Appointment
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Rotating service badges */}
          <motion.div 
            className="mt-12 flex justify-center space-x-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {["24/7 Service", "Free Diagnostics", "Quality Parts", "Warranty Included"].map((badge, index) => (
              <motion.div 
                key={index}
                className="bg-[#FF6B6B] text-white px-4 py-2 rounded-full font-poppins text-sm flex items-center shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.1, backgroundColor: "#ff5252" }}
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>

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
          <a href="#services" className="text-white hover:text-[#FF6B6B] transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
