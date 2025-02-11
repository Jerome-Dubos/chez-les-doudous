// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Charger les témoignages depuis le fichier JSON
    fetch('/data/testimonials.json')
      .then(response => response.json())
      .then(data => setTestimonials(data.testimonials))
      .catch(error => console.error('Erreur lors du chargement des témoignages:', error));
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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

        <div className="cards">
          <Link to="/menu" className="card">
            <span>Découvrir le Menu</span>
          </Link>

          <Link to="/gallery" className="card">
            <span>Explorer la Galerie</span>
          </Link>

          <Link to="/contact" className="card">
            <span>Contact & Réservations</span>
          </Link>

          <Link to="/about" className="card">
            <span>Notre Histoire</span>
          </Link>
        </div>

        {testimonials.length > 0 && (
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
        )}
      </motion.div>
    </div>
  );
};

export default Home;