import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileCheck, AlertTriangle, UserCheck } from 'lucide-react';
import './Safety.css';

const Safety = () => {
    const safetyItems = [
        {
            icon: <FileCheck size={32} />,
            title: 'Statutory Compliance',
            desc: 'Full adherence to PESO regulations and Motor Vehicles Act.'
        },
        {
            icon: <Shield size={32} />,
            title: 'HSE Standards',
            desc: 'Rigorous Health, Safety, and Environment protocols.'
        },
        {
            icon: <UserCheck size={32} />,
            title: 'Driver Training',
            desc: 'Regular safety workshops and defensive driving certification.'
        },
        {
            icon: <AlertTriangle size={32} />,
            title: 'Emergency Ready',
            desc: 'Equipped with TREM Cards and emergency response kits.'
        }
    ];

    return (
        <section id="safety" className="safety-section">
            <div className="container">
                <div className="section-header center-text">
                    <h2 className="section-title">Safety & Compliance</h2>
                    <p className="section-subtitle">Zero Tolerance for Safety Violations</p>
                </div>

                <div className="safety-grid">
                    {safetyItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="safety-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="safety-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Safety;
