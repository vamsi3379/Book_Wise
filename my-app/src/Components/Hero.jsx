import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="hero-label">Specialized Bulk Petroleum Products Transportation</h2>
                    <h1 className="hero-headline">
                        Powering India's <br />
                        <span className="text-gradient">Energy Infrastructure</span>
                    </h1>
                </motion.div>

                <motion.p
                    className="hero-subheadline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Trusted logistics partner for Major PSUs and MNCs including HPCL, BPCL, Nayara Energy, and ArcelorMittal Nippon Steel.
                </motion.p>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="stat-item">
                        <span className="stat-value">20+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-value">34KL</span>
                        <span className="stat-label">Max Capacity</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-value">100%</span>
                        <span className="stat-label">Safety Record</span>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#contact" className="btn btn-primary">
                        Get a Quote <ArrowRight size={20} />
                    </a>
                    <a href="#services" className="btn btn-outline">
                        Explore Services
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
