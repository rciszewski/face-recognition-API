const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  API_KEY: process.env.API_KEY,
  DB_INT_URL: process.env.DB_URL,
  DB_EXT_URL: process.env.DB_EXT_URL

};