// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        navbar: {
            backgroundColor: '#2c3e50',
            padding: '15px 0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
        navContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
        },
        logoImg: {
            height: '50px',
            width: 'auto',
            borderRadius: '5px',
        },
        navLinks: {
            display: 'flex',
            gap: '20px',
        },
        navLink: {
            color: '#ecf0f1',
            textDecoration: 'none',
            padding: '12px 25px',
            backgroundColor: '#3498db',
            borderRadius: '5px',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
        }
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.navContainer}>
                <Link to="/">
                    <img
                        src="/images/logo.jpg"
                        alt="AppVision Logo"
                        style={styles.logoImg}
                    />
                </Link>
                <div style={styles.navLinks}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                    <Link to="/about" style={styles.navLink}>About Us</Link>
                    <Link to="/register" style={styles.navLink}>Registration</Link>
                    <Link to="/contact" style={styles.navLink}>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;