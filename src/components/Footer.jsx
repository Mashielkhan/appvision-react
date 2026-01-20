import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" style={styles.footer}>
            <div className="footer-content" style={styles.footerContent}>
                <div className="footer-links" style={styles.footerLinks}>
                    <a href="#" style={styles.socialLink}>Facebook</a>
                    <a href="#" style={styles.socialLink}>Twitter</a>
                    <a href="#" style={styles.socialLink}>LinkedIn</a>
                    <a href="#" style={styles.socialLink}>Instagram</a>
                </div>
                <p style={styles.copyright}>
                    © {currentYear} AppVision | Developed by Mashiel Khan
                </p>
                <p style={styles.address}>
                    University of Central Punjab, Lahore, Pakistan
                </p>
                <div style={styles.contactInfo}>
                    <p>Email: info@appvision.com</p>
                    <p>Phone: +92 312 4567890</p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        textAlign: 'center',
        padding: '30px 20px',
        marginTop: '40px',
        borderTop: '5px solid #3498db',
    },
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    footerLinks: {
        margin: '20px 0',
    },
    socialLink: {
        color: '#3498db',
        textDecoration: 'none',
        margin: '0 15px',
        fontSize: '1.1em',
        transition: 'color 0.3s ease',
    },
    copyright: {
        margin: '20px 0',
        fontSize: '1em',
        color: '#bdc3c7',
    },
    address: {
        margin: '10px 0',
        color: '#95a5a6',
        fontSize: '0.9em',
    },
    contactInfo: {
        marginTop: '15px',
        color: '#95a5a6',
        fontSize: '0.9em',
    }
};

export default Footer;