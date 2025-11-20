import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Award, MapPin, Users, TrendingUp, Shield } from 'lucide-react';
import './ProjectHighlights.css';

const ProjectHighlights = () => {
    const highlights = [
        {
            id: 1,
            icon: <Award size={32} />,
            title: 'HPCL Partnership',
            description: 'Long-term contract for POL (MS/HSD/SKO/ATF) ex-Vizag Installation secured until 2028, ensuring reliable fuel distribution across the region.',
            tag: 'PSU Contract'
        },
        {
            id: 2,
            icon: <Award size={32} />,
            title: 'BPCL Partnership',
            description: 'Comprehensive transportation services for Petrol, Diesel, LDO, Furnace Oil, and Bulk Bitumen, supporting BPCL\'s extensive distribution network.',
            tag: 'PSU Contract'
        },
        {
            id: 3,
            icon: <Award size={32} />,
            title: 'IOCL Partnership',
            description: 'Trusted logistics partner for Indian Oil Corporation, handling Petrol, Diesel, LDO, FO, and Bulk Bitumen across strategic routes.',
            tag: 'PSU Contract'
        },
        {
            id: 4,
            icon: <Truck size={32} />,
            title: 'Nayara Energy Logistics',
            description: 'Trusted partner for MS and HSD distribution, fully compliant with Transport Discipline Guidelines (TDG) for safe petroleum transport.',
            tag: 'Private Sector'
        },
        {
            id: 5,
            icon: <Users size={32} />,
            title: 'Steel & Infrastructure',
            description: 'Critical logistics partner for ArcelorMittal Nippon Steel and Essar Steel at Paradeep, supporting India\'s manufacturing backbone.',
            tag: 'Industrial'
        },
        {
            id: 6,
            icon: <MapPin size={32} />,
            title: 'MTO Long-Haul Route',
            description: 'Successfully executed strategic MTO transportation from HPCL Visakhapatnam to HPCL Kolkata Terminal, connecting key production hubs.',
            tag: 'Long-Distance'
        },
        {
            id: 7,
            icon: <MapPin size={32} />,
            title: 'Airport & Expressway Transport',
            description: 'Road transport contracts serving airports and expressways across Andhra Pradesh and Telangana. Long-haul delivery routes to West Bengal and Raipur.',
            tag: 'Infrastructure'
        },
        {
            id: 8,
            icon: <Shield size={32} />,
            title: 'Government & Power Sector',
            description: 'Managing essential fuel supply chains for Singareni Collieries and NTPC, ensuring uninterrupted energy sector operations.',
            tag: 'Government PSU'
        },
        {
            id: 9,
            icon: <TrendingUp size={32} />,
            title: 'High-Volume Deliveries',
            description: 'Proven track record of massive Furnace Oil and LDO deliveries to steel plants and power stations across Raipur, Paradeep, and Haldia.',
            tag: 'Large Scale'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header center-text">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Key Partnerships & Projects
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Serving India's Leading Corporations
                    </motion.p>
                </div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {highlights.map((highlight) => (
                        <motion.div
                            key={highlight.id}
                            className="project-card glass-panel"
                            variants={cardVariants}
                        >
                            <div className="project-icon-box">
                                {highlight.icon}
                            </div>
                            <div className="project-content">
                                <span className="project-tag">{highlight.tag}</span>
                                <h3>{highlight.title}</h3>
                                <p>{highlight.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectHighlights;
