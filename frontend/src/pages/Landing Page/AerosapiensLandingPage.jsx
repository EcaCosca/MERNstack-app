import React from 'react';
import { motion } from 'framer-motion';
import './AerosapiensLandingPage.css';

const AerosapiensLandingPage = () => {
  return (
    <div className="landing-page">
      <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1>Welcome to Aerosapiens</h1>
        <p>Empowering Wingsuit Base Jumpers Worldwide</p>
      </motion.header>
      <section className="section">
        <motion.div
          className="content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Jump Database</h2>
          <ul>
            <li>Create a comprehensive jump database with detailed information on wingsuit-friendly jump locations, including terrain profiles and user-contributed data.</li>
            <li>Allow users to upload and share their own jump data, enhancing the database with real user experiences.</li>
          </ul>
        </motion.div>
      </section>
      <section className="section">
        <motion.div
          className="content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Community Building</h2>
          <ul>
            <li>Establish user profiles and a forum for discussions and knowledge sharing among wingsuit base jumpers.</li>
            <li>Enable social media features for users to share their jumps, achievements, and experiences within the community.</li>
            <li>Implement a rating and review system for jump locations and events, ensuring users can find the best spots based on community feedback.</li>
          </ul>
        </motion.div>
      </section>
      {/* More sections for Events Calendar, Integrated Functionality, Mapping, Safety and Statistics, Donation and Support, Mobile App Integration, and User Education */}
    </div>
  );
};

export default AerosapiensLandingPage;
