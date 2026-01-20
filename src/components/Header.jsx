import React from 'react';

const Header = ({ title, subtitle, tagline }) => {
    return (
        <header className="header" style={styles.header}>
            <img
                src="/images/header.jpg"
                alt="AppVision Header"
                style={styles.headerImage}
            />
            <div style={styles.logoContainer}>
                <img
                    src="/images/logo.jpg"
                    alt="AppVision Logo"
                    style={styles.logo}
                />
            </div>
            <h1 style={styles.title}>{title}</h1>
            <h2 style={styles.subtitle}>{subtitle}</h2>
            <h3 style={styles.tagline}>{tagline}</h3>
        </header>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    headerImage: {
        maxWidth: '100%',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        marginBottom: '20px',
    },
    logoContainer: {
        margin: '20px 0',
    },
    logo: {
        width: '150px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
        color: '#2c3e50',
        margin: '15px 0',
        fontSize: '2.5em',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    subtitle: {
        color: '#34495e',
        fontSize: '1.8em',
        margin: '10px 0',
        fontWeight: 'normal',
    },
    tagline: {
        color: '#7f8c8d',
        fontSize: '1.2em',
        fontStyle: 'italic',
        fontWeight: 'normal',
    }
};

export default Header;