import axios from 'axios';

// Mock API base URL
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fetch courses from API
export const fetchCourses = async () => {
    try {
        // In a real application, this would be an API call
        // For now, we'll return mock data
        const mockCourses = [
            {
                id: 1,
                title: 'Android App Development',
                description: 'Learn to build native Android apps using Kotlin and Java. Master Android Studio, Material Design, and Google Play Store deployment.',
                image: '/images/android.jpg',
                duration: '12 weeks',
                level: 'Beginner to Advanced'
            },
            {
                id: 2,
                title: 'iOS App Development',
                description: 'Master iOS app development with Swift and SwiftUI. Build beautiful, responsive iOS apps for iPhone and iPad.',
                image: '/images/ios.jpg',
                duration: '10 weeks',
                level: 'Beginner to Intermediate'
            },
            {
                id: 3,
                title: 'Cross-Platform Apps',
                description: 'Build apps with Flutter & React Native that work on both Android and iOS. Write once, deploy everywhere.',
                image: '/images/cross.jpg',
                duration: '14 weeks',
                level: 'Intermediate to Advanced'
            },
            {
                id: 4,
                title: 'Mobile UI/UX Design',
                description: 'Design beautiful mobile interfaces using Figma and Adobe XD. Learn user experience principles and prototyping.',
                image: '/images/design.jpg',
                duration: '8 weeks',
                level: 'Beginner'
            }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return mockCourses;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

// Submit registration form
export const submitRegistration = async (formData) => {
    try {
        // In a real app, this would be a POST request to your backend
        const response = await api.post('/posts', {
            title: 'Registration Submission',
            body: JSON.stringify({
                name: formData.fullName,
                email: formData.email,
                course: formData.course,
                phone: formData.phone,
                experience: formData.experience,
                timestamp: new Date().toISOString()
            }),
            userId: 1,
        });

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        return {
            success: true,
            data: response.data,
            message: 'Registration submitted successfully!'
        };
    } catch (error) {
        console.error('Error submitting registration:', error);
        throw error;
    }
};

// Submit contact form
export const submitContact = async (contactData) => {
    try {
        const response = await api.post('/posts', {
            title: 'Contact Form Submission',
            body: JSON.stringify({
                name: contactData.name,
                email: contactData.email,
                subject: contactData.subject,
                message: contactData.message,
                timestamp: new Date().toISOString()
            }),
            userId: 1,
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            success: true,
            data: response.data,
            message: 'Message sent successfully! We will contact you soon.'
        };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
};

// Fetch team members
export const fetchTeam = async () => {
    try {
        const mockTeam = [
            {
                id: 1,
                name: 'Mashiel Khan',
                role: 'Lead Instructor',
                specialization: 'Android Development',
                experience: '8+ years',
                bio: 'Expert Android developer with multiple published apps on Google Play Store.'
            },
            {
                id: 2,
                name: 'Usman Asghar',
                role: 'CEO & Founder',
                specialization: 'Full Stack Mobile Development',
                experience: '10+ years',
                bio: 'Entrepreneur and full-stack developer passionate about education technology.'
            },
            {
                id: 3,
                name: 'Ali Raza',
                role: 'Mentor',
                specialization: 'iOS & Flutter',
                experience: '6+ years',
                bio: 'Cross-platform development expert specializing in iOS and Flutter applications.'
            }
        ];

        await new Promise(resolve => setTimeout(resolve, 800));

        return mockTeam;
    } catch (error) {
        console.error('Error fetching team:', error);
        throw error;
    }
};

// Fetch testimonials
export const fetchTestimonials = async () => {
    try {
        const mockTestimonials = [
            {
                id: 1,
                name: 'Sarah Ahmed',
                course: 'Android Development',
                review: 'AppVision transformed my career! I landed a job at a tech startup after completing the course.',
                rating: 5
            },
            {
                id: 2,
                name: 'Ahmed Raza',
                course: 'iOS Development',
                review: 'The hands-on projects were incredible. I published my first app on the App Store!',
                rating: 5
            },
            {
                id: 3,
                name: 'Fatima Khan',
                course: 'Flutter Development',
                review: 'Best investment in my education. The mentors are supportive and knowledgeable.',
                rating: 4
            }
        ];

        await new Promise(resolve => setTimeout(resolve, 700));

        return mockTestimonials;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        throw error;
    }
};