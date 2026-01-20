// src/pages/AboutPage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { fetchTeam } from '../services/api';

const AboutPage = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTeam = async () => {
            try {
                const data = await fetchTeam();
                setTeam(data);
            } catch (error) {
                console.error('Error loading team:', error);
            } finally {
                setLoading(false);
            }
        };
        loadTeam();
    }, []);

    return (
        <div className="container">
            <Header
                title="About AppVision"
                subtitle="Our Vision & Mission"
                tagline="Empowering Learners Everywhere"
            />

            <div className="content">
                <h2>About Us</h2>
                <p><b>AppVision</b> was founded to provide high-quality, affordable education in mobile app development.</p>
                <p>Our instructors are experienced professionals who guide students from basic to advanced levels.</p>
                <p>We believe in learning by doing — every student builds real apps before graduation.</p>

                <h3>Our Team</h3>
                {loading ? (
                    <p>Loading team information...</p>
                ) : (
                    <table className="team-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Specialization</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.map(member => (
                                <tr key={member.id}>
                                    <td>{member.name}</td>
                                    <td>{member.role}</td>
                                    <td>{member.specialization}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <h3>Why Choose Us?</h3>
                <ul className="benefits-list">
                    <li>Experienced mentors with industry experience</li>
                    <li>Hands-on learning with real-world projects</li>
                    <li>Flexible schedule to fit your lifestyle</li>
                    <li>Global student community and networking opportunities</li>
                    <li>Career support and job placement assistance</li>
                    <li>Affordable pricing with payment plans available</li>
                </ul>

                <h3>Our Vision</h3>
                <p>To become the leading platform for mobile app development education worldwide,
                    making quality education accessible to everyone regardless of their background or location.</p>

                <h3>Our Mission</h3>
                <p>To empower individuals with practical skills in mobile app development through
                    comprehensive courses, expert mentorship, and hands-on projects that prepare them
                    for successful careers in the tech industry.</p>
            </div>
        </div>
    );
};

export default AboutPage;