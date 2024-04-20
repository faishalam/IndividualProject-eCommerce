import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductById } from "../features/product/asyncAction"
import { fetchStockById } from "../features/stock/asyncAction"
import ProductDetailLayout from "../components/layouts/ProductDetailLayout"

export default function ProductDetailPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const stockById = useSelector((state) => state.stock.stockById)
    const productById = useSelector((state) => state.product.productById)

    useEffect(() => {
        const getDataById = async () => {
            try {
                await dispatch(getProductById(id));
                await dispatch(fetchStockById(id))
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        };
        getDataById()
    }, [dispatch])


    return (
        <>
            <div className="bg-white">
                <ProductDetailLayout id={id} isLoading={isLoading} productById={productById} stockById={stockById} />
            </div>
        </>
    )
}