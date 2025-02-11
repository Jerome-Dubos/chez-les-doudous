import React from 'react';
import { motion } from 'framer-motion';
import ServicesHighlight from '../../components/ServicesHighlight/ServicesHighlight';
import AboutUs from '../../components/AboutUs/AboutUs';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import './About.css';

const About = () => {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Notre Histoire
      </motion.h1>

      <div className="about-content-container">
        <AboutUs />
        <ServicesHighlight />
        <OpeningHours />
      </div>
    </motion.div>
  );
};

export default About;