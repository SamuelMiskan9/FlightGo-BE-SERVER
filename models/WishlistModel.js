import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import product from "./ProductModel.js";
const { DataTypes } = Sequelize;

const wishlist = db.define('wishlist',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    productId:{
        type: DataTypes.INTEGER,
    },
    userId:{
        type: DataTypes.INTEGER,
    }
},{
    freezeTableName:true
});
Users.hasMany(wishlist);
wishlist.belongsTo(Users, {foreignKey: 'userId'});

product.hasMany(wishlist);
wishlist.belongsTo(product, {foreignKey: 'productId'});

export default wishlist;