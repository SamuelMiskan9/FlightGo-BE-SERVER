import { Sequelize } from "sequelize";
const db = new Sequelize('railway', 'root', 'qoX5nqCDnhKPJpdBX2EL', {
    host: "containers-us-west-152.railway.app",
    port: "7427",
    dialect: "mysql"
});
export default db;