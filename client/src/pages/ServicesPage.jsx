import ServicesSection from '../components/ServicesSection';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <>
      <section className="bg-bg-dark py-12 md:py-20 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 md:mt-0"
        >
          <span className="sec-label justify-center">OUR EXPERTISE</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#F0F6FF] mt-2">
            OUR <span className="text-sky">SERVICES</span>
          </h1>
        </motion.div>
      </section>
      <div className="-mt-10">
         <ServicesSection />
      </div>
    </>
  );
};
export default ServicesPage;
