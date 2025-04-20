import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-95 shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="flex items-center cursor-pointer"
              >
                <span className="font-poppins font-bold text-2xl text-primary">
                  AUTO<span className="text-[#FF6B6B]">ELITE</span>
                </span>
              </motion.a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.a
                  whileHover={{ color: "#FF6B6B" }}
                  className={`font-poppins relative ${
                    location === link.href 
                      ? "text-[#FF6B6B]" 
                      : isScrolled ? "text-primary" : "text-white"
                  } transition-colors duration-300 nav-link`}
                >
                  {link.label}
                  <span className={`absolute bottom-[-2px] left-0 h-[2px] bg-[#FF6B6B] transition-all duration-300 ${
                    location === link.href ? "w-full" : "w-0"
                  }`}></span>
                </motion.a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={isScrolled ? "text-primary" : "text-white"}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[280px] sm:w-[350px]">
                <div className="mt-6 flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <motion.a
                        whileHover={{ x: 5 }}
                        className={`font-poppins text-lg py-2 ${
                          location === link.href ? "text-[#FF6B6B]" : "text-primary"
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
