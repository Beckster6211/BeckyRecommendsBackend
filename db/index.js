const { Pool } = require("pg");

// const pool = new Pool({
//   user: "cytokhhftpxent",
//   host: "ec2-52-209-171-51.eu-west-1.compute.amazonaws.com",
//   database: "df9u1dnbrb2u4b",
//   password: "d298e5cc36bc384af978e50b48af24094df3bdaeb90e71083d8373027708aebb",
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
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: function (text, params, callback) {
    return pool.query(text, params, callback);
  },
};
