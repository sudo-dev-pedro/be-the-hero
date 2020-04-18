
exports.up = function(knex) {

    //Criação da tabela
    return knex.schema.createTable('caso', function(table) {
        
        //Um valor numerico autoincrementado
        table.increments();

        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.decimal('valor').notNullable();

        //Referencia da tabela ONG
        table.string('ong_id').notNullable();

        //Chave estrangeira
        table.foreign('ong_id').references('id').inTable('ong');

    });

};

exports.down = function(knex) {

    return knex.schema.dropTable('caso');

};
