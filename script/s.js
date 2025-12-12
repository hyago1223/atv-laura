import mysql from '../database/mysql.js'

async function sycn() {
    mysql.sync({ alter: true})
    console.log("tabelas...")
}

sycn()