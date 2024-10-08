const { Pool } = require('pg');

const conexion = () => {
    const pool = new Pool({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'root',
        database: 'deportes'
    });
    return pool;
}

module.exports = conexion;