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
import { Star } from "lucide-react";

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
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4"
          >
            Customer Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our customers have to say about our services.
          </motion.p>
        </div>
        
        <Carousel 
          ref={carouselRef}
          className="relative"
          opts={{
            align: "start",
            loop: true,
          }}
          onSelect={(index) => setActiveIndex(index)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem 
                key={testimonial.id} 
                className="sm:basis-full md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="bg-background p-8 rounded-lg shadow-md">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="text-[#FF6B6B] flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-current"
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="font-montserrat text-gray-700 mb-6">{testimonial.text}</p>
                    <div className="flex items-center">
                      <div className="bg-gray-300 rounded-full w-12 h-12 flex-shrink-0 overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-poppins font-medium text-primary">{testimonial.name}</h4>
                        <p className="font-montserrat text-sm text-gray-600">{testimonial.carInfo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute top-1/2 -left-4 md:left-2 z-10" />
          <CarouselNext className="absolute top-1/2 -right-4 md:right-2 z-10" />
        </Carousel>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <span 
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
                index === activeIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
