const conn = require('../database/connection');

module.exports = {
    
    async listCasesForONG (request, response) {

        const ong_id = request.headers.authorization;

        const casos_ong = await conn('caso')
            .where('ong_id', ong_id)
            .select('*');
    
        return response.json(casos_ong);
    
    }
};