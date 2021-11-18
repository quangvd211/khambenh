module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "db_chestimg",
  dialect: "mysql",
  timezone: '+07:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};