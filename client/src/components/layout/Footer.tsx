import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram,
  Youtube,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="font-poppins font-bold text-xl">
                AUTO<span className="text-[#FF6B6B]">ELITE</span>
              </span>
            </div>
            <p className="font-montserrat text-gray-300 mb-6">
              Premium auto repair services delivered by certified professionals using state-of-the-art equipment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">Home</a></Link></li>
              <li><Link href="/services"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">Services</a></Link></li>
              <li><Link href="/about"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">About Us</a></Link></li>
              <li><Link href="/contact"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">Engine Diagnostics & Repair</a></Link></li>
              <li><Link href="/services"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">Brake System Service</a></Link></li>
              <li><Link href="/services"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">Transmission Service</a></Link></li>
              <li><Link href="/services"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">Electrical Systems</a></Link></li>
              <li><Link href="/services"><a className="font-montserrat text-gray-300 hover:text-white transition-colors duration-300">Air Conditioning Service</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Newsletter</h3>
            <p className="font-montserrat text-gray-300 mb-4">Subscribe to our newsletter for tips, news and special offers.</p>
            <form className="mb-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full rounded-r-none text-text"
                />
                <Button 
                  type="submit" 
                  className="bg-[#FF6B6B] hover:bg-opacity-90 rounded-l-none"
                >
                  <Send size={16} />
                </Button>
              </div>
            </form>
            <p className="font-montserrat text-sm text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-montserrat text-sm text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} AutoElite. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="font-montserrat text-sm text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="font-montserrat text-sm text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="font-montserrat text-sm text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
