const Pool = require('pg').Pool

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'ventas',
    port: 5432
})

module.exports = {pool}