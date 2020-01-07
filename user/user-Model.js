const db = require('../data/dbConfig');

module.exports = {
  add,
  findById,
  findBy,
  update,
};

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .select('id', 'username', 'email', 'date_created', 'name')
    .first();
}

function findBy(filter) {
  return db('users').where(filter);
}

async function update(changes, id) {
  return db('users')
    .where('id', Number(id))
    .update(changes)
    .then(() => {
      return findById(Number(id));
    });
}
