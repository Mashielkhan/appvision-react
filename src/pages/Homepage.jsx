// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import { fetchCourses } from '../services/api';



const HomePage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const data = await fetchCourses();
                setCourses(data);
            } catch (error) {
                console.error('Error loading courses:', error);
            } finally {
                setLoading(false);
            }
        };
        loadCourses();
    }, []);

    useEffect(() => {
        console.log('Fetching courses...');
        const loadCourses = async () => {
            try {
                console.log('API call started');
                const data = await fetchCourses();
                console.log('Courses data received:', data);
                setCourses(data);
            } catch (error) {
                console.error('Error loading courses:', error);
            } finally {
                console.log('Loading completed');
                setLoading(false);
            }
        };
        loadCourses();
    }, []);

    return (
        <div className="container">
            <Header
                title="Welcome to AppVision"
                subtitle="Learn Mobile App Development with Ease"
                tagline="Empowering the Next Generation of Developers"
            />

            <div className="content">
                <h2>Home</h2>
                <p><b>AppVision</b> is a <i>modern learning platform</i> designed to help students master <u>mobile app development</u> in Android and iOS.</p>
                <p>We offer simple tutorials, hands-on projects, and expert guidance to make learning fun and practical.</p>
                <p>Join thousands of learners building real-world applications today!</p>

                <h3>Our Courses</h3>
                {loading ? (
                    <p>Loading courses...</p>
                ) : (
                    <div className="courses-grid">
                        {courses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                )}

                <h3>Learning Path</h3>
                <ol>
                    <li>Beginner - App Fundamentals</li>
                    <li>Intermediate - Database and APIs</li>
                    <li>Advanced - App Deployment</li>
                </ol>

                <div className="gallery">
                    <h3>Gallery</h3>
                    <div className="gallery-images">
                        <img src="/images/android.jpg" alt="Android Development" className="gallery-img" />
                        <img src="/images/ios.jpg" alt="iOS Development" className="gallery-img" />
                        <img src="/images/cross.jpg" alt="Cross Platform Apps" className="gallery-img" />
                    </div>
                </div>

                <div className="media-section">
                    <h3>🎬 Introduction Video</h3>
                    <video width="420" height="250" controls>
                        <source src="/videos/The Complete App Development Roadmap.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <h3>🎧 Listen to Our Welcome Audio</h3>
                    <audio controls className="welcome-audio">
                        <source src="/audio/videoplayback (3).m4a" type="audio/mpeg" />
                        Your browser does not support audio.

                    </audio>
                </div>
            </div>
        </div>
    );
};

export default HomePage;