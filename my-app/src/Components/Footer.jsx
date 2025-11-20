import React from 'react';
import { Truck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo-container">
                            <Truck className="logo-icon" size={28} />
                            <span className="logo-text">Sushmarani Transport</span>
                        </div>
                        <p className="footer-desc">
                            Premier liquid cargo logistics partner for India's energy sector. Safe, reliable, and compliant transportation solutions.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li>Petroleum Transport</li>
                            <li>Bitumen Logistics</li>
                            <li>Industrial Fuels</li>
                            <li>Hazardous Cargo</li>
                        </ul>
                    </div>

                    <div className="footer-legal">
                        <h4>Legal</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Safety Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sushmarani Transport. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
