import { motion } from "framer-motion";
import { pageTransition, fadeIn, slideUp } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Stats from "@/components/home/Stats";
import CTASection from "@/components/home/CTASection";
import { 
  Award, 
  Clock, 
  Users, 
  BarChart,
  Drill,
  GraduationCap,
  Building
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Master Technician",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Michael has over 15 years of experience specializing in engine diagnostics and repair.",
      certifications: ["ASE Master Technician", "BMW Certified Specialist"]
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Service Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Sarah ensures all service operations run smoothly and customers receive exceptional care.",
      certifications: ["Automotive Service Excellence (ASE)", "Customer Service Excellence"]
    },
    {
      id: 3,
      name: "David Martinez",
      role: "Electrical Systems Specialist",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      description: "David is our expert in diagnosing and repairing complex electrical and computer systems.",
      certifications: ["Electrical Systems Certification", "Hybrid Vehicle Specialist"]
    }
  ];

  const values = [
    {
      id: 1,
      title: "Excellence",
      description: "We strive for excellence in every repair, using only the highest quality parts and latest techniques.",
      icon: Award
    },
    {
      id: 2,
      title: "Integrity",
      description: "We maintain complete transparency in our pricing and recommendations, establishing trust with our customers.",
      icon: Users
    },
    {
      id: 3,
      title: "Efficiency",
      description: "We value your time and work efficiently to get you back on the road as quickly as possible.",
      icon: Clock
    },
    {
      id: 4,
      title: "Innovation",
      description: "We continuously invest in the latest technology and training to provide cutting-edge service.",
      icon: BarChart
    }
  ];

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
          backgroundImage: "url('https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg')",
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
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">About AutoElite</h1>
            <p className="font-montserrat text-lg md:text-xl mb-8">
              Get to know our team of expert technicians and our commitment to excellence in auto repair services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              variants={slideUp}
              className="lg:w-1/2"
            >
              <img 
                src="https://cdn.pixabay.com/photo/2015/07/11/14/53/garage-840835_1280.jpg" 
                alt="AutoElite Shop" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              custom={1}
              className="lg:w-1/2"
            >
              <h2 className="font-poppins font-bold text-3xl text-primary mb-6">Our Story</h2>
              <p className="font-montserrat text-gray-700 mb-6">
                Founded in 2008, AutoElite began with a simple mission: to provide honest, high-quality auto repair services that customers can trust. What started as a small garage with just three technicians has grown into a full-service auto repair facility with state-of-the-art equipment and a team of certified professionals.
              </p>
              <p className="font-montserrat text-gray-700 mb-6">
                Our founder, Robert Davis, built this business on the belief that exceptional service, transparent pricing, and technical expertise should be the standard in the automotive repair industry. Today, we continue to uphold these values while embracing the latest advancements in automotive technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                <div className="flex items-center gap-2">
                  <Drill className="text-[#4CAF50] h-5 w-5" />
                  <span className="font-poppins font-medium">Modern Equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-[#4CAF50] h-5 w-5" />
                  <span className="font-poppins font-medium">Certified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="text-[#4CAF50] h-5 w-5" />
                  <span className="font-poppins font-medium">15+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-poppins font-bold text-3xl text-primary mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-montserrat text-gray-600 max-w-2xl mx-auto"
            >
              These principles guide everything we do and define our approach to serving our customers.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-primary bg-opacity-10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary mb-2">{value.title}</h3>
                <p className="font-montserrat text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-poppins font-bold text-3xl text-primary mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-montserrat text-gray-600 max-w-2xl mx-auto"
            >
              Our highly skilled and certified technicians are the heart of AutoElite.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-primary mb-1">{member.name}</h3>
                  <p className="font-montserrat text-[#FF6B6B] mb-4">{member.role}</p>
                  <p className="font-montserrat text-gray-600 mb-4">{member.description}</p>
                  <div>
                    <h4 className="font-poppins font-medium text-primary mb-2">Certifications:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {member.certifications.map((cert, i) => (
                        <li key={i} className="font-montserrat text-gray-600">{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </motion.div>
  );
};

export default About;
