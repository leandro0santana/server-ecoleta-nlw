import Knex from 'knex';

export async function up(knex: Knex) {
  //CRIAR A TABELE
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();

    table.integer('pont_id')
    .notNullable()
    .references('id')
    .inTable('points');
    
    table.integer('item_id')
    .notNullable()
    .references('id')
    .inTable('items');
  });
}

export async function down(knex: Knex) {
  //DELETAR A TABELA
  return knex.schema.dropTable('point_items');
}