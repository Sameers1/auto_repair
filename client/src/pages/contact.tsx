import { motion } from "framer-motion";
import { pageTransition, fadeIn } from "@/lib/animations";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
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
          backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/23/13/42/auto-1852235_1280.jpg')",
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
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">Contact Us</h1>
            <p className="font-montserrat text-lg md:text-xl mb-8">
              Have questions or ready to schedule service? Reach out to our team for prompt assistance and expert advice.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
