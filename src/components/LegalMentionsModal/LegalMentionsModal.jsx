import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegalMentionsModal.css';

const LegalMentionsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button 
        className="open-modal-btn" 
        onClick={toggleModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Mentions légales
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
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
                onClick={toggleModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
              
              <h2>Mentions légales</h2>
              
              <div className="table-container">
                <table className="legal-mentions-table">
                  <tbody>
                    <tr>
                      <th>Nom de l'établissement</th>
                      <td>CHEZ LES DOUDOUS</td>
                    </tr>
                    <tr>
                      <th>Nom et forme juridique</th>
                      <td>CHEZ LES DOUDOUS</td>
                    </tr>
                    <tr>
                      <th>Prénom</th>
                      <td>JEAN MAURICE</td>
                    </tr>
                    <tr>
                      <th>Nom</th>
                      <td>TRAN</td>
                    </tr>
                    <tr>
                      <th>Adresse</th>
                      <td>Rue des Alouettes</td>
                    </tr>
                    <tr>
                      <th>Code postal</th>
                      <td>67460</td>
                    </tr>
                    <tr>
                      <th>Ville</th>
                      <td>Souffelweyersheim</td>
                    </tr>
                    <tr>
                      <th>Pays</th>
                      <td>FRANCE</td>
                    </tr>
                    <tr>
                      <th>Numéro de téléphone</th>
                      <td>+33668024548</td>
                    </tr>
                    <tr>
                      <th>Adresse e-mail</th>
                      <td>chezlesdoudous.traiteur@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Inscription au registre</th>
                      <td>X</td>
                    </tr>
                    <tr>
                      <th>Numéro d'enregistrement</th>
                      <td>X</td>
                    </tr>
                    <tr>
                      <th>Numéro fiscal local</th>
                      <td>X</td>
                    </tr>
                    <tr>
                      <th>Numéro de TVA</th>
                      <td>X</td>
                    </tr>
                    <tr>
                      <th>Autorité de surveillance</th>
                      <td>X</td>
                    </tr>
                    <tr>
                      <th>Numéro d'enregistrement autorité</th>
                      <td>X</td>
                    </tr>
                    <tr>
                      <th>Responsable</th>
                      <td>MR TRAN</td>
                    </tr>
                    <tr>
                      <th>Capital Social</th>
                      <td>5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <motion.button 
                className="close-modal-btn"
                onClick={toggleModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fermer
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LegalMentionsModal;