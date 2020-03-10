const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("login1", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool
})