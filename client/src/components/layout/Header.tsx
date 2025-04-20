import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, PhoneCall, MapPin, Clock, Wrench, ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Action Bar */}
      <AnimatePresence>
        {showAlert && (
          <motion.div 
            initial={{ height: 40, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-primary text-white text-sm"
          >
            <div className="container mx-auto px-6 py-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="hidden md:flex items-center">
                    <PhoneCall className="h-3.5 w-3.5 mr-1" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="hidden md:flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    <span>123 Automotive Drive, Anytown</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>Mon-Fri: 8AM-6PM</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-primary/20 p-0 h-auto"
                  onClick={() => setShowAlert(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 shadow-md py-3 backdrop-blur-sm" 
            : "bg-transparent py-5"
        }`}
        style={{ top: showAlert ? 40 : 0 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center cursor-pointer"
                onClick={() => window.location.href = '/'}
              >
                <Wrench className={`h-8 w-8 mr-2 ${
                  isScrolled ? "text-[#FF6B6B]" : "text-white"
                }`} />
                <span className={`font-poppins font-bold text-2xl ${
                  isScrolled ? "text-primary" : "text-white"
                }`}>
                  AUTO<span className="text-[#FF6B6B]">ELITE</span>
                </span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -2 }}
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => window.location.href = link.href}
                >
                  <span className={`font-poppins font-medium ${
                    location === link.href 
                      ? "text-[#FF6B6B]" 
                      : isScrolled ? "text-primary" : "text-white"
                  } transition-colors duration-300 hover:text-[#FF6B6B]`}
                  >
                    {link.label}
                  </span>
                  <motion.span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#FF6B6B] transition-all duration-300`}
                    initial={{ width: location === link.href ? "100%" : "0%" }}
                    animate={{ width: location === link.href ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  ></motion.span>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <Button 
                size="sm" 
                className={`font-poppins bg-[#FF6B6B] hover:bg-[#ff5252] text-white shadow-md transform transition duration-300 hover:scale-105 ${
                  isScrolled ? "" : "border border-white"
                }`}
                onClick={() => window.location.href = '/contact'}
              >
                Book Service
              </Button>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              <Button 
                size="sm" 
                variant="ghost"
                className={`p-2 h-auto mr-4 ${
                  isScrolled ? "text-[#FF6B6B]" : "text-white"
                }`}
                onClick={() => window.location.href = '/contact'}
              >
                <PhoneCall className="h-5 w-5" />
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={`${isScrolled ? "text-primary" : "text-white"} hover:bg-transparent`}
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[280px] sm:w-[350px] border-l-primary/20">
                  <div className="mt-2 flex flex-col">
                    <div className="flex justify-center mb-8">
                      <div 
                        className="flex items-center cursor-pointer"
                        onClick={() => window.location.href = '/'}
                      >
                        <Wrench className="h-6 w-6 text-[#FF6B6B] mr-2" />
                        <span className="font-poppins font-bold text-xl text-primary">
                          AUTO<span className="text-[#FF6B6B]">ELITE</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      {navigationLinks.map((link) => (
                        <motion.div
                          key={link.href}
                          whileHover={{ x: 5, backgroundColor: "rgba(255, 107, 107, 0.1)" }}
                          className={`flex items-center justify-between px-4 py-3 rounded-md cursor-pointer ${
                            location === link.href ? "bg-primary/5 text-[#FF6B6B]" : "text-primary"
                          }`}
                          onClick={() => window.location.href = link.href}
                        >
                          <span className="font-poppins text-lg">{link.label}</span>
                          <ChevronRight className={`h-5 w-5 ${
                            location === link.href ? "text-[#FF6B6B]" : "text-primary/40"
                          }`} />
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8 space-y-5 border-t border-gray-100 pt-6">
                      <div className="flex items-start px-4">
                        <PhoneCall className="h-5 w-5 text-[#FF6B6B] mr-3 mt-0.5" />
                        <div>
                          <p className="font-poppins font-medium text-primary">Call Us</p>
                          <p className="font-montserrat text-sm text-gray-600">(555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start px-4">
                        <Clock className="h-5 w-5 text-[#FF6B6B] mr-3 mt-0.5" />
                        <div>
                          <p className="font-poppins font-medium text-primary">Hours</p>
                          <p className="font-montserrat text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
                          <p className="font-montserrat text-sm text-gray-600">Sat: 9AM-3PM</p>
                        </div>
                      </div>
                      
                      <div className="px-4 pt-2">
                        <Button 
                          className="w-full bg-[#FF6B6B] hover:bg-primary text-white"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Book Service
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
