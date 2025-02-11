import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/data/GalleryData.json')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Erreur lors du chargement de la galerie:', error));
  }, []);

  const categories = ["all", ...new Set(images.map((img) => img.category))];

  const filteredImages = selectedCategory === "all"
    ? images
    : images.filter((img) => img.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Notre carte
      </motion.h1>

      <motion.div 
        className="filter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "all" ? "Toutes les catégories" : category}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div 
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              key={img.name}
              className="gallery-item"
              variants={itemVariants}
              layoutId={img.name}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedItem(img)}
            >
              <motion.img 
                src={img.imageUrl} 
                alt={img.altText}
                className="gallery-img"
              />
              <motion.div className="gallery-info">
                <h3>{img.name}</h3>
                <span>{img.category}</span>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="modal-content"
              layoutId={selectedItem.name}
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedItem.imageUrl} 
                alt={selectedItem.altText}
                className="modal-image"
              />
              <div className="modal-info">
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.description}</p>
                <motion.button 
                  className="close-button"
                  onClick={() => setSelectedItem(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Fermer
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Gallery;
