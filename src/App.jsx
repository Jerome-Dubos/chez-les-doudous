import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LegalMentionsModal from './components/LegalMentionsModal/LegalMentionsModal.jsx';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './styles/main.css';

export default function App() {
    const location = useLocation();
    const hideHeader = location.pathname === "/";
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {!hideHeader && <Header />}
            <Outlet />
            <Footer onOpenModal={() => setIsModalOpen(true)} />
            <LegalMentionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}