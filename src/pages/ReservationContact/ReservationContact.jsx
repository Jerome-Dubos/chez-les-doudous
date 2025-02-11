import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '../../components/ContactForm/ContactForm';
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods';
import AccessMap from '../../components/AccessMap/AccessMap';
import './ReservationContact.css';

const ReservationContact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setMessageSent(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <motion.div 
      className="reservation-contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact & Réservation
      </motion.h1>

      <div className="contact-grid">
        <motion.section 
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="tel:+33668024548" 
            className="info-card"
            style={{ textDecoration: 'none' }}
          >
            <Phone className="info-icon" />
            <h3>Téléphone</h3>
            <p>+33 6 68 02 45 48</p>
          </a>

          <a 
            href="mailto:chezlesdoudous.traiteur@gmail.com"
            className="info-card"
            style={{ textDecoration: 'none' }}
          >
            <Mail className="info-icon" />
            <h3>Email</h3>
            <p>chezlesdoudous.traiteur@gmail.com</p>
          </a>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=Rue+des+Alouettes+67460+Souffelweyersheim"
            target="_blank"
            rel="noopener noreferrer"
            className="info-card"
            style={{ textDecoration: 'none' }}
          >
            <MapPin className="info-icon" />
            <h3>Adresse</h3>
            <p>Rue des Alouettes<br />67460 Souffelweyersheim</p>
          </a>
        </motion.section>

        <ContactForm ref={formRef} onSubmit={handleSubmit} messageSent={messageSent} />
      </div>

      <div className="additional-info">
        <PaymentMethods />
      </div>

      <AccessMap />
    </motion.div>
  );
};

export default ReservationContact;