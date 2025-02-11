import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/gallery', label: 'Galerie' },
    { path: '/contact', label: 'Réservation & Contact' }
  ];

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ display: location.pathname === item.path ? 'none' : 'block' }}
            >
              <Link to={item.path}>{item.label}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;