import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-poppins font-bold text-3xl md:text-4xl mb-6"
        >
          Ready to Experience Premium Auto Service?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-montserrat text-lg mb-8 max-w-2xl mx-auto"
        >
          Schedule your appointment today and discover why AutoElite is the preferred choice for discerning vehicle owners.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button 
              size="lg" 
              className="font-poppins bg-[#FF6B6B] hover:bg-opacity-90 text-white py-3 px-8 rounded-md shadow-lg text-lg"
            >
              Book Your Appointment
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
