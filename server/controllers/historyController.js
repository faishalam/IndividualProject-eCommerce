const { History, Cart } = require("../models")


class HistoryController {
    static async getAllHistory(req, res) {
        try {
            const response = await Cart.findAll({
                where : {
                    userId : req.user.id,
                    payment : true
                }
            })

            if(response.length === 0) return res.status(404).json({ message : "No transaction yet" })

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

module.exports = HistoryController