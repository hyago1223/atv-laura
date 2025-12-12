import { Sequelize } from "sequelize";
import pg from "pg";

const postgres = new Sequelize(
    {
        dialect: 'postgres',
        dialectModule: pg, 
        host: 'dpg-d4tm2n1r0fns738281rg-a',
        port: 5432, 
        database: 'laura_ran8',
        username: 'laura_ran8_user',
        password: 'DdcCv2v0HeAAvpQTznmNJ0Wn6qykhwOY',
    }
);

export default postgres;