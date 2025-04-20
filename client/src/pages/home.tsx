import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <AboutSection />
      <Stats />
      <Testimonials />
      <CTASection />
    </motion.div>
  );
};

export default Home;
