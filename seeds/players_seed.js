var knex = require('../db/knex');

exports.seed = function(knex, Promise) {
  return knex('player').del().then(function() {
    return Promise.all([
      knex('player').insert({
        first_name: 'Brock',
        last_name: 'Osweiler',
        jersey_number: 17,
        position: 'QB',
        date_started: '09/01/2012'
       }),
      knex('player').insert({
        first_name: 'Peyton',
        last_name: 'Manning',
        jersey_number: 18,
        position: 'QB',
        date_started: '09/01/1998'
      }),
      knex('player').insert({
        first_name: 'Demaryous',
        last_name: 'Thomas',
        jersey_number: 88,
        position: 'WR',
        date_started: '09/01/2010'
       })
     ]);
   });
 };
