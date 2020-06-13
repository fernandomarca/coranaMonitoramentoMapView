import Knex from 'knex';

export async function seed(knex: Knex) {

    return await knex('items').del()
        .then(function () {
            return knex('items').insert([
                { title: 'Saudável', image: 'bem.png' },
                { title: 'Caso confirmado', image: 'sick.png' },
                { title: 'Caso Suspeito', image: 'suspeito.png' },
                { title: 'Óbito confirmado', image: 'dead.png' },
            ]);
        });
}

// exports.seed = function(knex, Promise) {
//     // Deletes ALL existing entries
//     return knex('users').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('users').insert([