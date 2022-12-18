// import { DataTypes } from "DataTypes";
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
 
const product = db.define('product',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    jenis_penerbangan: DataTypes.STRING,
    bentuk_penerbangan: DataTypes.STRING,
    kota_asal: DataTypes.STRING,
    bandara_asal: DataTypes.STRING,
    kota_tujuan: DataTypes.STRING,
    bandara_tujuan: DataTypes.STRING,
    depature_date: DataTypes.STRING,
    depature_time: DataTypes.STRING,
    kode_negara_asal: DataTypes.STRING,
    kode_negara_tujuan: DataTypes.STRING,
    price: DataTypes.INTEGER,
    kota_asal_: DataTypes.STRING,
    bandara_asal_: DataTypes.STRING,
    kota_tujuan_: DataTypes.STRING,
    bandara_tujuan_: DataTypes.STRING,
    depature_date_: DataTypes.STRING,
    depature_time_: DataTypes.STRING,
    kode_negara_asal_: DataTypes.STRING,
    kode_negara_tujuan_: DataTypes.STRING,
    price_: DataTypes.INTEGER,

    total_price: DataTypes.INTEGER,
    image_product:{
        type: DataTypes.STRING,
        defaultValue: "https://res.cloudinary.com/duwoisvla/image/upload/v1669719046/photo1669719020_jtqxri.jpg"
    },
    image_product_id: DataTypes.STRING,
    desctiption: DataTypes.TEXT,
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
},{
    freezeTableName:true
});

export default product;