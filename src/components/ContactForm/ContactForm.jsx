import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';

// Regex patterns
const VALIDATION_PATTERNS = {
  name: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
  guests: /^[1-9][0-9]{0,3}$/
};

// Error messages
const ERROR_MESSAGES = {
  name: "Veuillez entrer un nom valide (2 à 50 caractères)",
  email: "Veuillez entrer une adresse email valide",
  phone: "Veuillez entrer un numéro de téléphone français valide",
  guests: "Le nombre d'invités doit être entre 1 et 9999",
  date: "La date doit être ultérieure à aujourd'hui",
  message: "Votre message doit contenir au moins 10 caractères"
};

const ContactForm = forwardRef(({ onSubmit, messageSent }, ref) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'user_name':
        return VALIDATION_PATTERNS.name.test(value);
      case 'user_email':
        return VALIDATION_PATTERNS.email.test(value);
      case 'user_phone':
        return VALIDATION_PATTERNS.phone.test(value);
      case 'guests_number':
        return VALIDATION_PATTERNS.guests.test(value);
      case 'event_date': {
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
      }
      case 'message':
        return value.length >= 10;
      default:
        return true;
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    if (!validateField(name, value)) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: ERROR_MESSAGES[name.replace('user_', '').replace('_number', '')]
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    
    let hasErrors = false;
    Object.keys(formValues).forEach(key => {
      if (!validateField(key, formValues[key])) {
        hasErrors = true;
        setErrors(prev => ({ 
          ...prev, 
          [key]: ERROR_MESSAGES[key.replace('user_', '').replace('_number', '')] 
        }));
      }
    });

    if (!hasErrors) {
      onSubmit(e);
    }
  };

  return (
    <motion.form
      ref={ref}
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="form-group">
        <motion.input 
          type="text" 
          name="user_name" 
          placeholder="Votre nom"
          required
          onBlur={handleBlur}
          whileFocus={{ scale: 1.02 }}
          className={touched.user_name && errors.user_name ? 'error' : ''}
        />
        {touched.user_name && errors.user_name && (
          <motion.span 
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.user_name}
          </motion.span>
        )}
      </div>

      <div className="form-group">
        <motion.input 
          type="email" 
          name="user_email" 
          placeholder="Votre email"
          required
          onBlur={handleBlur}
          whileFocus={{ scale: 1.02 }}
          className={touched.user_email && errors.user_email ? 'error' : ''}
        />
        {touched.user_email && errors.user_email && (
          <motion.span 
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.user_email}
          </motion.span>
        )}
      </div>

      <div className="form-group">
        <motion.input 
          type="tel" 
          name="user_phone" 
          placeholder="Votre téléphone"
          required
          onBlur={handleBlur}
          whileFocus={{ scale: 1.02 }}
          className={touched.user_phone && errors.user_phone ? 'error' : ''}
        />
        {touched.user_phone && errors.user_phone && (
          <motion.span 
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.user_phone}
          </motion.span>
        )}
      </div>

      <div className="form-group">
        <motion.select 
          name="event_type" 
          required
          whileFocus={{ scale: 1.02 }}
        >
          <option value="">Type d'événement</option>
          <option value="mariage">Mariage</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="entreprise">Événement d'entreprise</option>
          <option value="autre">Autre</option>
        </motion.select>
      </div>

      <div className="form-group">
        <motion.input 
          type="number" 
          name="guests_number" 
          placeholder="Nombre d'invités"
          min="1"
          max="9999"
          required
          onBlur={handleBlur}
          whileFocus={{ scale: 1.02 }}
          className={touched.guests_number && errors.guests_number ? 'error' : ''}
        />
        {touched.guests_number && errors.guests_number && (
          <motion.span 
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.guests_number}
          </motion.span>
        )}
      </div>

      <div className="form-group">
        <motion.input 
          type="date" 
          name="event_date" 
          required
          onBlur={handleBlur}
          onChange={(e) => {
            const isValid = validateField('event_date', e.target.value);
            if (!isValid) {
              setErrors(prev => ({
                ...prev,
                event_date: ERROR_MESSAGES.date
              }));
            } else {
              setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.event_date;
                return newErrors;
              });
            }
            setTouched(prev => ({ ...prev, event_date: true }));
          }}
          whileFocus={{ scale: 1.02 }}
          className={touched.event_date && errors.event_date ? 'error' : ''}
        />
        {touched.event_date && errors.event_date && (
          <motion.span 
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {errors.event_date}
          </motion.span>
        )}
      </div>

      <div className="form-group">
        <motion.textarea 
          name="message" 
          placeholder="Votre message"
          rows="5"
          required
          onBlur={handleBlur}
          whileFocus={{ scale: 1.02 }}
          className={touched.message && errors.message ? 'error' : ''}
        />
        {touched.message && errors.message && (
          <motion.span 
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.message}
          </motion.span>
        )}
      </div>

      {messageSent && (
        <motion.div 
          className="success-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Message envoyé avec succès !
        </motion.div>
      )}

      <motion.button 
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={Object.keys(errors).length > 0}
      >
        Envoyer
      </motion.button>
    </motion.form>
  );
});

export default ContactForm;