import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const products = [
  { name: "FRP Storage Tanks", image: "https://blog.polyprocessing.com/hs-fs/hubfs/Tanks%202.jpg?width=1688&height=812&name=Tanks%202.jpg" },
  { name: "Custom Canopies", image: "https://i5.walmartimages.com/asr/a1efccc2-0f2f-464b-a121-387473bd657b.cb9f6e6ad6f9d40359985b3f485ab9c2.jpeg" },
  { name: "Park Benches & Dustbins", image: "https://img.freepik.com/premium-photo/color-full-dustbin-row-park_939033-33361.jpg" },
  { name: "Planters & Pots", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "FRP Gratings", image: "https://www.shopspecnet.com.au/products/103/l/FRP-Grating-552.JPG" },
  { name: "Ducting Systems", image: "https://th.bing.com/th/id/R.7d73b4ca70f8e33213bde718948a5ade?rik=9mkQVXgGGsLTdQ&riu=http%3a%2f%2fwww.designatechltd.co.uk%2fwp-content%2fuploads%2f2015%2f07%2fDucting-21.jpg&ehk=%2bvxd3g3PVHWlc97cgs5U%2fKCxcH9NuSDP%2feU%2brkI4TnM%3d&risl=&pid=ImgRaw&r=0" }
];

const WeManufacture = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="sec-label">OUR PRODUCTS</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-2">
            WE <span className="text-fire">MANUFACTURE</span>
          </h2>
          <p className="text-muted text-sm font-body mt-2">
            High-quality FRP solutions designed to last for generations
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="rounded-xl overflow-hidden relative border border-[rgba(0,195,255,0.15)] group"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover brightness-[0.68] group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[rgba(255,255,255,0.9)] border-t border-[rgba(0,195,255,0.15)] p-4 backdrop-blur-md">
                 <div className="flex items-center">
                   <span className="w-2 h-2 rounded-full flex-shrink-0 mr-3" style={{background:'linear-gradient(135deg,#FFD000,#FF2200)'}} />
                   <h3 className="text-gray-900 font-heading font-bold text-lg tracking-wide group-hover:text-fire-orange transition-colors">
                     {product.name}
                   </h3>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WeManufacture;
