require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');

const courses = [
    { title: 'Intro to Web Dev', description: 'Learn HTML, CSS, and JS', instructor: 'John Doe', capacity: 30 },
    { title: 'Advanced React', description: 'Master React hooks and state', instructor: 'Jane Smith', capacity: 25 },
    { title: 'Node.js Basics', description: 'Backend development with Express', instructor: 'Bob Johnson', capacity: 40 },
    { title: 'MongoDB for Beginners', description: 'NoSQL basics and Mongoose', instructor: 'Alice Williams', capacity: 35 },
    { title: 'UI/UX Design Principles', description: 'Design fundamentals for web', instructor: 'Eve Davis', capacity: 20 },
];

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected. Clearing courses...');
        await Course.deleteMany({});
        console.log('Seeding courses...');
        await Course.insertMany(courses);
        console.log('Done!');
        process.exit(0);
    })
    .catch(err => console.error(err));
