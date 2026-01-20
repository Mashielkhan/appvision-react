// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import { submitContact } from '../services/api';

const ContactPage = () => {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        subject: 'general',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!contactData.name.trim()) newErrors.name = 'Name is required';
        if (!contactData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(contactData.email)) newErrors.email = 'Email is invalid';
        if (!contactData.message.trim()) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await submitContact(contactData);
            setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
            setContactData({
                name: '',
                email: '',
                subject: 'general',
                message: ''
            });
            setErrors({});
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <Header
                title="Contact AppVision"
                subtitle="We'd Love to Hear from You"
                tagline="Get in Touch with Our Team"
            />

            <div className="content">
                <h2>Contact Us</h2>
                <p>Have questions? We'd love to hear from you. Use the form below to get in touch!</p>

                {submitStatus && (
                    <div className={`alert alert-${submitStatus.type}`}>
                        {submitStatus.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={contactData.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={contactData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject:</label>
                        <select
                            id="subject"
                            name="subject"
                            value={contactData.subject}
                            onChange={handleChange}
                            className="form-control"
                        >
                            <option value="general">General Inquiry</option>
                            <option value="admission">Admission</option>
                            <option value="technical">Technical Support</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={contactData.message}
                            onChange={handleChange}
                            rows="5"
                            className="form-control"
                            required
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><b>Address:</b> University of Central Punjab, Lahore, Pakistan</p>
                    <p><b>Email:</b> info@appvision.com</p>
                    <p><b>Phone:</b> +92 312 4567890</p>
                </div>

                <div className="social-links">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;