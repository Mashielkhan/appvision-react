import React from 'react';

const RegistrationForm = ({ formData, errors, isSubmitting, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    style={styles.input}
                    required
                />
                {errors.fullName && <span style={styles.error}>{errors.fullName}</span>}
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Email *</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    style={styles.input}
                    required
                />
                {errors.email && <span style={styles.error}>{errors.email}</span>}
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Password *</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    style={styles.input}
                    required
                />
                {errors.password && <span style={styles.error}>{errors.password}</span>}
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Gender *</label>
                <div style={styles.radioGroup}>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                            style={styles.radio}
                        />
                        Male
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                            style={styles.radio}
                        />
                        Female
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === 'other'}
                            onChange={handleChange}
                            style={styles.radio}
                        />
                        Other
                    </label>
                </div>
                {errors.gender && <span style={styles.error}>{errors.gender}</span>}
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Choose Course *</label>
                <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    style={styles.select}
                    required
                >
                    <option value="">-- Select Course --</option>
                    <option value="android">Android Development</option>
                    <option value="ios">iOS Development</option>
                    <option value="flutter">Cross Platform (Flutter)</option>
                    <option value="react">React Native</option>
                </select>
                {errors.course && <span style={styles.error}>{errors.course}</span>}
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 XXX XXXXXXX"
                    style={styles.input}
                />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Address</label>
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    rows="3"
                    style={styles.textarea}
                />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    style={styles.input}
                />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Upload Resume (Optional)</label>
                <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    style={styles.fileInput}
                    accept=".pdf,.doc,.docx"
                />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>
                    Experience Level: {formData.experience}/5
                </label>
                <input
                    type="range"
                    name="experience"
                    min="0"
                    max="5"
                    value={formData.experience}
                    onChange={handleChange}
                    style={styles.range}
                />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Comments</label>
                <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Any additional comments..."
                    rows="4"
                    style={styles.textarea}
                />
            </div>

            <div style={styles.checkboxGroup}>
                <label style={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        style={styles.checkbox}
                        required
                    />
                    I agree to the Terms and Conditions *
                </label>
                {errors.terms && <span style={styles.error}>{errors.terms}</span>}
            </div>

            <button
                type="submit"
                style={styles.submitButton}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Registering...' : 'Register Now'}
            </button>
        </form>
    );
};

const styles = {
    form: {
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        color: '#2c3e50',
        fontWeight: 'bold',
        marginBottom: '8px',
        fontSize: '1em',
    },
    input: {
        width: '100%',
        padding: '12px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        transition: 'border-color 0.3s ease',
    },
    select: {
        width: '100%',
        padding: '12px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    textarea: {
        width: '100%',
        padding: '12px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        fontFamily: 'inherit',
        resize: 'vertical',
        minHeight: '100px',
    },
    radioGroup: {
        display: 'flex',
        gap: '20px',
        marginTop: '8px',
    },
    radioLabel: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    radio: {
        marginRight: '8px',
        cursor: 'pointer',
    },
    checkboxGroup: {
        marginBottom: '25px',
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    checkbox: {
        marginRight: '10px',
        cursor: 'pointer',
        width: '18px',
        height: '18px',
    },
    fileInput: {
        width: '100%',
        padding: '10px',
        border: '2px dashed #ddd',
        borderRadius: '5px',
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    range: {
        width: '100%',
        marginTop: '10px',
        cursor: 'pointer',
    },
    submitButton: {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '15px 40px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.1em',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        width: '100%',
    },
    error: {
        color: '#e74c3c',
        fontSize: '0.9em',
        marginTop: '5px',
        display: 'block',
    }
};

export default RegistrationForm;