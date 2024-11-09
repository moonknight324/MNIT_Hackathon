const IndexModel = require('../models/index.model');

class IndexService {
    static async getWelcomeMessage() {
        // You can add business logic here
        return 'Welcome to the Express Server';
    }
}

module.exports = IndexService; 