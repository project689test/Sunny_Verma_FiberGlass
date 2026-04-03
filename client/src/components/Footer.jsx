import { Link } from 'react-router-dom';
import logoFull from '../assets/images/logo-icon.png';

const Footer = () => {
  return (
    <footer className="bg-[#040910] text-gray-900 pt-16 pb-8 border-t border-[rgba(0,195,255,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoFull} alt="Logo" className="h-12 drop-shadow-[0_0_8px_rgba(0,195,255,0.35)]" />
            </Link>
            <p className="text-muted text-sm leading-relaxed font-body">
              Premier manufacturer of high-quality Fiberglass Reinforced Plastic (FRP) solutions with over 20 years of industry excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[1.5px] text-sky mb-5">QUICK LINKS</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/about" className="text-muted hover:text-blue-light transition-colors"><span className="text-fire-orange mr-2">›</span> About Us</Link></li>
              <li><Link to="/services" className="text-muted hover:text-blue-light transition-colors"><span className="text-fire-orange mr-2">›</span> Services</Link></li>
              <li><Link to="/products" className="text-muted hover:text-blue-light transition-colors"><span className="text-fire-orange mr-2">›</span> Products</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-blue-light transition-colors"><span className="text-fire-orange mr-2">›</span> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[1.5px] text-sky mb-5">SERVICES</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/services" className="text-muted hover:text-blue-light transition-colors"><span className="text-fire-orange mr-2">›</span> Industrial Lamination</Link></li>
              <li><Link to="/services" className="text-muted hover:text-blue-light transition-colors"><span className="text-fire-orange mr-2">›</span> Water Park Slides</Link></li>
              <li><Link to="/services" className="text-muted hover:text-blue-light transition-colors"><span className="text-fire-orange mr-2">›</span> Automobile Parts</Link></li>
              <li><Link to="/services" className="text-muted hover:text-blue-light transition-colors"><span className="text-fire-orange mr-2">›</span> Theme Park Sculptures</Link></li>
            </ul>
          </div>

          {/* Contact & Quote Box */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[1.5px] text-sky mb-5">GET IN TOUCH</h4>
            <ul className="space-y-3 font-body text-sm text-muted">
              <li className="flex items-start">
                <span className="text-fire-orange mr-2 mt-0.5">📍</span>
                <span>Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <span className="text-fire-orange mr-2">📞</span>
                <a href="tel:+919716866809" className="hover:text-blue-light transition-colors">+91 97168 66809</a>
              </li>
              <li className="flex items-center">
                <span className="text-fire-orange mr-2">✉️</span>
                <a href="mailto:info@vermafiber.com" className="hover:text-blue-light transition-colors">info@vermafiber.com</a>
              </li>
            </ul>

            <div 
              className="border border-[rgba(0,195,255,0.15)] rounded-xl p-5 mt-6 group hover:border-[rgba(0,195,255,0.38)] transition-colors"
              style={{background:'linear-gradient(135deg,rgba(0,119,255,0.1),rgba(255,140,0,0.08))'}}
            >
              <h5 className="font-heading font-bold text-gray-900 mb-2">Need a custom mold?</h5>
              <p className="text-xs text-dim mb-4 font-body">Get a detailed estimate for your specific FRP requirements.</p>
              <Link to="/contact" className="btn-fire px-5 py-2 text-xs w-full text-center">Get Free Quote</Link>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[rgba(0,195,255,0.15)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dim text-xs font-body tracking-wide">
            &copy; {new Date().getFullYear()} Sunny Verma Fiber Glass. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-[rgba(0,195,255,0.1)] flex items-center justify-center text-blue-light hover:bg-blue-light hover:text-[#040910] transition-colors border border-[rgba(0,195,255,0.2)]">FB</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[rgba(0,195,255,0.1)] flex items-center justify-center text-blue-light hover:bg-blue-light hover:text-[#040910] transition-colors border border-[rgba(0,195,255,0.2)]">IG</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[rgba(0,195,255,0.1)] flex items-center justify-center text-blue-light hover:bg-blue-light hover:text-[#040910] transition-colors border border-[rgba(0,195,255,0.2)]">LI</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
