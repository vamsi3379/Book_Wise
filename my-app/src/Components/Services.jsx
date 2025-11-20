import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Factory, Construction, Fuel } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Petroleum Products',
            icon: <Fuel size={40} />,
            description: 'Comprehensive transport solutions for high-demand fuels.',
            items: [
                'Motor Spirit (MS)',
                'High-Speed Diesel (HSD)',
                'Superior Kerosene Oil (SKO)',
                'Aviation Turbine Fuel (ATF) & Branded Fuels'
            ]
        },
        {
            id: 2,
            title: 'Black Oils & Crude',
            icon: <Droplet size={40} />,
            description: 'Specialized handling for crude and heavy industrial oils.',
            items: [
                'Crude Oil Transport (Ravva Terminal, Surasani Yanam)',
                'Furnace Oil (FO)',
                'Light Diesel Oil (LDO)',
                'Low Sulphur Heavy Stock (LSHS)'
            ]
        },
        {
            id: 3,
            title: 'Bitumen & Emulsions',
            icon: <Construction size={40} />,
            description: 'Supporting infrastructure with bulk material logistics.',
            items: [
                'Bulk Bitumen (VG-10, VG-30, VG-40)',
                'Bitumen Emulsions',
                'Modified Bitumen (MB)',
                'Long-haul delivery to West Bengal & Raipur'
            ]
        },
        {
            id: 4,
            title: 'Industrial Logistics',
            icon: <Factory size={40} />,
            description: 'End-to-end supply chain solutions for heavy industries.',
            items: [
                'Steel Plant Logistics (AMNS, Essar)',
                'Power Plant Supply (NTPC, Singareni)',
                'Inter-state Permit Management',
                'Hazardous Material Handling'
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header center-text">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Comprehensive Product Portfolio
                    </motion.p>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <motion.div key={service.id} className="service-card glass-panel" variants={cardVariants}>
                            <div className="card-content">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                                <div className="divider"></div>
                                <ul className="service-list">
                                    {service.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-glow"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
