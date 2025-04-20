import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { staggerContainer, cardHover } from "@/lib/animations";

const ServiceHighlights = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4"
          >
            Our Premium Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive auto repair solutions delivered by certified professionals with state-of-the-art equipment.
          </motion.p>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }
              }}
              whileHover={cardHover}
              className="bg-background rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-2">{service.title}</h3>
                <p className="font-montserrat text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services#${service.id}`}>
                  <a className="font-poppins inline-flex items-center text-[#FF6B6B] hover:text-primary transition-colors duration-300">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/contact">
            <Button className="font-poppins bg-primary hover:bg-opacity-90 text-white py-3 px-8 rounded-md shadow-md">
              Schedule Service
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
