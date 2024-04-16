import { useDispatch, useSelector } from "react-redux";
import ProductDetailLayout from "../layouts/productDetailLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchStockById } from "../../features/stock/asyncAction";
import { getProductById } from "../../features/product/asyncAction";
import { addToFavourite } from "../../features/favourite/asyncAction";
import { addToCart } from "../../features/cart/asyncAction";

export default function ProductDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const productById = useSelector((state) => state.product.productById)

    const getDataById = async () => {
        try {
            dispatch(getProductById(id));
            dispatch(fetchStockById(id))
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        getDataById()
    }, [])


    return (
        <>
            <div className="bg-white"> 
                <ProductDetailLayout id={id} isLoading={isLoading} productById={productById} />
            </div>
        </>
    )
}