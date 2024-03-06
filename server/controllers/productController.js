const { Product } = require("../models")
const { Op } = require("sequelize");

class ProductController {
    static async getAllProduct(req, res) {
        try {
            const { search, filter, sortHighPrice, sortLowPrice, page } = req.query;
            let response;

            if (search) {
                response = await Product.findAll({
                    where: {
                        name: {
                            [Op.iLike]: `%${search}%`
                        }
                    },
                })
                return res.status(200).json(response)
            }

            if (filter) {
                response = await Product.findAll({
                    where: {
                        category: {
                            [Op.like]: `%${filter}%`
                        }
                    },
                })
                return res.status(200).json(response)
            }

            if (sortHighPrice) {
                response = await Product.findAll({
                    order: [
                        ['price', 'DESC'] 
                    ]
                });
                return res.status(200).json(response);
            }

            if(sortLowPrice) {
                response = await Product.findAll({
                    order: [
                        ['price', 'ASC'] 
                    ]
                });
                return res.status(200).json(response);
            }

            if (page) {
                response = await Product.findAll({
                    offset: (page - 1) * 10,
                    limit: 10
                })
                return res.status(200).json(response)
            }
            
            response = await Product.findAll({
                attribute: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async getProductById(req, res) {
        try {
            const { id } = req.params

            const response = await Product.findOne({
                where: { id },
                attribute: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })
            if (!response) return res.status(404).json({ message: "Product not found" })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

}

module.exports = ProductController