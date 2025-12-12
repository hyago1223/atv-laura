import mysql from '../database/postgres.js'

async function sycn() {
    await mysql.sync({ alter: true});
    console.log("tabelas...");
}

sycn()