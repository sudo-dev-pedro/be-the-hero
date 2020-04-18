const crypto = require('crypto');
const conn = require('../database/connection');

module.exports = {

    async insert(request, response){

        const { titulo, descricao, valor } = request.body;
        const ong_id = request.headers.authorization;

        //Estabeleceno a conexão com a tabela desejada e informando a ação
        const result = await conn('caso').insert({
            titulo,
            descricao,
            valor,
            ong_id,
        });

        const id = result[0];

        return response.json( { id } );

    },

    async listAll (request, response) {

        //[] COlchetes fazem que eu pegue a primeira posiçao do array.
        //Mesmo assim o real valor ainda terá que ser pego no header da response
        const [count] = await conn('caso').count();

        /* PAGINAÇAO */
        //Valor padrão dele é igual a 1
        const { page = 1 } = request.query;

        /*
            Irei pegar todos os dados do caso e apenas algumas da ONG para que n ocorra a sobreposicao do ID.
        */
        const casos = await conn('caso')
            .join('ong', 'ong_id', '=', 'caso.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['caso.*', 
            'ong.nome', 
            'ong.email', 
            'ong.whatsapp', 
            'ong.cidade', 
            'ong.UF']);
        
        response.header('X-Total-Count', count['count(*)'] );

        return response.json(casos);

    },

    async delete (request, response) {

        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const caso = await conn('caso')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if(caso.ong_id != ong_id){

            return response.status(401).json({ error: 'Operação não autorizada' });

        }

        await conn('caso').where('id', id).delete();

        //Retorno uma resposta sem conteudo (sem corpo)
        return response.status(204).send();

    }

};