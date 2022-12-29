import { Sequelize } from "sequelize";
 
const db = new Sequelize('flight_go', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;