const db = require('../database/dbConfig');

module.exports = {
  find,
  add,
  findById,
  findBy,
  update,
  remove
}

function find() {
  return db('users')
}

 function add(user) {
  const [id] = db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .select('id', 'username', 'email', 'name', 'date_created')
    .first();
}

function findBy(filter) {
  return db('users').where(filter);
}

function update(changes, id) {
  return db('users')
    .where('id', Number(id))
    .update(changes)
    .then(() => {
      return findById(Number(id));
    });
  };
  function remove(id) {
    return db('users')
  .where({id})
  .del()
}
