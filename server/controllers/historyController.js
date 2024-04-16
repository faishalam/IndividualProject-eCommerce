const { History, Cart, Product } = require("../models")


class HistoryController {
    static async getAllHistory(req, res) {
        try {
            const response = await Cart.findAll({
                where : {
                    userId : req.user.id,
                    payment : true
                },
                include : {
                    model : Product
                },
                order: [
                    ['createdAt', 'DESC'] 
                ]
            })

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

module.exports = HistoryController