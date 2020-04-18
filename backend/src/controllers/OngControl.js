const crypto = require('crypto');
const conn = require('../database/connection');

module.exports = {

    async insert(request, response){

        const { nome, email, whatsapp, cidade, UF } = request.body;

        //Gerando uma id com 4 bytes aleatórios e no formato de HEXADECIMAL
        const id = crypto.randomBytes(4).toString('HEX');

        //Estabeleceno a conexão com a tabela desejada e informando a ação
        await conn('ong').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            UF,
        });

        return response.json( { id } );

    },

    async listAll(request, response) {

        const ongs = await conn('ong').select('*');
    
        return response.json(ongs);
    
    }

};