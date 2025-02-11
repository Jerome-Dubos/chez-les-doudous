import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';

const ContactForm = forwardRef(({ onSubmit, messageSent }, ref) => {
  return (
    <motion.form
      ref={ref}
      className="contact-form"
      onSubmit={onSubmit}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="form-group">
        <input 
          type="text" 
          name="user_name" 
          placeholder="Votre nom"
          required 
        />
      </div>

      <div className="form-group">
        <input 
          type="email" 
          name="user_email" 
          placeholder="Votre email"
          required 
        />
      </div>

      <div className="form-group">
        <input 
          type="tel" 
          name="user_phone" 
          placeholder="Votre téléphone"
          required 
        />
      </div>

      <div className="form-group">
        <select name="event_type" required>
          <option value="">Type d'événement</option>
          <option value="mariage">Mariage</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="entreprise">Événement d'entreprise</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="form-group">
        <input 
          type="number" 
          name="guests_number" 
          placeholder="Nombre d'invités"
          min="1"
          required 
        />
      </div>

      <div className="form-group">
        <input 
          type="date" 
          name="event_date" 
          required 
        />
      </div>

      <div className="form-group">
        <textarea 
          name="message" 
          placeholder="Votre message"
          rows="5"
          required 
        ></textarea>
      </div>

      {messageSent && (
        <motion.div 
          className="success-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Message envoyé avec succès !
        </motion.div>
      )}

      <motion.button 
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Envoyer
      </motion.button>
    </motion.form>
  );
});

export default ContactForm;