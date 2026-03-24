import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const services = [
  {
    title: "Industrial Tank Lamination",
    description: "Chemical resistant, leak-proof lamination and repairing for industrial storage tanks.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Water Park Slides",
    description: "Designing, manufacturing, and installing durable, safe & exciting FRP water slides.",
    image: "https://i.ytimg.com/vi/zuHrrak6EgY/maxresdefault.jpg"
  },
  {
    title: "Automobile FRP Parts",
    description: "High-strength, lightweight fiberglass parts tailored for various vehicles.",
    image: "https://vfgp.in/wp-content/uploads/2024/01/IMG_3075.jpg"
  },
  {
    title: "Theme Park Sculptures",
    description: "Creative, weather-resistant 3D sculptures and statues for entertainment parks.",
    image: "https://s.alicdn.com/@sc04/kf/H662527dba05a4e39927caf97c92ff77eX.jpg_720x720q50.jpg"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="sec-label">WHAT WE DO</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#F0F6FF] mt-2 mb-2">
            OUR <span className="text-fire">FRP SERVICES</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="glass-card overflow-hidden cursor-pointer group flex flex-col p-0"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,12,26,0.93)] via-transparent to-transparent"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-10 -mt-12">
                <h3 className="text-xl font-heading font-bold text-white mb-3 line-clamp-2 drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-muted mb-6 text-sm line-clamp-3 font-body flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="text-fire font-heading font-bold text-sm flex items-center group/link mt-auto">
                  View More 
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">›</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-glass px-8 py-3 text-base">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
