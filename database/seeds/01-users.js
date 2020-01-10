const bcrypt = require ('bcryptjs')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Josh',
          password: bcrypt.hashSync('pass', 10),
          email: 'Josh@test.com',
          name: 'Josh'
        },
        {
          username: 'Carlos',
          password: bcrypt.hashSync('pass', 10),
          email: 'Carlos@test.com',
          name: 'Carlos'
        },
        {
          username: 'Chris',
          password: bcrypt.hashSync('pass', 10),
          email: 'Chris@test.com',
          name: 'Chris'
        },
        {
          username: 'Megan',
          password: bcrypt.hashSync('pass', 10),
          email: 'Megan@test.com',
          name: 'Megan'
        },
        {
          username: 'Tyler',
          password: bcrypt.hashSync('pass', 10),
          email: 'Tyler@test.com',
          name: 'Tyler'
        },
        {
          username: 'Nadia',
          password: bcrypt.hashSync('pass', 10),
          email: 'Nadia@test.com',
          name: 'Nadia'
        },
      ]);
    });
};
