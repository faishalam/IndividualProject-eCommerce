const { ProductStock, Product } = require("../models")

class ProductStockController {
    static async getAllProductStock(req, res) {
        try {
            const response = await ProductStock.findAll({
                include: {
                    model: Product
                }
            })
            console.log(response)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async getStockById(req, res) {
        try {
            const { id } = req.params
            const response = await ProductStock.findOne({
                where: { id },
                include: {
                    model: Product
                }
            })
            if (!response) return res.status(404).json({ message: "Stock not found" })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

module.exports = ProductStockController