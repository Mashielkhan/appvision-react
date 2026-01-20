// src/pages/RegistrationPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import RegistrationForm from '../components/RegistrationForm';
import { submitRegistration } from '../services/api';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        gender: '',
        course: '',
        phone: '',
        address: '',
        startDate: '',
        resume: null,
        experience: 0,
        comments: '',
        terms: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked :
                type === 'file' ? files[0] :
                    value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.course) newErrors.course = 'Course selection is required';
        if (!formData.terms) newErrors.terms = 'You must agree to terms and conditions';

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
            const result = await submitRegistration(formData);
            setSubmitStatus({ type: 'success', message: 'Registration successful!' });
            setFormData({
                fullName: '',
                email: '',
                password: '',
                gender: '',
                course: '',
                phone: '',
                address: '',
                startDate: '',
                resume: null,
                experience: 0,
                comments: '',
                terms: false
            });
            setErrors({});
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Registration failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <Header
                title="Register for AppVision"
                subtitle="Start Your Learning Journey"
                tagline="Join the Mobile App Revolution"
            />

            <div className="content">
                <h2>Registration</h2>
                <p>Register below to join our upcoming courses and start your journey in app development.</p>

                {submitStatus && (
                    <div className={`alert alert-${submitStatus.type}`}>
                        {submitStatus.message}
                    </div>
                )}

                <RegistrationForm
                    formData={formData}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default RegistrationPage;