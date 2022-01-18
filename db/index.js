const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

// const pool = new Pool({
//   user: "wlzvicaillwuwc",
//   host: "ec2-52-213-119-221.eu-west-1.compute.amazonaws.com",
//   database: "d7ue4heipg8s50",
//   password: "9d00852fbd27fcaad12a808ae62d52ad87a5455e2bbc6412edc4cc0b759bc785",
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: function (text, params, callback) {
    return pool.query(text, params, callback);
  },
};
