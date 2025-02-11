import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PrivacyPolicyModal.css';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const [policyData, setPolicyData] = useState(null);

  useEffect(() => {
    fetch('/data/PrivacyPolicyData.json')
      .then((response) => response.json())
      .then((data) => setPolicyData(data))
      .catch((error) => console.error('Erreur lors du chargement de la politique de confidentialité:', error));
  }, []);

  return (
    <AnimatePresence>
      {isOpen && policyData && (
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
            
            <h2>Politique de Confidentialité</h2>
            
            <div className="policy-container" style={{ overflowY: 'auto', maxHeight: '60vh' }}>
              <p>Dernière mise à jour : {policyData.lastUpdate}</p>
              <p>Chez <strong>{policyData.company}</strong>, nous attachons une grande importance à la protection des données personnelles.</p>
              <h3>Collecte des données</h3>
              <ul>
                {policyData.dataCollected.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h3>Utilisation des données</h3>
              <ul>
                {policyData.usage.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h3>Partage des données</h3>
              {policyData.dataSharing.thirdParties.length > 0 ? (
                <ul>
                  {policyData.dataSharing.thirdParties.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>Aucune donnée n'est partagée avec des tiers.</p>
              )}
              <h3>Conservation des données</h3>
              <p>{policyData.dataRetention}</p>
              <h3>Vos droits</h3>
              <ul>
                {policyData.userRights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h3>Sécurité des données</h3>
              <p>{policyData.securityMeasures}</p>
              <p>Pour toute question, contactez-nous : <strong>{policyData.email}</strong></p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
