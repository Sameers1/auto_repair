import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarClock, PhoneCall, Clock, CheckCircle2, Wrench } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2018/01/17/20/11/auto-3088838_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 z-1"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Left content */}
          <motion.div 
            className="md:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6 leading-tight">
              Ready to Experience <span className="text-[#FF6B6B]">Premium</span> Auto Service?
            </h2>
            <p className="font-montserrat text-lg mb-8 text-white/90">
              Schedule your appointment today and discover why AutoElite is the preferred choice for discerning vehicle owners across the region.
            </p>
            
            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {[
                { icon: CheckCircle2, text: "Quick service appointments available" },
                { icon: CheckCircle2, text: "Complimentary multi-point inspection" },
                { icon: CheckCircle2, text: "Transparent pricing with no hidden fees" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                  className="flex items-center"
                >
                  <item.icon className="h-5 w-5 text-[#FF6B6B] mr-3 flex-shrink-0" />
                  <span className="font-montserrat text-white/90">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="font-poppins bg-[#FF6B6B] hover:bg-opacity-90 text-white py-3 px-8 rounded-md shadow-lg text-lg w-full sm:w-auto group"
                >
                  <PhoneCall className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right content - Hours card */}
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-xl shadow-2xl p-8 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-[#FF6B6B] mr-3" />
                <h3 className="font-poppins font-bold text-2xl text-primary">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
                  { day: "Sunday", hours: "Closed" }
                ].map((schedule, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.2) }}
                    className="flex justify-between pb-2 border-b border-gray-100"
                  >
                    <span className="font-poppins font-medium text-primary">{schedule.day}</span>
                    <span className="font-montserrat text-gray-600">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10"
              >
                <p className="font-montserrat text-center text-primary text-sm">
                  <span className="font-semibold">Emergency Services Available 24/7</span>
                  <br />
                  Call (555) 123-4567 for after-hours assistance
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
