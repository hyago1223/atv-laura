import { Sequelize } from "sequelize";
import pg from "pg";

const EXTERNAL_DATABASE_URL = 'postgresql://as:HMWzLvTKs3MSlpTFE41PZ2jPGRD3RzIG@dpg-d4tmaaumcj7s7382h8sg-a.oregon-postgres.render.com/a_t0t4';

const postgres = new Sequelize(EXTERNAL_DATABASE_URL, {
    dialect: 'postgres',
    dialectModule: pg,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    }
});

export default postgres;