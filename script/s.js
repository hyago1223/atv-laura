import mysql from '../database/mysql.js'

async function sycn() {
    await mysql.sync();
    console.log("tabelas...");
}

sycn()