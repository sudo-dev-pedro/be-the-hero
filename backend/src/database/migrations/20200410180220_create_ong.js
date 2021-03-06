
exports.up = function(knex) {
    
    //Criação da tabela
    return knex.schema.createTable('ong', function(table) {
        
        table.string('id').primary();
        
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('cidade').notNullable();
        table.string('UF', 2).notNullable();

    });
};

exports.down = function(knex) {

    return knex.schema.dropTable('ong');

};
