import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, ShieldCheck, BarChart3 } from 'lucide-react';
import './Fleet.css';

const Fleet = () => {
    const features = [
        {
            icon: <Truck size={32} />,
            title: 'Diverse Fleet',
            desc: 'Specialized tankers ranging from 12KL to 34KL and 23MT to 30MT capacity.'
        },
        {
            icon: <MapPin size={32} />,
            title: 'GPRS Tracking',
            desc: 'Real-time monitoring for secure and timely delivery.'
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'Safety First',
            desc: 'Compliant with Petroleum Rules & Motor Vehicles Act.'
        },
        {
            icon: <BarChart3 size={32} />,
            title: 'High Capacity',
            desc: 'Capable of handling large-scale industrial contracts.'
        }
    ];

    return (
        <section id="fleet" className="fleet-section">
            <div className="container">
                <div className="fleet-grid">
                    <motion.div
                        className="fleet-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Fleet & Technology</h2>
                        <p className="section-subtitle">Modern Logistics Infrastructure</p>
                        We manage a sizable fleet of Tank Lorries necessary to fulfill our large-scale contracts. These tankers feature varying capacities, commonly ranging from <strong>12KL to 34KL and 23MT to 30MT</strong>, ensuring flexibility for different cargo requirements.

                        <div className="fleet-features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="fleet-feature-item">
                                    <div className="feature-icon-box">{feature.icon}</div>
                                    <div>
                                        <h4>{feature.title}</h4>
                                        <p>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="fleet-image-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1586191582114-7911950730b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Modern Tanker Fleet"
                            className="fleet-img"
                        />
                        <div className="tech-overlay glass-panel">
                            <div className="tech-stat">
                                <span className="tech-value">24/7</span>
                                <span className="tech-label">GPS Monitoring</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Fleet;
