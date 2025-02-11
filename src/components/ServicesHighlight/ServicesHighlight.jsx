import React from 'react';
import { 
  Accessibility, 
  Truck, 
  Car, 
  Gift, 
  Home, 
  ShoppingBag, 
  UserRound 
} from 'lucide-react';
import { motion } from 'framer-motion';
import './ServicesHighlight.css';

const ServicesHighlight = () => {
  const services = [
    { 
      icon: <Accessibility className="service-icon" />, 
      title: "Accessible aux personnes à mobilité réduite",
    },
    { 
      icon: <Home className="service-icon" />, 
      title: "Service traiteur",
    },
    { 
      icon: <Truck className="service-icon" />, 
      title: "Livraison",
    },
    { 
      icon: <Car className="service-icon" />, 
      title: "Parking en libre-service",
    },
    { 
      icon: <Gift className="service-icon" />, 
      title: "Événements privés",
    },
    { 
      icon: <ShoppingBag className="service-icon" />, 
      title: "À emporter",
    },
    { 
      icon: <UserRound className="service-icon" />, 
      title: "Réceptions de mariage",
    }
  ];

  return (
    <motion.section 
      className="services-highlight"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2><span className="highlight">Nos</span> services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="icon-container">{service.icon}</div>
            <h3>{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesHighlight;
