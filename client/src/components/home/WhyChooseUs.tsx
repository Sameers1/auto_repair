import { motion } from "framer-motion";
import { features } from "@/data/features";

const WhyChooseUs = () => {
  return (
    <section 
      className="py-16 md:py-24 text-white relative"
    >
      <div 
        className="absolute inset-0 bg-primary bg-opacity-85 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1625047509252-6ae49b42fe3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl md:text-4xl mb-4"
          >
            Why Choose AutoElite
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-montserrat text-lg max-w-2xl mx-auto"
          >
            Our commitment to quality, expertise, and customer satisfaction sets us apart.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="font-montserrat">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
