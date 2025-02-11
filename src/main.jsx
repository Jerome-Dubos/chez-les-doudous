import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import ReservationContact from './pages/ReservationContact/ReservationContact.jsx';
import Menu from './pages/Menu/Menu.jsx';
import About from './pages/About/About.jsx';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<ReservationContact />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    </Router>
);