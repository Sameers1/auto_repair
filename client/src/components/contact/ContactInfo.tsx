import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-background p-8 rounded-lg shadow-xl"
    >
      <h3 className="font-poppins font-semibold text-3xl text-primary mb-8 text-center">Get In Touch</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
            <Phone className="text-primary h-6 w-6" />
          </div>
          <div>
            <h4 className="font-poppins font-medium text-xl text-primary mb-2">Phone Number</h4>
            <p className="font-montserrat text-gray-700 mb-1">(555) 123-4567</p>
            <p className="font-montserrat text-gray-700">(555) 987-6543 (Emergency)</p>
            <Button 
              className="mt-4 w-full bg-primary hover:bg-opacity-90 text-white"
              onClick={() => window.location.href = 'tel:+15551234567'}
            >
              Call Now
            </Button>
          </div>
        </div>
        
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
            <Mail className="text-primary h-6 w-6" />
          </div>
          <div>
            <h4 className="font-poppins font-medium text-xl text-primary mb-2">Email Address</h4>
            <p className="font-montserrat text-gray-700 mb-1">service@autoelite.com</p>
            <p className="font-montserrat text-gray-700">info@autoelite.com</p>
            <Button 
              className="mt-4 w-full bg-primary hover:bg-opacity-90 text-white"
              onClick={() => window.location.href = 'mailto:service@autoelite.com'}
            >
              Send Email
            </Button>
          </div>
        </div>
        
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
            <MapPin className="text-primary h-6 w-6" />
          </div>
          <div>
            <h4 className="font-poppins font-medium text-xl text-primary mb-2">Our Location</h4>
            <p className="font-montserrat text-gray-700">123 Automotive Drive</p>
            <p className="font-montserrat text-gray-700">Anytown, USA 12345</p>
            <Button 
              className="mt-4 w-full bg-primary hover:bg-opacity-90 text-white"
              onClick={() => window.open('https://maps.google.com', '_blank')}
            >
              Get Directions
            </Button>
          </div>
        </div>
        
        <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
            <Clock className="text-primary h-6 w-6" />
          </div>
          <div>
            <h4 className="font-poppins font-medium text-xl text-primary mb-2">Working Hours</h4>
            <p className="font-montserrat text-gray-700 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="font-montserrat text-gray-700 mb-1">Saturday: 9:00 AM - 3:00 PM</p>
            <p className="font-montserrat text-gray-700">Sunday: Closed</p>
            <Button 
              className="mt-4 w-full bg-primary hover:bg-opacity-90 text-white"
              onClick={() => window.location.href = '/services'}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-poppins font-medium text-xl text-primary mb-4 text-center">Find Us On Map</h4>
        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Example%20St%2C%20New%20York%2C%20NY%2010006!5e0!3m2!1sen!2sus!4v1610147335554!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            aria-hidden="false" 
            tabIndex={0}
            title="Auto Elite Location"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
