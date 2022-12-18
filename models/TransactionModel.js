import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import product from "./ProductModel.js";
const { DataTypes } = Sequelize;

const transaction = db.define('transaction',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    bukti_Pembayaran: DataTypes.STRING,
    checkIn : DataTypes.STRING,
    status : DataTypes.STRING,
    productId:{
        type: DataTypes.INTEGER,
    },
    userId:{
        type: DataTypes.INTEGER,
    },
    userVisa: DataTypes.STRING,
    userPassport: DataTypes.STRING,
    userIzin: DataTypes.STRING,
},{
    freezeTableName:true
});
Users.hasMany(transaction);
transaction.belongsTo(Users, {foreignKey: 'userId'});

product.hasMany(transaction);
transaction.belongsTo(product, {foreignKey: 'productId'});

export default transaction;