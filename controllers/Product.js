import product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getproduct = async(req, res) => {
    try {
        const response = await product.findAll({
            attributes:['id','jenis_penerbangan','bentuk_penerbangan','kota_asal','bandara_asal','kota_tujuan','bandara_tujuan','depature_date','depature_time','kode_negara_asal','kode_negara_tujuan', 'price','kota_asal_','bandara_asal_','kota_tujuan_','bandara_tujuan_','depature_date_','depature_time_','kode_negara_asal_','kode_negara_tujuan_','price_','total_price','image_product','image_product_id','desctiption','createdAt','updatedAt']
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getproductById = async(req, res) => {
    const { id } = req.params;
    const Product = await product.findOne({
        where: { id: id },
    });
    if (!Product){
        return res.status(404).json({
            success: true,
            message: "Tidak ada tiket",
        });
    }
    res.json(Product);
}

export const createproduct = async(req, res) => {
    if(req.user.role !== "admin") {
        return res.status(400).json({
            success: false,
            message: "Kamu gak bisa nambah tiket dengan role member",
        });
    }
    if(req.files === null) return res.status(400).json({message: "No File Uploaded"});
    const { jenis_penerbangan,bentuk_penerbangan,kota_asal,bandara_asal,kota_tujuan,bandara_tujuan,depature_date,depature_time,kode_negara_asal, kode_negara_tujuan,price,kota_asal_,bandara_asal_,kota_tujuan_,bandara_tujuan_,depature_date_,depature_time_,kode_negara_asal_,kode_negara_tujuan_,price_,total_price,desctiption} = req.body;
    const file = req.files.image_product;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const rand =Math.random()*10+1+"wr" 
    const fileName = file.md5 +rand+ ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({message: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({message: "Image must be less than 5 MB"});
    
    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({message: err.message});
        try {
            await product.create({jenis_penerbangan: jenis_penerbangan,bentuk_penerbangan: bentuk_penerbangan,kota_asal: kota_asal,bandara_asal: bandara_asal,kota_tujuan: kota_tujuan,bandara_tujuan: bandara_tujuan,depature_date: depature_date, depature_time: depature_time,kode_negara_asal: kode_negara_asal,kode_negara_tujuan:kode_negara_tujuan, price: price,kota_asal_: kota_asal_,bandara_asal_: bandara_asal_,kota_tujuan_: kota_tujuan_,bandara_tujuan_: bandara_tujuan_,depature_date_: depature_date_,depature_time_: depature_time_,kode_negara_asal_: kode_negara_asal_,kode_negara_tujuan_: kode_negara_tujuan_,price_: price_,total_price: total_price,image_product: url,image_product_id: fileName,desctiption: desctiption});
            return res.status(200).json({
                success: true,
                message: "tiket Berhasil ditambahkan",
            });
        } catch (error) {
            console.log(error);
        }
    })
}

export const updateproduct = async(req, res) => {
    if(req.files === null) return res.status(400).json({message: "No File Uploaded"});
    const { id } = req.params;
    const Product = await product.findOne({
        where: { id: id },
    });
    let fileName = "";
    if (!Product){
        return res.status(404).json({
            success: true,
            message: "Tidak ada tiket",
        });
    }
    const { jenis_penerbangan,bentuk_penerbangan,kota_asal,bandara_asal,kota_tujuan,bandara_tujuan,depature_date,depature_time,kode_negara_asal, kode_negara_tujuan,price,kota_asal_,bandara_asal_,kota_tujuan_,bandara_tujuan_,depature_date_,depature_time_,kode_negara_asal_,kode_negara_tujuan_,price_,total_price,desctiption} = req.body;
    if(req.user.role !== "admin" ) {
        return res.status(400).json({
            success: false,
            message: "Kamu gak bisa update data product dengan role member",
        });
    }
    if(req.files === null){
        fileName = product.image_product;
    }else {
        const file = req.files.image_product;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        const rand =Math.random()*10+1+"wr" 
        fileName = file.md5 +rand+ ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({message: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({message: "Image must be less than 5 MB"});

        // const filepath = `./public/images/${product.image_product_id}`;
        // fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({message: err.message});
        });
    }
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    try {
        await product.update({ jenis_penerbangan: jenis_penerbangan,bentuk_penerbangan: bentuk_penerbangan,kota_asal: kota_asal,bandara_asal: bandara_asal,kota_tujuan: kota_tujuan,bandara_tujuan: bandara_tujuan,depature_date: depature_date, depature_time: depature_time,kode_negara_asal: kode_negara_asal, kode_negara_tujuan: kode_negara_tujuan,price: price,kota_asal_: kota_asal_,bandara_asal_: bandara_asal_,kota_tujuan_: kota_tujuan_,bandara_tujuan_: bandara_tujuan_,depature_date_: depature_date_,depature_time_: depature_time_,kode_negara_asal_: kode_negara_asal_,kode_negara_tujuan_: kode_negara_tujuan_,price_:price_,total_price: total_price,image_product: url,image_product_id: fileName,desctiption: desctiption},
        {
            where: { id: id},
        });
        return res.status(200).json({
            success: true,
            message: "product Berhasil diupdate",
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteproduct = async(req, res) => {
    const { id } = req.params;
    const dataBeforeDelete = await product.findOne({
    where: { id: id },
    });
    if (!dataBeforeDelete){
        return res.status(404).json({
            success: true,
            message: "Tidak ada tiket",
        });
    }
    if(req.user.role !== "admin" ) {
        return res.status(400).json({
            success: false,
            message: "Kamu gak bisa mengakses ini",
        });
    }
    const parsedDataProfile = JSON.parse(JSON.stringify(dataBeforeDelete));

    if (!parsedDataProfile) {
        return res.status(400).json({
            success: false,
            message: "product doesn't exist or has been deleted!",
        });
    }
    try {
        // const filepath = `./public/images/${product.image_product_id}`; 
        // fs.unlinkSync(filepath);
        await product.destroy({
            where: { id },
        });
        return res.status(200).json({
            success: true,
            message: "Delete Data Successfully",
        });
    } catch (error) {
        console.log(error);
    }
}