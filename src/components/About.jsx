import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import suduImg from '../assets/sudu.jpg';
import portfolioData from '../data/portfolioData.json';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const { about } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {t('about.title')}
        </motion.h2>

        <div className="about-content">
          <motion.div variants={itemVariants} className="about-image">
            <img style={{borderRadius:'50%', height:'300px', width:'300px', objectFit:'cover'}} src={suduImg} alt={t('personal.name')} />
          </motion.div>
          
          <motion.div variants={itemVariants} className="about-text">
            {t('about.paragraphs', { returnObjects: true }).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats">
            {t('about.stats', { returnObjects: true }).map((stat, index) => (
              <div key={index} className="stat-item">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: about.stats[index].delay, type: "spring" }}
                >
                  {stat.value}
                </motion.h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
