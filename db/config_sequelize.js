const Sequelize = require("sequelize");
const config = {
  database: "Income_Expense",
  username: "root",
  password: "password",
  host: "localhost",
  dialect: "mysql",
};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    host: config.hostW,
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
