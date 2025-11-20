import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('Please fill in all fields.');
            setStatus('error');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            // Web3Forms API Integration
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '3a9cfe2c-2cea-4cb6-8241-a3266276bba9', // Replace with your Web3Forms access key
                    subject: 'New Contact Form Submission - Sushmarani Transport',
                    from_name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setStatus('idle');
                }, 5000);
            } else {
                setErrorMessage('Failed to send message. Please try again.');
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('Network error. Please check your connection and try again.');
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header center-text">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Ready to Move Your Business Forward?</p>
                </div>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info glass-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Contact Information</h3>
                        <p className="contact-intro">
                            Reach out to our team for quotes, logistics planning, or partnership inquiries.
                        </p>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <div>
                                <h4>Head Office</h4>
                                <p>27-6-74, Srinagar, Gajuwaka,<br />Visakhapatnam 530026</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Phone size={20} /></div>
                            <div>
                                <h4>Phone</h4>
                                <p><a href="tel:+919000003379" style={{ color: 'inherit' }}>+91 90000 03379</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <div>
                                <h4>Email</h4>
                                <p><a href="mailto:sushmaranitrpt@gmail.com" style={{ color: 'inherit' }}>sushmaranitrpt@gmail.com</a></p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass-panel"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                    >
                        {status === 'success' ? (
                            <div className="success-message" style={{ textAlign: 'center', padding: '40px 20px' }}>
                                <CheckCircle size={48} color="var(--color-accent-green)" style={{ marginBottom: '20px', margin: '0 auto', display: 'block' }} />
                                <h3 style={{ color: 'var(--color-text-main)', marginBottom: '10px' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>Thank you for contacting us. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="error-message" style={{ color: 'var(--color-secondary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <AlertCircle size={16} /> {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary full-width"
                                    disabled={status === 'submitting'}
                                    style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {!status === 'submitting' && <Send size={18} />}
                                </button>
                            </>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
