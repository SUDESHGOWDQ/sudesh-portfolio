import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import portfolioData from '../data/portfolioData.json';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const iconMap = {
    FaEnvelope: <FaEnvelope />,
    FaPhone: <FaPhone />,
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    FaLinkedin: <FaLinkedin />,
    FaGithub: <FaGithub />,
    FaTwitter: <FaTwitter />
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = portfolioData.contactInfo;
  const socialLinks = portfolioData.socialLinks.filter(link => 
    ['github', 'linkedin', 'twitter'].includes(link.id)
  );

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
    <section className="contact" id="contact" ref={ref}>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('contact.title')}
        </motion.h2>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>{t('contact.heading')}</h3>
            <p>
              {t('contact.description')}
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">{iconMap[item.icon]}</div>
                  <div>
                    <h4>{t(`contact.contactInfo.${index}.title`)}</h4>
                    <p>{t(`contact.contactInfo.${index}.value`)}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
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
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('contact.form.submitButton')}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>

      <motion.div
        className="footer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p>{t('contact.footer')}</p>
      </motion.div>
    </section>
  );
};

export default Contact;
