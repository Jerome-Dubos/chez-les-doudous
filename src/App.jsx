import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import './styles/main.css';

export default function App() {
    const location = useLocation();
    const hideHeader = location.pathname === "/";

    return (
        <>
            {!hideHeader && <Header />}
            <Outlet />
            <Footer />
        </>
    );
}
