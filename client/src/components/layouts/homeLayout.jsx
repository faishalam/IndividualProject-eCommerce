import { useDispatch, useSelector } from "react-redux";
import HeaderHome from "../fragments/headerHome";
import MainHome from "../fragments/mainHome";
import { fetchProducts } from "../../features/asyncAction";
import { useEffect } from "react";

export default function HomeLayout() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product.product);

    const fetchData = async () => {
        try {
            await dispatch(fetchProducts());
        } catch (error) {
            console.log(error);
        } finally {

        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className="flex w-full h-screen">
                <HeaderHome />
            </div >

            <div>
                <MainHome />
            </div>


        </>
    );
}
