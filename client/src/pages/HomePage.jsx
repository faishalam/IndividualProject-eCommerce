import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/asyncAction";
import { useEffect } from "react";
import HomeLayout from "../components/layouts/HomeLayout";

export default function HomePage() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product.product);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchProducts())
            } catch (error) {
                console.log(error)
            }
            
        }

        fetchData()
    }, [dispatch])

    return (
        <>  
            <div className="bg-white">
                <HomeLayout product={product} />
            </div>
        </>
    )
}
