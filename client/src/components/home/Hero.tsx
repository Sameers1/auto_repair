import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { ChevronDown, Wrench, Shield, Clock, BarChart4, WrenchIcon, Car, Settings, Phone } from "lucide-react";
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

  // Floating icons with subtle animation
  const floatingIcons = [
    { Icon: Wrench, x: -15, y: 30, delay: 0, scale: 1.1 },
    { Icon: Shield, x: 20, y: -20, delay: 0.5, scale: 1.2 },
    { Icon: BarChart4, x: -20, y: -40, delay: 1, scale: 1 },
    { Icon: Clock, x: 25, y: 40, delay: 1.5, scale: 1.1 },
    { Icon: WrenchIcon, x: -30, y: -30, delay: 2, scale: 1.3 },
    { Icon: Car, x: 35, y: -40, delay: 2.5, scale: 1.2 },
    { Icon: Settings, x: -25, y: 50, delay: 3, scale: 1.1 }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax and blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center backdrop-blur-sm"
        style={{
          backgroundImage: "url('/Images/background hero page image.jpg')",
          transform: `translateY(${scrollY * 0.4}px) scale(1.05)`,
          backgroundPosition: "center",
          transition: "transform 0.1s linear",
          filter: "blur(2px)"
        }}
      ></div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      ></motion.div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>
      
      {/* Floating icons with subtle animation */}
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
            opacity: 0.5, 
            scale: item.scale,
            y: [`calc(50% + ${item.y}vh)`, `calc(50% + ${item.y - 10}vh)`, `calc(50% + ${item.y}vh)`],
          }}
          transition={{
            duration: 15,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <item.Icon className="h-12 w-12 text-white/50 drop-shadow-lg" />
        </motion.div>
      ))}
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-xl backdrop-blur-md bg-white/10 p-8 border border-white/20 shadow-2xl"
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
              <a href="tel:+1234567890">
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-poppins bg-transparent hover:bg-white/20 text-white border-white rounded-md shadow-lg transform transition duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </Button>
              </a>
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
                className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full font-poppins text-sm flex items-center shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
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
