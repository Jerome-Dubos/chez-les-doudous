import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegalMentionsModal.css';

const LegalMentionsModal = ({ isOpen, onClose }) => {
  const mentionsData = [
    { label: "Nom de l'établissement", value: "CHEZ LES DOUDOUS" },
    { label: "Nom et forme juridique", value: "CHEZ LES DOUDOUS" },
    { label: "Prénom", value: "JEAN MAURICE" },
    { label: "Nom", value: "TRAN" },
    { label: "Adresse", value: "Rue des Alouettes" },
    { label: "Code postal", value: "67460" },
    { label: "Ville", value: "Souffelweyersheim" },
    { label: "Pays", value: "FRANCE" },
    { label: "Numéro de téléphone", value: "+33668024548" },
    { label: "Adresse e-mail", value: "chezlesdoudous.traiteur@gmail.com" },
    { label: "Inscription au registre", value: "X" },
    { label: "Numéro d'enregistrement", value: "X" },
    { label: "Numéro fiscal local", value: "X" },
    { label: "Numéro de TVA", value: "X" },
    { label: "Autorité de surveillance", value: "X" },
    { label: "Numéro d'enregistrement autorité", value: "X" },
    { label: "Responsable", value: "MR TRAN" },
    { label: "Capital Social", value: "5000" }
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