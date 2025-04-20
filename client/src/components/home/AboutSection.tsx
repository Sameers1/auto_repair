import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    { id: 1, text: "ASE Certified Technicians" },
    { id: 2, text: "Factory Training" },
    { id: 3, text: "24/7 Emergency Service" },
    { id: 4, text: "Transparent Pricing" },
    { id: 5, text: "Extended Warranties" },
    { id: 6, text: "Customer Shuttle Service" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our Professional Team" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-6">About AutoElite</h2>
            <p className="font-montserrat text-gray-700 mb-6">
              With over 15 years of experience, AutoElite has been the leading auto repair service provider in the region. Our team combines extensive expertise with cutting-edge technology to deliver exceptional results.
            </p>
            <p className="font-montserrat text-gray-700 mb-6">
              We specialize in comprehensive vehicle maintenance and repair services, from routine maintenance to complex diagnostics and repairs. Our certified technicians undergo continuous training to stay ahead of automotive technology advancements.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center mb-2"
                >
                  <Check className="text-[#4CAF50] mr-2 h-5 w-5" />
                  <span className="font-poppins font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            
            <Link href="/about">
              <Button className="font-poppins bg-primary hover:bg-opacity-90 text-white py-3 px-8 rounded-md shadow-md">
                Meet Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
