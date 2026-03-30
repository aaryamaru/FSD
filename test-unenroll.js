require('dotenv').config();
const mongoose = require('mongoose');
const Enrollment = require('./models/Enrollment');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI).then(async () => {
    try {
        const user = await User.findOne();
        if (!user) return console.log('No user found to test with.');
        const enrollments = await Enrollment.find({ student: user._id });
        if (enrollments.length === 0) return console.log('No enrollments found for this user.');
        
        const enrollment = enrollments[0];
        console.log('Testing findOneAndDelete with student:', user._id, 'course:', enrollment.course);
        const res = await Enrollment.findOneAndDelete({ student: user._id, course: enrollment.course });
        console.log("Result:", res);
    } catch(e) {
        console.error("FAILED", e);
    }
    process.exit(0);
});
