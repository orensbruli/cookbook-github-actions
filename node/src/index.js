'use strict';

// Commented to demo Babel import syntax
// const express = require('express');
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes';

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const app = express();
app.use(cors({
  origin: '*',
}));
app.use(express.json());
app.use(express.json({type: 'application/json'}));
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  return res.json({message: 'Hello to Express Server Demo'});
});

app.use('/serverinfo', routes.serverinfo);

app.listen(port, hostname, () => {
  const now = new Date();
  console.log(
      `${now.toUTCString()}: Server running at http://${hostname}:${port}/`);
});

// process.on('SIGINT', () => {
//   close(() => {
//     const now = new Date();
//     console.log(
//         `${now.toUTCString()}: Server terminating at http://${hostname}:${port}/`);
//   });
// });

export default app;
