import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      // Programmatically scroll to the selected testimonial
      const itemWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f5f7fa, #ffffff)"
      }}
    >
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 text-primary"
      >
        <Quote className="w-32 h-32 rotate-180" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-10 right-10 text-primary"
      >
        <Quote className="w-32 h-32" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-[#FF6B6B] mx-auto mb-4"
          ></motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl md:text-5xl text-primary mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Real feedback from our valued customers who trust us with their vehicles
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <Carousel 
            ref={carouselRef}
            className="relative"
            opts={{
              align: "center",
              loop: true,
            }}
            // Use the dots for navigation instead of carousel events
          >
            <CarouselContent className="mx-auto">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="sm:basis-full md:basis-1/2 lg:basis-1/3 px-4"
                >
                  <div className="h-full flex">
                    <Card className="bg-white p-5 pt-6 rounded-3xl shadow-none border border-gray-100 h-full transition-all duration-300 hover:border-[#FF6B6B]/10 flex-1 drop-shadow-sm hover:drop-shadow-md transform hover:-translate-y-1">
                      <CardContent className="p-0 relative">
                        {/* Quote icon with background */}
                        <div className="absolute -top-3 -right-3 bg-[#FF6B6B] text-white p-2 rounded-full drop-shadow-sm flex items-center justify-center w-7 h-7">
                          <Quote className="h-3.5 w-3.5" />
                        </div>
                        
                        {/* Rating stars */}
                        <div className="flex items-center mb-4 mt-3">
                          <div className="flex bg-gray-50 rounded-full px-3 py-1.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-3.5 w-3.5 fill-current text-[#FF6B6B] mr-0.5"
                                strokeWidth={0}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Testimonial text */}
                        <p className="font-montserrat text-gray-700 mb-5 leading-relaxed italic text-sm md:text-base min-h-[100px] relative pl-2">
                          <span className="absolute -left-1 -top-2 text-[#FF6B6B] text-2xl font-serif">"</span>
                          {testimonial.text}
                          <span className="text-[#FF6B6B] text-2xl font-serif">"</span>
                        </p>
                        
                        {/* Customer info */}
                        <div className="flex items-center pt-3 mt-2 border-t border-gray-100">
                          <div className="bg-primary bg-opacity-5 rounded-full w-14 h-14 flex-shrink-0 overflow-hidden p-0.5 border border-[#FF6B6B]/10">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-poppins font-medium text-primary text-sm">{testimonial.name}</h4>
                            <p className="font-montserrat text-xs text-[#FF6B6B]">{testimonial.carInfo}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 -left-6 md:-left-3 z-10 bg-white text-primary hover:bg-[#FF6B6B] hover:text-white transition-colors duration-300" />
            <CarouselNext className="absolute top-1/2 -right-6 md:-right-3 z-10 bg-white text-primary hover:bg-[#FF6B6B] hover:text-white transition-colors duration-300" />
          </Carousel>
        </motion.div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-10">
          {testimonials.map((_, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
                index === activeIndex ? 'bg-[#FF6B6B] scale-125' : 'bg-gray-300'
              }`}
            ></motion.span>
          ))}
        </div>
        
        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-6 py-2 border border-primary/10">
            <Star className="h-5 w-5 text-[#FF6B6B] fill-current" fill="currentColor" />
            <p className="font-poppins text-primary">
              <span className="font-semibold">4.9/5</span> average rating from <span className="font-semibold">1000+</span> satisfied customers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
