import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Home from "./pages/Home";
import NotFound from './pages/Not-Found';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from '../src/components/TermsOfUse'
import AppointmentPolicy from '../src/components/AppointmentPolicy'
import Career from '../src/pages/Career'

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
        <Route path='terms-of-use' element={<TermsOfUse />} />
        <Route path='appointment-policy' element={<AppointmentPolicy />} />
        <Route path='/careers' element={<Career />} />
      </Routes>
    </>
  );
}

export default App;