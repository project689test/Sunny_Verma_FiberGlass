import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const features = [
  { title: "20+ Years Experience", description: "Deep industry knowledge and proven track record." },
  { title: "Premium Quality", description: "Using only top-grade raw fiberglass materials." },
  { title: "Custom Fabrication", description: "Molds & products tailored to exact specifications." },
  { title: "Timely Delivery", description: "Strict adherence to project timelines and deadlines." },
  { title: "Expert Team", description: "Skilled engineers and trained technicians." },
  { title: "Competitive Pricing", description: "Cost-effective solutions without compromising quality." }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Features Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="mb-10">
              <span className="sec-label">THE SV ADVANTAGE</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#F0F6FF] mt-2">
                WHY <span className="text-fire">CHOOSE US?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} className="glass-card p-4 hover:border-[rgba(255,140,0,0.4)] flex flex-col group">
                  <div className="flex items-center mb-3">
                    <div className="bg-[rgba(0,195,255,0.08)] rounded-md p-2 mr-3 border border-[rgba(0,195,255,0.15)] text-blue-light group-hover:text-fire-orange group-hover:border-[rgba(255,140,0,0.3)] transition-colors">
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                    <h4 className="font-heading font-bold text-[#F0F6FF] text-lg">{feature.title}</h4>
                  </div>
                  <p className="text-muted text-sm pl-11 font-body">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Badge & Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-full flex flex-col"
          >
            <div 
              style={{ background:'linear-gradient(135deg,rgba(0,119,255,0.12),rgba(255,140,0,0.08))' }}
              className="border border-[rgba(0,195,255,0.15)] rounded-xl p-8 text-center flex-grow flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00C3FF 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              
              <div className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center mb-6 border border-[rgba(255,140,0,0.3)] shadow-[0_4px_20px_rgba(255,140,0,0.2)] mx-auto overflow-hidden bg-[rgba(6,12,26,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,208,0,0.2)] to-[rgba(255,34,0,0.2)]" />
                <div className="text-center relative z-10">
                  <span className="block text-4xl font-heading font-black text-logo leading-none">20+</span>
                  <span className="block text-xs font-bold text-muted uppercase tracking-wider mt-1">Years</span>
                </div>
              </div>
              
              <h3 className="relative z-10 text-logo font-heading font-bold text-2xl mb-4 drop-shadow-sm">
                Commitment to Excellence
              </h3>
              <p className="relative z-10 text-dim mb-2 max-w-sm mx-auto font-body text-sm leading-relaxed">
                We pledge to deliver unparalleled quality and durability in every fiber-reinforced product we manufacture.
              </p>
            </div>

            <div 
              style={{ background:'linear-gradient(90deg,#0033CC,#0077FF,#FF8C00)' }}
              className="text-white text-center font-heading font-semibold rounded-xl p-4 w-full mt-4 shadow-[0_8px_20px_rgba(0,119,255,0.25)] flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="tracking-wide">Strong. Reliable. Trusted.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
