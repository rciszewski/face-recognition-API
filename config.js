const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  API_KEY: process.env.API_KEY,
  DB_KEY: process.env.DB_KEY
};