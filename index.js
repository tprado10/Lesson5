const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql' | 'sqlite' | 'postgres' | 'mssql',

    pool: {
        max: 5,
        min: 0,
        idle: 1000 
    },

    // SQLite only
    storage: 'path/to/database.sqlite'
});