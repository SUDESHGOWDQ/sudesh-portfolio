import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>{t('portfolio')}</h1>
          </Link>
        </motion.div>

		<div className='language-select'>
	  <select 
	    value={i18n.language} 
	    onChange={(e) => i18n.changeLanguage(e.target.value)}
	  >
	    <option value="en">ENGLISH</option>
	    <option value="ka">KANNADA</option>
	    <option value="hi">HINDI</option>
	    <option value="fr">FRENCH</option>
	    <option value="de">GERMAN</option>
	    <option value="es">SPANISH</option>
	    <option value="te">TELUGU</option>
	    <option value="ta">TAMIL</option>
	  </select>
	</div>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                className={location.pathname === item.to ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
