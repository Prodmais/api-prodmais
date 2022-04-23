require('dotenv').config();
let config = null;

if (process.env.ENVIRONMENT === "production") {
    config = {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_DATABASE,
        host: process.env.PROD_DB_HOST,
        dialect: process.env.PROD_DB_DIALECT,
        dialectOptions: {
            useUTC: false,
        },
        define: {
            timestamps: true,
        },
    }
} else {
    config = {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_DATABASE,
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        dialect: process.env.DEV_DB_DIALECT,
        dialectOptions: {
            useUTC: false,
        },
        define: {
            timestamps: true,
        },
    }
}

module.exports = config;