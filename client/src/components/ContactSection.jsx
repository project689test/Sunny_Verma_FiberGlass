const ContactSection = () => {
  return (
    <section 
      style={{ background:'linear-gradient(120deg,rgba(0,51,204,0.25),rgba(255,140,0,0.15))' }}
      className="border-t border-b border-[rgba(0,195,255,0.15)] py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
          Ready to Start Your <span className="text-fire">FRP Project?</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="tel:+919716866809" className="btn-fire px-8 py-3 text-lg flex items-center justify-center gap-2">
            <span>📞</span> Call Now
          </a>
          <a href="mailto:info@vermafiber.com" className="btn-glass px-8 py-3 text-lg flex items-center justify-center gap-2">
            <span>✉️</span> Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
