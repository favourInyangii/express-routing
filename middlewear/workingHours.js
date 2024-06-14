// middleware/workingHours.js
module.exports = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();  // 0 (Sunday) to 6 (Saturday)
    const hour = now.getHours();  // 0 to 23

    // Check if the current time is within Monday to Friday, 9 AM to 5 PM
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();  // Allow the request to proceed
    } else {
        res.send('The web application is only available during working hours (Monday to Friday, 9 to 17).');
    }
};
