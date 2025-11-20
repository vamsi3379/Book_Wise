import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">Who We Are</h2>
                        <p className="section-subtitle">A Legacy of Excellence in Logistics</p>

                        <p className="about-text">
                            <strong>SUSHMARANI TRANSPORT</strong> is a renowned transport company based in Visakhapatnam, Andhra Pradesh, recognized as a <strong>SMALL enterprise</strong> with deep expertise in providing specialized road transportation services for the petroleum and infrastructure sectors.
                        </p>

                        <p className="about-text">
                            Under the visionary management of <strong>P. Rama Raju</strong>, we have grown to manage vast distances, supported by a large, specialized fleet. Our commitment to large-scale operations is reflected in our robust financial performance and long-term contracts with major Oil Marketing Companies.
                        </p>

                        <div className="about-features">
                            <div className="feature-row">
                                <Users className="feature-icon" size={24} />
                                <div>
                                    <h4>Expert Management</h4>
                                    <p>Led by industry veterans ensuring professional service delivery.</p>
                                </div>
                            </div>
                            <div className="feature-row">
                                <Award className="feature-icon" size={24} />
                                <div>
                                    <h4>Recognized Excellence</h4>
                                    <p>Official SMALL enterprise status with proven track record.</p>
                                </div>
                            </div>
                            <div className="feature-row">
                                <TrendingUp className="feature-icon" size={24} />
                                <div>
                                    <h4>Scalable Operations</h4>
                                    <p>Capable of handling large-scale contracts across India.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-frame">
                            <img
                                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Logistics Management"
                                className="about-img"
                            />
                            <div className="frame-accent"></div>
                        </div>
                        <div className="experience-card glass-panel">
                            <span className="exp-number">20+</span>
                            <span className="exp-label">Years of<br />Excellence</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
