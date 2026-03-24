import { motion } from 'framer-motion';

const HeroSection = () => {
  const stats = [
    { num: '20+', label: 'YEARS EXP' },
    { num: '1000+', label: 'PROJECTS' },
    { num: '100%', label: 'QUALITY' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center -mt-20 pt-20 overflow-hidden bg-bg-dark">
      <div className="absolute inset-0 bg-[url('/Hero_Section.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,12,26,0.94)] via-[rgba(6,12,26,0.8)] to-[rgba(6,12,26,0.55)]" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{backgroundImage: 'linear-gradient(#00C3FF 1px,transparent 1px), linear-gradient(90deg,#00C3FF 1px,transparent 1px)', backgroundSize:'56px 56px'}} 
      />

      <div className="orb w-[300px] h-[300px] bg-blue-mid top-[8%] right-[12%] animate-float" />
      <div className="orb w-[180px] h-[180px] bg-fire-orange bottom-[18%] right-[28%] animate-float [animation-delay:-4s]" />
      <div className="orb w-[140px] h-[140px] bg-fire-yellow top-[65%] right-[4%] animate-float [animation-delay:-7s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10 w-full text-left pt-12 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,195,255,0.1)] border border-[rgba(0,195,255,0.3)] text-blue-light font-heading font-semibold text-xs tracking-[2px] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse-dot" />
          20+ YEARS OF FIBERGLASS EXCELLENCE
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-heading font-bold text-5xl md:text-6xl leading-tight mb-6"
        >
          <span className="block text-[#F0F6FF]">Strong, Reliable &amp;</span>
          <span className="block text-fire">Trusted FRP Solutions</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
        >
          Over 20+ years of excellence in high-quality FRP manufacturing, custom molds, and industrial solutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-fire px-8 py-3 text-base text-center">Get a Quote</a>
          <a href="#about" className="btn-glass px-8 py-3 text-base text-center">View Our Work</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex gap-8 mt-12 flex-wrap items-center"
        >
          {stats.map((s,i) => (
            <div key={i} className="flex gap-8 items-center">
              <div>
                <p className="font-heading font-bold text-3xl md:text-4xl text-logo">{s.num}</p>
                <p className="text-dim text-xs tracking-wider mt-1">{s.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-12 bg-[rgba(0,195,255,0.15)] hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
