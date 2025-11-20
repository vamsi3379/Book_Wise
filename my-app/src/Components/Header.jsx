import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Truck } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <Truck className="logo-icon" size={32} />
                    <div className="logo-text">
                        <span className="company-name">Sushmarani</span>
                        <span className="company-suffix">Transport</span>
                    </div>
                </Link>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="nav-link" onClick={toggleMenu}>About Us</a>
                    <a href="#services" className="nav-link" onClick={toggleMenu}>Services</a>
                    <a href="#fleet" className="nav-link" onClick={toggleMenu}>Fleet</a>
                    <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
                </nav>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
