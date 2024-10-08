const conexion = require("./conexion");

const findAll = async () => {
    const client = conexion();
    await client.connect();
    const deportes = await client.query('SELECT * FROM deportes');
    console.log(deportes);
    client.end();
}

const findById = async (id) => {
    const client = conexion();
    await client.connect();
    const deportes = await client.query(`SELECT * FROM deportes WHERE id = '${id}'`);
    console.log(deportes);
    await client.end();
}

const insert = async (id, nombre, precio) => {
    const client = conexion();
    await client.connect();
    const deportes = await client.query(`INSERT INTO deportes(id, nombre, precio) VALUES ('${id}', '${nombre}', ${precio})`);
    console.log(deportes);
    await client.end();
}

const update = async (id, nombre, precio) => {
    const client = conexion();
    await client.connect();
    const deportes = await client.query(`UPDATE deportes SET nombre = '${nombre}', precio = ${precio} WHERE id = '${id}'`);
    console.log(deportes);
    await client.end();
}

const deleteById = async (id) => {
    const client = conexion();
    await client.connect();
    const deportes = await client.query(`DELETE FROM deportes WHERE id = '${id}'`);
    console.log(deportes);
    await client.end();
}
