// src/components/Section.js
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="section"
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </motion.div>
  );
};

export default Section;
