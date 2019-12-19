exports.up = function(knex) {
    return knex.schema.createTable('scores', scores => {
      scores.increments();
  
      scores
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
  
      scores
      .integer('recent_score')
      .notNullable();
  
      scores
      .integer('high_score')
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('scores');
  };
  