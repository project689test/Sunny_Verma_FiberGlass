import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Hindustan Amusement Machines",
    quote: "Sunny Verma Fiber Glass provided exceptional quality water slides for our new park. The durability and finish are unmatched. Highly recommended!",
    rating: 5
  },
  {
    name: "Amit Singh",
    company: "Worlds of Wonder",
    quote: "Their team's expertise in custom FRP fabrication helped us realize a complex theme park sculpture. It looks amazing and has withstood extreme weather.",
    rating: 5
  },
  {
    name: "Suresh Patel",
    company: "Neokraft Global",
    quote: "We rely on SV Fiber Glass for all our industrial tank laminations. Their leak-proof guarantee and prompt service make them the best in Noida.",
    rating: 5
  },
  {
    name: "Vikram Sharma",
    company: "The Great India Place",
    quote: "From dustbins to large decorative canopies, the diverse range of FRP products they manufacture is impressive. Delivery was always on schedule.",
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex text-fire-orange text-base mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-[rgba(255,140,0,0.2)]'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
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
          <span className="sec-label">CLIENT REVIEWS</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#F0F6FF] mt-2 mb-2">
            <span className="text-sky">TESTIMONIALS</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="glass-card p-6 relative flex flex-col"
            >
              {/* Quote Icon */}
              <div className="text-sky opacity-20 text-8xl absolute top-4 left-5 font-serif leading-none select-none pointer-events-none">
                "
              </div>

              <div className="relative z-10 flex-grow">
                <StarRating rating={test.rating} />
                <p className="text-muted font-body italic mb-8 flex-grow">
                  "{test.quote}"
                </p>
                <div className="flex items-center mt-auto border-t border-[rgba(0,195,255,0.15)] pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-mid to-blue-dark rounded-full flex items-center justify-center text-white font-heading font-bold text-xl mr-4 shadow-inner border border-[rgba(0,195,255,0.3)]">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#F0F6FF]">{test.name}</h4>
                    <p className="text-xs text-dim font-medium uppercase tracking-wider">{test.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
