// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const testimonials = [
  {
    quote: "Une cuisine authentique et raffinée qui sublime chaque événement",
    author: "Marie L.",
    event: "Mariage",
    date: "Juin 2023"
  },
  {
    quote: "Service impeccable et mets délicieux. Nos invités étaient ravis !",
    author: "Thomas B.",
    event: "Séminaire d'entreprise",
    date: "Septembre 2023"
  },
  {
    quote: "Les saveurs étaient au rendez-vous, un vrai régal pour les papilles",
    author: "Sophie M.",
    event: "Anniversaire",
    date: "Novembre 2023"
  },
  {
    quote: "Professionnalisme et qualité exceptionnelle, je recommande vivement",
    author: "Laurent P.",
    event: "Gala",
    date: "Décembre 2023"
  },
  {
    quote: "Une équipe à l'écoute qui a su s'adapter à nos besoins",
    author: "Émilie D.",
    event: "Baptême",
    date: "Janvier 2024"
  }
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <div className="video-background">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/videos/presentation-doudou.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      <motion.div 
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Chez les Doudous</h1>
        <p className="tagline">Une expérience culinaire exceptionnelle</p>
        <p className="description">
          Découvrez notre service traiteur d'exception à Strasbourg. 
          Des plats raffinés préparés avec passion pour vos événements.
        </p>

        <motion.div className="cards">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/menu" className="card">Découvrir le Menu</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/gallery" className="card">Explorer la Galerie</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="card">Contact & Réservations</Link>
          </motion.div>
        </motion.div>

        <div className="testimonials-container">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={currentTestimonial}
              className="testimonial"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote>
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <cite>
                - {testimonials[currentTestimonial].author} 
                <span className="event-details">
                  {testimonials[currentTestimonial].event}, {testimonials[currentTestimonial].date}
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;