const conn = require('../database/connection');

module.exports = {

    async login (request, response) {

        const { id } = request.body;

        const ong = await conn('ong')
            .where('id', id)
            .select('nome')
            .first();
        //O First fará com que o resuitado não seja um array. Age como o FetchColumn

        if(!ong){
            return response.status(400).json({ error: 'ONG não encontrada' });
        }

        return response.json(ong);
    
    }

}