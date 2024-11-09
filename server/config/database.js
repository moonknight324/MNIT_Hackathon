// Database configuration
const config = {
    development: {
        // Add your development database config here
    },
    production: {
        // Add your production database config here
    }
};

module.exports = config[process.env.NODE_ENV || 'development']; 