const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("login1", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = sequelize

module.exports = db