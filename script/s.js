import mysql from '../database/mysql.js'

async function sycn() {
    await mysql.sync({ alter: true});
    console.log("tabelas...");
}

sycn()