import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { staggerContainer, cardHover } from "@/lib/animations";

const ServiceHighlights = () => {
  // Select featured services to highlight
  const featuredServices = services.slice(0, 6);

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Heading with animated underline */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-black mx-auto mb-4"
          ></motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl md:text-5xl text-primary mb-4"
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
            Comprehensive auto repair solutions delivered by certified professionals using advanced diagnostic equipment
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-black mx-auto mt-4"
          ></motion.div>
        </div>
        
        {/* Service Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1
                  }
                }
              }}
              whileHover="hover"
              className="group relative"
            >
              <Card className="h-full overflow-hidden border-none shadow-lg transform transition-all duration-500 group-hover:shadow-2xl">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-poppins">
                    {service.category}
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <motion.h3 
                    variants={{
                      hover: { color: "#000000" }
                    }}
                    className="font-poppins font-semibold text-xl text-primary mb-3 transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>
                  <p className="font-montserrat text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {service.includes.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start">
                          <BadgeCheck className="mr-2 h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                          <span className="font-montserrat text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={`/services#${service.id}`} className="mt-2 block">
                    <motion.div
                      variants={{
                        hover: { x: 5 }
                      }}
                      className="font-poppins inline-flex items-center text-black hover:text-gray-700 transition-colors duration-300"
                    >
                      Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button with animated background */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <Button 
              size="lg"
              className="font-poppins bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Button>
          </Link>
          <p className="mt-4 font-montserrat text-gray-500 text-sm">
            Discover our full range of specialized automotive services
          </p>
        </motion.div>
        
        {/* Service guarantee banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 py-6 px-8 bg-gradient-to-r from-black to-gray-800 rounded-lg shadow-lg text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-poppins font-semibold text-xl mb-2">100% Satisfaction Guaranteed</h3>
              <p className="font-montserrat text-white/80">All repairs backed by our industry-leading warranty</p>
            </div>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Schedule Service
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
