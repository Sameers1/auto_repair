import { useState } from "react";
import { motion } from "framer-motion";
import { pageTransition, fadeIn, slideUp } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { services } from "@/data/services";
import CTASection from "@/components/home/CTASection";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All Services" },
    { id: "repair", label: "Repairs" },
    { id: "maintenance", label: "Maintenance" },
    { id: "diagnostics", label: "Diagnostics" }
  ];
  
  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <section 
        className="relative pt-32 pb-16 md:pt-40 md:pb-24"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2020/04/19/11/50/repair-5063098_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeIn}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="font-montserrat text-lg md:text-xl mb-8">
              Comprehensive auto repair solutions tailored to your vehicle's specific needs. From routine maintenance to complex repairs, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Decorative separator line */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-[#1E3D59] text-white px-4 py-1 rounded-full text-sm font-medium">
            Our Services
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={slideUp}
            className="mb-12"
          >
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={(value) => setActiveCategory(value)}
            >
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4 mb-8">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="font-poppins">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1 
                      }}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        transition: { duration: 0.3 }
                      }}
                      id={service.id}
                    >
                      <Card className="h-full">
                        <div className="overflow-hidden h-48">
                          <img 
                            src={service.imageUrl} 
                            alt={service.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-poppins font-semibold text-xl text-primary mb-3">{service.title}</h3>
                          <p className="font-montserrat text-gray-600 mb-4">{service.description}</p>
                          <div className="mb-4">
                            <h4 className="font-poppins text-lg text-primary mb-2">What's Included:</h4>
                            <ul className="list-disc list-inside space-y-1 font-montserrat text-gray-600">
                              {service.includes.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-auto">
                            <Link href="/contact">
                              <Button className="w-full bg-white hover:bg-gray-50 text-[#1E3D59] border border-[#1E3D59] font-medium">
                                Schedule Service
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-primary mb-4">Our Service Process</h2>
            <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
              We follow a comprehensive approach to ensure your vehicle receives the best care possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="font-poppins font-bold text-xl">1</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-2">Diagnosis</h3>
              <p className="font-montserrat text-gray-600">
                Our technicians thoroughly inspect your vehicle using advanced diagnostic equipment to identify the issues accurately.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="font-poppins font-bold text-xl">2</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-2">Repair Plan</h3>
              <p className="font-montserrat text-gray-600">
                We develop a detailed repair plan, explaining the issues, required repairs, and providing transparent cost estimates.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="font-poppins font-bold text-xl">3</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-2">Expert Repair</h3>
              <p className="font-montserrat text-gray-600">
                Our certified technicians perform the repairs using quality parts and advanced tools, followed by rigorous quality checks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </motion.div>
  );
};

export default Services;
