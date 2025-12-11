import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPython, FaDatabase, FaSass } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiRedux } from 'react-icons/si';
import portfolioData from '../data/portfolioData.json';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const iconMap = {
    FaReact: <FaReact />,
    FaJsSquare: <FaJsSquare />,
    SiTypescript: <SiTypescript />,
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    SiTailwindcss: <SiTailwindcss />,
    FaGitAlt: <FaGitAlt />,
    FaNodeJs: <FaNodeJs />,
    FaPython: <FaPython />,
    FaDatabase: <FaDatabase />,
    SiMongodb: <SiMongodb />,
    SiExpress: <SiExpress />,
    FaRedux: <SiRedux />,
    FaSass: <FaSass />
  };

  const skills = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="skills" id="skills" ref={ref}>
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 40px ${skill.color}40`
              }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {iconMap[skill.icon]}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
