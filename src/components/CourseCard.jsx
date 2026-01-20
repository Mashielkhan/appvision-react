import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card" style={styles.card}>
            <img
                src={course.image}
                alt={course.title}
                style={styles.image}
            />
            <div style={styles.content}>
                <h3 style={styles.title}>{course.title}</h3>
                <p style={styles.description}>{course.description}</p>
                <button style={styles.button}>Learn More</button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        background: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
    },
    content: {
        padding: '20px',
    },
    title: {
        color: '#2c3e50',
        marginBottom: '10px',
        fontSize: '1.3em',
    },
    description: {
        color: '#7f8c8d',
        fontSize: '0.95em',
        lineHeight: '1.6',
        marginBottom: '15px',
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '0.9em',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    }
};

CourseCard.defaultProps = {
    course: {
        title: 'Course Title',
        description: 'Course description goes here',
        image: '/images/default-course.jpg'
    }
};

export default CourseCard;