import { useDispatch, useSelector } from "react-redux";
import HeaderHome from "../fragments/home/headerHome";
import Navbar from "../fragments/navbar";
import HomeLayout from "../layouts/homeLayout";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../features/product/asyncAction";

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
