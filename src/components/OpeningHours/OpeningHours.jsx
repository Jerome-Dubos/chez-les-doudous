import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import './OpeningHours.css';

const OpeningHours = () => {
  const [openingHours, setOpeningHours] = useState([]);

  useEffect(() => {
    fetch('/data/OpeningHours.json')
      .then((response) => response.json())
      .then((data) => setOpeningHours(data))
      .catch((error) => console.error('Erreur lors du chargement des horaires d\'ouverture:', error));
  }, []);

  const isCurrentDay = (day) => {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return days[new Date().getDay()] === day;
  };

  return (
    <motion.div 
      className="opening-hours"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="hours-header">
        <Clock className="hours-icon" />
        <h2>Horaires d'ouverture</h2>
      </div>
      <div className="hours-list">
        {openingHours.map((item, index) => (
          <motion.div 
            key={item.day}
            className={`hours-item ${isCurrentDay(item.day) ? 'current' : ''} ${item.open === 'Fermé' ? 'closed' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="day">{item.day}</span>
            <span className="time">{item.open}</span>
            {item.kitchen && <span className="kitchen">Cuisine: {item.kitchen}</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OpeningHours;
