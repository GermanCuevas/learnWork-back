const Sequelize = require("sequelize");

const db = new Sequelize("learn-work-db", null, null, {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});

module.exports = db;