import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import ReservationContact from './pages/ReservationContact/ReservationContact.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<ReservationContact />} />
            </Route>
        </Routes>
    </Router>
);