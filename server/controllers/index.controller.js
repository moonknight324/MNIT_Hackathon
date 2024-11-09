const IndexService = require('../services/index.service');

class IndexController {
    static async getWelcomeMessage(req, res, next) {
        try {
            const message = await IndexService.getWelcomeMessage();
            res.json({ message });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = IndexController; 