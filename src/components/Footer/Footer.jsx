import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LegalMentionsModal from '../LegalMentionsModal/LegalMentionsModal';
import PrivacyPolicyModal from '../PrivacyPolicyModal/PrivacyPolicyModal';
import LegalNoticeModal from '../LegalNoticeModal/LegalNoticeModal';
import './Footer.css';

const Footer = () => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <>
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
              <motion.button
                onClick={() => setIsLegalModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mentions légales
              </motion.button>
              <motion.button
                onClick={() => setIsPrivacyModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Politique de confidentialité
              </motion.button>
              <motion.button
                onClick={() => setIsNoticeModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Propriété Intellectuelle & RGPD
              </motion.button>
            </motion.nav>
          </div>
        </div>
      </motion.footer>

      <LegalMentionsModal 
        isOpen={isLegalModalOpen} 
        onClose={() => setIsLegalModalOpen(false)} 
      />
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <LegalNoticeModal 
        isOpen={isNoticeModalOpen} 
        onClose={() => setIsNoticeModalOpen(false)} 
      />
    </>
  );
};

export default Footer;
