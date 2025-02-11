import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Banknote, Building2, Wifi, Apple } from 'lucide-react';
import paymentMethodsData from '../../data/paymentMethods.json';
import './PaymentMethods.css';

const iconMap = {
  CreditCard: <CreditCard className="payment-icon" />, 
  Banknote: <Banknote className="payment-icon" />, 
  Building2: <Building2 className="payment-icon" />, 
  Wifi: <Wifi className="payment-icon" />, 
  Apple: <Apple className="payment-icon" />
};

const PaymentMethods = () => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    setMethods(paymentMethodsData);
  }, []);

  return (
    <motion.section 
      className="payment-methods"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2>Options de paiement disponibles</h2>
      <div className="methods-grid">
        {methods.map((method, index) => (
          <motion.div 
            key={method.name}
            className="method-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="icon-container">{iconMap[method.icon]}</div>
            <h3>{method.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PaymentMethods;