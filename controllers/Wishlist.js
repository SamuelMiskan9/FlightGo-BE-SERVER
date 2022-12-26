import product from "../models/ProductModel.js";
import wishlist from "../models/WishlistModel.js";

export const createWishlist = async(req, res) => {
    try {
        if(req.user.role == "admin") {
            return res.status(400).json({
                success: false,
                message: "Kamu adalah admin tidak bisa membuat wishlist",
            });
        }else{
            const Wishlist = await wishlist.create({
                productId: req.params.id,
                userId: req.user.userId,
            })
            res.status(201).send({
                status: 201,
                message: 'berhasil membuat wishlist',
                data: Wishlist
            })
        }
    } catch (error) {
        res.status(402).json({
            status: "FAIL",
            message: error.message,
        });
    }
}
export const listWishlist = async (req, res) => {
    try {
        // const id = req.user.userId
        const sourceWishlist = await wishlist.findAll({
            where: {
                userId: req.user.userId,
            },
            include: product
        })
        res.status(201).send({
            status: 201,
            data: sourceWishlist
        })
    } catch (error) {
        res.status(400).send({
            status: "FAIL",
            message: error.message,
        })
    }
}
export const deleteWishlist = async(req, res) => {
    const { id } = req.params;
    try {
        await wishlist.destroy({
            where: { id },
        });
        return res.status(200).json({
            success: true,
            message: "Delete wishlist Successfully",
        });
    } catch (error) {
        console.log(error);
    }
}