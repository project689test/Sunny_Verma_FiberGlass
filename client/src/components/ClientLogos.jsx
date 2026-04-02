import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import logoIcon from '../assets/images/logo-icon.png';

const clients = [
  { name: "Neokraft Global", sub: "CLIENT", Image: "/LOGO.png" },
  { name: "Worlds of Wonder", sub: "AMUSEMENT PARK", Image: "/logo-icon.png" },
  { name: "The Great India Place", sub: "MALL" },
  { name: "Hindustan Amusement Machines", sub: "MACHINES" },
  { name: "Swastik Art & Creation", sub: "ART STUDIO" },
  { name: "Pollucon Technologies", sub: "TECHNOLOGY" },
  { name: "Appu Ghar", sub: "AMUSEMENT PARK" }
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-bg-section border-y border-[rgba(0,195,255,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-10 flex flex-col items-center"
          >
          <span className="sec-label">TRUSTED BY INDUSTRY LEADERS</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#F0F6FF] mt-2">
            OUR <span className="text-fire">CLIENTS</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
          >
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="glass-card px-6 py-3 text-center cursor-default hover:border-blue-light hover:text-blue-light flex flex-col items-center justify-center transition-all duration-300 group"
            >
              <h4 className="font-heading font-bold text-sm tracking-wide text-muted group-hover:text-blue-light transition-colors whitespace-nowrap">
                {client.name}
              </h4>
              <p className="text-[10px] text-dim tracking-widest font-semibold mt-1 uppercase group-hover:text-[rgba(0,195,255,0.5)] transition-colors">
                {client.sub}
              </p>
              {client.Image ? (
                <img
                  src={client.Image}
                  alt={`${client.name} logo`}
                  className="h-10 w-auto mt-2 object-contain"
                />
              ) : (
                <p className="text-[10px] text-dim tracking-widest font-semibold mt-1 uppercase group-hover:text-[rgba(0,195,255,0.5)] transition-colors">
                  No logo available
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
