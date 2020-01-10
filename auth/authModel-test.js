// our connection to the database
const db = require('../database/dbConfig.js');

// the data access file we are testing
const Hobbits = require('./authModelModel.js');

beforeEach(async () => {
    // this function executes and clears out the table before each test
    await db('users').truncate();
  });

describe('auth model', () => {
  describe('insert()', () => {
    it('should insert the provided user into the db', async () => {
      await users.insert({ name: 'JoshTester' });
      await users.insert({ name: 'TesterJosh' });

      
      const users = await db('users');

      
      expect(users).toHaveLength(2);
    });
  });
});

async function insert(user) {
    
    const [id] = await db('users').insert(user, 'id');
  
    return db('users')
      .where({ id })
      .first();
  }

  
it('should insert the provided user into the db', async () => {
    let user = await users.insert({ name: 'JoshTester' });
    expect(user.name).toBe('JoshTester');
  
    
    user = await users.insert({ name: 'TesterJosh' });
    expect(user.name).toBe('TesterJosh');
  });