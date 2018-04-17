module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        port: 3306,
        user: 'root',
        password: 'cAuth',
        database: 'wxb366c43b3a096ade',
        charset: 'utf8mb4'
    }
})