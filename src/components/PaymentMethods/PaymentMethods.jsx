import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Banknote, Building2 } from 'lucide-react';
import './PaymentMethods.css';

const PaymentMethods = () => {
  const methods = [
    {
      icon: <CreditCard className="payment-icon" />,
      name: 'Carte bancaire',
      description: 'Visa, Mastercard, American Express'
    },
    {
      icon: <Banknote className="payment-icon" />,
      name: 'Espèces',
      description: 'Paiement en espèces accepté'
    },
    {
      icon: <Building2 className="payment-icon" />,
      name: 'Virement bancaire',
      description: 'Pour les événements importants'
    }
  ];

  return (
    <motion.div 
      className="payment-methods"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2>Moyens de paiement</h2>
      <div className="methods-grid">
        {methods.map((method, index) => (
          <motion.div 
            key={method.name}
            className="method-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {method.icon}
            <h3>{method.name}</h3>
            <p>{method.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PaymentMethods;