const { Favourite, Product } = require("../models")

class FavouriteController {
    static async addFavourite(req, res) {
        try {
            const { id } = req.user
            const productId = req.params.id

            const checkProduct = await Product.findOne({ where: { id: productId } })
            if (!checkProduct) return res.status(404).json({ message: "Product not found" })

            const checkFavourite = await Favourite.findOne({ where: { userId: id, productId: productId } })
            if (checkFavourite) return res.status(404).json({ message: "Product already in favourite" })

            const addFavourite = await Favourite.create({
                userId: id,
                productId: productId
            })

            res.status(201).json(addFavourite)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async getAllFavourite(req, res) {
        try {
            const { id } = req.user
            const response = await Favourite.findAll({
                where: { userId: id },
                include: {
                    model: Product
                }
            })

            if(!response) return res.status(404).json({ message: "Favourite not found" })

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async removeFavourite(req, res) {
        try {
            const {id} = req.user
            const productId = req.params.id

            const checkProduct = await Product.findOne({ where: { id: productId } })
            if (!checkProduct) return res.status(404).json({ message: "Product not found" })

            const checkFavourite = await Favourite.findOne({ where: { userId: id, productId: productId } })
            if (!checkFavourite) return res.status(404).json({ message: "Product not in favourite" })

            await Favourite.destroy({ where: { userId: id, productId: productId } })
            res.status(200).json({message : "Product removed from favourite"})
        } catch (error) {
            res.status(500).json({message : "Internal server error"})
        }
    }
}

module.exports = FavouriteController