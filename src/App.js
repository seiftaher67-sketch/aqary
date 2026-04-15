import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import PropertyDetails from './pages/PropertyDetails';
import PaymentPage from './pages/PaymentPage';
import CarRental from './pages/CarRental';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CarRentalDetails from './pages/CarRentalDetails';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Faq from './pages/Faq';
import ProfilePage from './pages/profile/ProfilePage';
import { isAuthenticated } from './utils/auth';

const getRoute = () => {
  if (typeof window === 'undefined') {
    return { page: 'home', propertyId: null };
  }

  const hash = window.location.hash || '#home';

  if (hash === '#bookings') {
    return { page: 'bookings', propertyId: null };
  }

  if (hash === '#car-rental') {
    return { page: 'car-rental', propertyId: null };
  }

  if (hash === '#about') {
    return { page: 'about', propertyId: null };
  }

  if (hash === '#contact-us') {
    return { page: 'contact', propertyId: null };
  }

  if (hash === '#terms') {
    return { page: 'terms', propertyId: null };
  }

  if (hash === '#privacy') {
    return { page: 'privacy', propertyId: null };
  }

  if (hash === '#faq') {
    return { page: 'faq', propertyId: null };
  }

  if (hash === '#profile' || hash.startsWith('#profile/')) {
    return { page: isAuthenticated() ? 'profile' : 'home', propertyId: null };
  }

  if (hash.startsWith('#car/')) {
    const carId = hash.replace('#car/', '');
    return { page: 'car-details', propertyId: carId };
  }

  if (hash.startsWith('#property/')) {
    const propertyId = hash.replace('#property/', '');
    return { page: 'property', propertyId };
  }

  if (hash.startsWith('#payment/')) {
    const propertyId = hash.replace('#payment/', '');
    return { page: 'payment', propertyId };
  }

  return { page: 'home', propertyId: null };
};

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route.page === 'bookings') {
    return <Bookings />;
  }

  if (route.page === 'property') {
    return <PropertyDetails propertyId={route.propertyId} />;
  }

  if (route.page === 'payment') {
    return <PaymentPage propertyId={route.propertyId} />;
  }

  if (route.page === 'car-rental') {
    return <CarRental />;
  }

  if (route.page === 'about') {
    return <AboutUs />;
  }

  if (route.page === 'contact') {
    return <ContactUs />;
  }

  if (route.page === 'car-details') {
    return <CarRentalDetails carId={route.propertyId} />;
  }

  if (route.page === 'terms') {
    return <TermsOfUse />;
  }

  if (route.page === 'privacy') {
    return <PrivacyPolicy />;
  }

  if (route.page === 'faq') {
    return <Faq />;
  }

  if (route.page === 'profile') {
    return <ProfilePage />;
  }

  return <Home />;
}

export default App;
