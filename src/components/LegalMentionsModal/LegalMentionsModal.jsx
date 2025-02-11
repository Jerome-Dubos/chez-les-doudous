import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegalMentionsModal.css';

const LegalMentionsModal = ({ isOpen, onClose }) => {
  const mentionsData = [
    { label: "Nom de l'établissement", value: "MAEL (CHEZ LES DOUDOUS)" },
    { label: "Forme juridique", value: "Société à responsabilité limitée (SARL)" },
    { label: "SIREN", value: "933 009 318" },
    { label: "SIRET du siège social", value: "933 009 318 00017" },
    { label: "Numéro TVA Intracommunautaire", value: "FR40 933 009 318" },
    { label: "Code NAF/APE", value: "56.21Z (Services des traiteurs)" },
    { label: "Adresse du siège social", value: "31 Rue des Alouettes, 67460 Souffelweyersheim, France" },
    { label: "Capital social", value: "5 000 €" },
    { label: "Date de création", value: "09/09/2024" },
    { label: "Durée de l’entreprise", value: "99 ans" },
    { label: "Exercice comptable", value: "Clôture au 31 décembre" },
    { label: "Numéro EORI", value: "Pas de numéro valide" },
    { label: "Hébergeur du site", value: "À compléter" },
    { label: "Responsable légal", value: "À compléter" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
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
            
            <h2>Mentions légales</h2>
            
            <div className="table-container">
              <table className="legal-mentions-table">
                <tbody>
                  {mentionsData.map((item, index) => (
                    <tr key={index} style={{"--row-index": index}}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalMentionsModal;