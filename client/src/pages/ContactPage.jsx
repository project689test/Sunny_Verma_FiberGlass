import { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    
    try {
      await api.post('/contact', formData);
      setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or call us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-bg-dark py-12 md:py-20 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 md:mt-0"
        >
          <span className="sec-label justify-center">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#F0F6FF] mt-2">
            CONTACT <span className="text-fire">US</span>
          </h1>
        </motion.div>
      </section>
      
      <section className="py-20 bg-bg-section border-t border-[rgba(0,195,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} viewport={{ once: true }}>
              <motion.h2 variants={fadeInUp} className="text-3xl font-heading font-bold text-[#F0F6FF] mb-6">
                Let's Build Together
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted mb-8 text-lg font-body leading-relaxed">
                Have a project in mind or need custom FRP solutions? Reach out to us today. We are here to help you build strong, reliable, and trusted fiberglass products.
              </motion.p>
              
              <div className="space-y-6">
                <motion.div variants={fadeInUp} className="glass-card p-6 flex items-start border-[rgba(0,195,255,0.15)] group hover:border-[rgba(0,195,255,0.4)]">
                  <div className="bg-[rgba(0,195,255,0.08)] p-3 flex items-center justify-center rounded-lg text-blue-light mr-5 border border-[rgba(0,195,255,0.2)] group-hover:bg-[rgba(0,195,255,0.15)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#F0F6FF] text-lg mb-1 tracking-wide">Office Address</h4>
                    <p className="text-dim leading-relaxed font-body">B-79, Ground Floor, Block-B,<br/>Sector-88, Noida UP: 201305</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="glass-card p-6 flex items-start border-[rgba(0,195,255,0.15)] group hover:border-[rgba(255,140,0,0.4)]">
                  <div className="bg-[rgba(255,140,0,0.08)] p-3 flex items-center justify-center rounded-lg text-fire-orange mr-5 border border-[rgba(255,140,0,0.2)] group-hover:bg-[rgba(255,140,0,0.15)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#F0F6FF] text-lg mb-1 tracking-wide">Phone Number</h4>
                    <p className="text-dim flex flex-col space-y-1 font-body">
                      <a href="tel:+919716866809" className="hover:text-fire-orange transition-colors">+91 971 686 6809</a>
                      <a href="tel:+919899587246" className="hover:text-fire-orange transition-colors">+91 989 958 7246</a>
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="glass-card p-6 flex items-start border-[rgba(0,195,255,0.15)] group hover:border-[rgba(0,195,255,0.4)]">
                  <div className="bg-[rgba(0,195,255,0.08)] p-3 flex items-center justify-center rounded-lg text-blue-light mr-5 border border-[rgba(0,195,255,0.2)] group-hover:bg-[rgba(0,195,255,0.15)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#F0F6FF] text-lg mb-1 tracking-wide">Email Address</h4>
                    <a href="mailto:info@vermafiber.com" className="text-dim font-body hover:text-blue-light transition-colors">info@vermafiber.com</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="glass-card p-8 lg:p-10 border border-[rgba(0,195,255,0.2)]"
            >
              <h3 className="text-2xl font-heading font-bold text-[#F0F6FF] mb-6 tracking-wide">Send a Message</h3>
              
              {status.message && (
                <div className={`p-4 mb-6 rounded-md font-medium text-sm border ${status.type === 'success' ? 'bg-[rgba(0,255,100,0.1)] text-green-400 border-[rgba(0,255,100,0.2)]' : 'bg-[rgba(255,0,0,0.1)] text-red-400 border-[rgba(255,0,0,0.2)]'}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-muted mb-1.5 font-heading tracking-wide">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-[rgba(6,12,26,0.6)] border border-[rgba(0,195,255,0.15)] rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent outline-none transition-shadow text-[#F0F6FF] placeholder-dim" placeholder="Your name" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-muted mb-1.5 font-heading tracking-wide">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-[rgba(6,12,26,0.6)] border border-[rgba(0,195,255,0.15)] rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent outline-none transition-shadow text-[#F0F6FF] placeholder-dim" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-muted mb-1.5 font-heading tracking-wide">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-[rgba(6,12,26,0.6)] border border-[rgba(0,195,255,0.15)] rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent outline-none transition-shadow text-[#F0F6FF] placeholder-dim" placeholder="Your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-muted mb-1.5 font-heading tracking-wide">Message</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 bg-[rgba(6,12,26,0.6)] border border-[rgba(0,195,255,0.15)] rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent outline-none transition-shadow resize-none text-[#F0F6FF] placeholder-dim" placeholder="How can we help you?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full btn-fire py-4 text-base mt-4"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
