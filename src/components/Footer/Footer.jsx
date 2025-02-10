import React from 'react';
import { motion } from 'framer-motion';
import LegalMentionsModal from '../LegalMentionsModal/LegalMentionsModal';
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            &copy; {currentYear} Chez les Doudous
          </motion.p>
        </div>
        
        <div className="footer-section">
          <motion.nav
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="footer-nav"
          >
            <LegalMentionsModal />
          </motion.nav>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;