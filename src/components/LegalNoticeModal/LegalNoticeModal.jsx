import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegalNoticeModal.css';

const LegalNoticeModal = ({ isOpen, onClose }) => {
  const [noticeData, setNoticeData] = useState(null);

  useEffect(() => {
    fetch('/data/LegalNoticeData.json')
      .then((response) => response.json())
      .then((data) => setNoticeData(data))
      .catch((error) => console.error('Erreur lors du chargement des mentions légales:', error));
  }, []);

  return (
    <AnimatePresence>
      {isOpen && noticeData && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button 
              className="close-btn"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
            
            <h2>Propriété Intellectuelle & RGPD</h2>
            
            <div className="legal-container" style={{ overflowY: 'auto', maxHeight: '60vh' }}>
              <h3>Propriété Intellectuelle</h3>
              <p>{noticeData.intellectualProperty.description}</p>
              <p><strong>Restriction :</strong> {noticeData.intellectualProperty.restriction}</p>
              
              <h3>Conformité RGPD</h3>
              <p>{noticeData.rgpdCompliance.description}</p>
              <h4>Vos droits :</h4>
              <ul>
                {noticeData.rgpdCompliance.rights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{noticeData.rgpdCompliance.contact}</p>
              <p><strong>Conservation des données :</strong> {noticeData.rgpdCompliance.dataRetention}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalNoticeModal;
