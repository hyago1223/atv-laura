import { Sequelize } from "sequelize";
import pg from "pg";

const postgres = new Sequelize(
    {
        dialect: 'postgres',
        dialectModule: pg, // Módulo 'pg' importado para o dialecto postgres
        host: 'dpg-d4tm2n1r0fns738281rg-a',
        port: '5432', // Porta padrão do PostgreSQL
        database: 'laura_ran8',
        username: 'laura_ran8_user',
        password: 'DdcCv2v0HeAAvpQTznmNJ0Wn6qykhwOY',
    }
);

export default postgres;