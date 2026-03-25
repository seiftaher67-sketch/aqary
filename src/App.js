import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import PropertyDetails from './pages/PropertyDetails';

const getRoute = () => {
  if (typeof window === 'undefined') {
    return { page: 'home', propertyId: null };
  }

  const hash = window.location.hash || '#home';

  if (hash === '#bookings') {
    return { page: 'bookings', propertyId: null };
  }

  if (hash.startsWith('#property/')) {
    const propertyId = hash.replace('#property/', '');
    return { page: 'property', propertyId };
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

  return <Home />;
}

export default App;
