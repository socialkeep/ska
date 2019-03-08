const dotenv = require('dotenv');
dotenv.config();
const initOptions = {
  promiseLib: Promise
}
const pgp = require('pg-promise')(initOptions);
const cn = process.env.POSTGRES_URL;
const db = pgp(cn);

module.exports = db;