import { Sequelize } from "sequelize";
import pg from "pg";

const postgres = new Sequelize(
    {
        dialect: 'postgres',
        dialectModule: pg, 
        host: 'dpg-d4tmaaumcj7s7382h8sg-a',
        port: 5432, 
        database: 'a_t0t4',
        username: 'as',
        password: 'HMWzLvTKs3MSlpTFE41PZ2jPGRD3RzIG',
    }
);

export default postgres;