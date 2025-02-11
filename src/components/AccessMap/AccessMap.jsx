import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bus, Car, Train } from 'lucide-react';
import './AccessMap.css';

const AccessMap = () => {
  const transportModes = [
    {
      icon: <Car className="transport-icon" />,
      title: 'En voiture',
      description: 'Parking gratuit disponible sur place'
    },
    {
      icon: <Bus className="transport-icon" />,
      title: 'En bus',
      description: 'Ligne 6 - Arrêt "Alouettes"'
    },
    {
      icon: <Train className="transport-icon" />,
      title: 'En train',
      description: 'Gare de Souffelweyersheim à 10 min à pied'
    }
  ];

  return (
    <motion.div 
      className="access-map"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="access-header">
        <MapPin className="access-icon" />
        <h2>Comment nous trouver</h2>
      </div>

      <div className="access-content">
        <div className="transport-modes">
          {transportModes.map((mode, index) => (
            <motion.div 
              key={mode.title}
              className="transport-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {mode.icon}
              <h3>{mode.title}</h3>
              <p>{mode.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="map-container">
          <iframe
            title="Location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.6836891561518!2d7.751843776889391!3d48.62928857170067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8c1f7d2a899%3A0x7c4c4f1a5b80c8e2!2sRue%20des%20Alouettes%2C%2067460%20Souffelweyersheim!5e0!3m2!1sfr!2sfr!4v1708364125045!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '0.5rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default AccessMap;