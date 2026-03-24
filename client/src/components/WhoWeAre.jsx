import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const WhoWeAre = () => {
  const checklist = [
    "Premium Quality Materials",
    "On-Time Project Delivery",
    "Expert Technical Team",
    "Custom Fabrication Solutions"
  ];

  return (
    <section className="py-20 bg-bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="sec-label">WHO WE ARE</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
                <span className="text-[#F0F6FF]"><span className="text-sky">WHO</span> WE ARE</span>
              </h2>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-muted text-lg mb-8 leading-relaxed font-body">
              Based in Noida, Sunny Verma Fiber Glass has established itself as a trusted name in the industry with over 20 years of experience. We specialize in high-quality Fiberglass Reinforced Plastic (FRP) solutions.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
              {checklist.map((item, index) => (
                <motion.li key={index} variants={fadeInUp} className="flex items-center text-[#F0F6FF] font-medium font-body">
                  <div className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br from-blue-mid to-blue-light mr-4">
                    ✓
                  </div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="border-l-4 border-fire-orange pl-4 py-3 pr-4 rounded-r-lg text-muted text-sm leading-relaxed" style={{ background:'linear-gradient(135deg,rgba(0,119,255,0.1),rgba(255,140,0,0.08))' }}>
              <h3 className="font-heading font-bold text-xl text-[#F0F6FF] mb-2">Our Mission</h3>
              <p className="font-body">To continuously deliver robust, innovative, and cost-effective fiber solutions that exceed client expectations, ensuring durability and safety in every mold.</p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="rounded-xl overflow-hidden glass-card relative aspect-[4/5] lg:aspect-auto lg:h-[600px] z-10 border-0 p-1 bg-transparent">
              <img 
                src="https://thumbs.dreamstime.com/b/water-park-slides-pools-generative-ai-283977159.jpg" 
                alt="Water Park Slide Construction" 
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-700 brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,12,26,0.9)] to-transparent flex items-end p-8 pointer-events-none rounded-lg">
                 <div className="bg-[rgba(255,140,0,0.15)] backdrop-blur-md border border-[rgba(255,140,0,0.3)] text-fire-orange font-bold py-2 px-6 rounded shadow-lg text-sm tracking-wider">
                    20+ Years Experience
                 </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[rgba(0,195,255,0.15)] rounded-lg hidden md:block z-0 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
