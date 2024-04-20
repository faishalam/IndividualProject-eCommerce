import { useDispatch, useSelector } from "react-redux";
import AllProductsLayout from "../components/layouts/AllProductsLayout";
import { fetchProducts } from "../features/product/asyncAction";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function AllProductsPage() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product.product);
    const params = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params) {
                    dispatch(fetchProducts(params));
                } else {
                    dispatch(fetchProducts());
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch, params]);


    return (
        <>
            <div className="bg-white">
                <AllProductsLayout product={product}/>
            </div>
        </>
    )
}