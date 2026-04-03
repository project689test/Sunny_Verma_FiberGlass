import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/WhoWeAre';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ClientLogos from '../components/ClientLogos';
import WeManufacture from '../components/WeManufacture';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <WhoWeAre />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <WeManufacture />
      <ClientLogos />
      <ContactSection />
    </div>
  );
};

export default HomePage;
