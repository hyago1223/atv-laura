import mysql from '../database/postgres.js'

async function sycn() {
    await mysql.sync();
    console.log("tabelas...");
}

sycn()