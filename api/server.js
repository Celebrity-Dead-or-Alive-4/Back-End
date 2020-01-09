const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const authRouter = require('../auth/auth-router.js');
const userRouter = require('../user/user-Router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);

server.get('/', (req, res) => {
    res.send('Celebrity Dead or Alive Build Week');
  });
  
module.exports = server;