import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

const Clients = () => {
    const clients = [
        { name: 'HPCL', fullName: 'Hindustan Petroleum Corporation Limited' },
        { name: 'BPCL', fullName: 'Bharat Petroleum Corporation Limited' },
        { name: 'Nayara Energy', fullName: 'Nayara Energy Limited' },
        { name: 'AM/NS India', fullName: 'ArcelorMittal Nippon Steel' },
        { name: 'HINCOL', fullName: 'Hindustan Colas Private Limited' },
        { name: 'SCCL', fullName: 'The Singareni Collieries Company Limited' },
        { name: 'Essar Steel', fullName: 'Essar Steel India Limited' }
    ];

    // Duplicate list for infinite scroll effect
    const marqueeClients = [...clients, ...clients];

    return (
        <section id="clients" className="clients-section">
            <div className="container">
                <div className="section-header center-text">
                    <h2 className="section-title">Trusted Partners</h2>
                    <p className="section-subtitle">Powering Industry Leaders</p>
                </div>

                <div className="marquee-container">
                    <motion.div
                        className="marquee-track"
                        animate={{ x: [0, -50 * clients.length + "%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 100
                        }}
                    >
                        {marqueeClients.map((client, index) => (
                            <div key={index} className="client-logo-card glass-panel">
                                <div className="client-initials">{client.name.substring(0, 2)}</div>
                                <div className="client-info">
                                    <h4>{client.name}</h4>
                                    <p>{client.fullName}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
