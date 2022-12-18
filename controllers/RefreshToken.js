import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const phone = user[0].phone;
            const address = user[0].address;
            const image_user = user[0].image_user;
            const visa = user[0].visa;
            const passport = user[0].passport;
            const izin = user[0].izin;
            const accessToken = jwt.sign({userId, name, email, phone, address, image_user, visa, passport,izin}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '1d'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}