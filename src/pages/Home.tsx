import { useRef, useEffect,} from 'react';
import type { RefObject } from 'react'; 
import { useLocation } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechSpace from '../components/TechSpace';
import Layout from "../layouts/Layout";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo === "services" && servicesRef.current) {
      scrollToSection(servicesRef.current);
    } 
    else if (location.state?.scrollTo === "contact" && contactRef.current) {
      scrollToSection(contactRef.current);
    }
  }, [location.state]);
  
  // Create refs with explicit null initialization
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Update the function to accept either RefObject or the element directly
  const scrollToSection = (target: RefObject<HTMLDivElement> | HTMLDivElement) => {
    const element = target instanceof HTMLDivElement ? target : target.current;
    if (!element) return;
    
    const offset = 80;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  // Handle hash links
  useEffect(() => {
    const handleHashScroll = () => {
      const { hash } = window.location;
      if (!hash) return;

      const targetElement = hash === '#services' 
        ? servicesRef.current 
        : hash === '#contact' 
          ? contactRef.current 
          : null;

      if (targetElement) {
        setTimeout(() => scrollToSection(targetElement), 10);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <Layout 
      scrollToServices={() => servicesRef.current && scrollToSection(servicesRef.current)}
      scrollToContact={() => contactRef.current && scrollToSection(contactRef.current)}
    >
      <Hero />
      <AboutUs />
      <div ref={servicesRef} id="services">
        <Services />
      </div>
      <TechSpace />
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;