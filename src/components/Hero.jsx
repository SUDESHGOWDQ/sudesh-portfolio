import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import suduImg from '../assets/sudu.jpg';
import portfolioData from '../data/portfolioData.json';
import './Hero.css';

const Hero = () => {
  const { personal, socialLinks } = portfolioData;
  
  const iconMap = {
    FaGithub: <FaGithub />,
    FaLinkedin: <FaLinkedin />,
    FaTwitter: <FaTwitter />,
    FaEnvelope: <FaEnvelope />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="profile-image">
          <img src={suduImg} alt={personal.name} />
        </motion.div>
        
        <motion.div variants={itemVariants} className="greeting">
          {personal.greeting}
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="name">
          {personal.name}
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="title">
          {personal.title}
        </motion.h2>
        
        <motion.p variants={itemVariants} className="description">
          {personal.description}
        </motion.p>

        <motion.div variants={itemVariants} className="cta-buttons">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="social-links">
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {iconMap[social.icon]}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-bg-animation"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
};

export default Hero;
