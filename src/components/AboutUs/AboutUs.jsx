import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <motion.section 
      className="about-us"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2>Chez les Doudous</h2>
      <div className="about-content">
        <p>
          <strong>CHEZ LES DOUDOUS</strong>, c'est la <strong>cuisine</strong> à papa, simple et savoureuse, 
          avec des produits de qualité. Cuisine qui a du goût, qui donne envie...
        </p>
        
        <p>
          <strong>Doudou en chef</strong>, avec son équipe, ne se contentent pas de préparer de simples repas. 
          Ils créent des expériences culinaires uniques, basées sur la <strong>cuisine fusion</strong>, 
          <strong>cuisine du monde</strong>, pour vous ouvrir de nouveaux horizons de saveurs. 
          Le tout, dans une démarche de cuisine <strong>éco-responsable</strong> (parce que c'est bien de le faire !). 
          Bref, tout pour faire fondre petits et grands :)
        </p>
        
        <p>
          Au menu, découvrez nos amuses-bouches salés et sucrés. <strong>Chez les DOUDOUS</strong> nous 
          vous préparons une cuisine qui correspond à votre image. Asseyez-vous, détendez-vous.
        </p>
        
        <p>
          Événement intime ou grand rassemblement (à Strasbourg et alentours), nous croyons que chacun 
          d'entre eux est unique, tout comme vos goûts. C'est pour cela que notre <strong>doudou en chef</strong> 
          propose la création de prestations traiteurs sur mesure, adaptées à vos besoins et vos envies.
        </p>
        
        <p>Racontez nous votre histoire... Nous allons la dessiner.</p>
        
        <h3>Services entreprises</h3>
        <p>
          <strong>Chez Les Doudous</strong> ... c'est votre moment, votre choix.
        </p>
        
        <p>
          Découvrez également nos offres Lunch box entreprise. Savourez nos plats à <strong>emporter</strong> 
          ou en <strong>livraison</strong> directement dans vos entreprises. Nous mettons à votre disposition 
          une carte proposant des plats variés disponible en livraison le jour même de votre commande.
        </p>
        
        <p>
          Vous organisez un <strong>événement d'entreprise</strong> ? Repas de Noël, <strong>séminaires</strong>, 
          pot de départ, afterwork... Les <strong>Doudous</strong> seront ravis d'assurer le bon déroulé 
          de votre <strong>événement</strong>.
        </p>
        
        <p>
          Plusieurs options de paiement disponibles (CB, espèces, carte ticket restaurant).
        </p>
      </div>
    </motion.section>
  );
};

export default AboutUs;