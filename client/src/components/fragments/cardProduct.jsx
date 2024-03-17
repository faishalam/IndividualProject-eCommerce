import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/asyncAction";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function CardProduct(props) {
    const { width, padding, mb, hotItems } = props
    const location = useLocation()

    const dispatch = useDispatch()
    const product = useSelector((state) => state.product.product);

    const [productCount, setProductCount] = useState(product.length);

    useEffect(() => {
        if (location.pathname === '/products') {
            setProductCount(product.length);
        } else if (location.pathname === '/') {
            setProductCount(6);
        }
    }, [location.pathname, product]);



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
            {
                hotItems ? (
                    product.slice(0, 1).map((item) => (
                        <div className={`w-${width} p-${padding} mb-${mb}`} key={item.id}>
                            <img src={item.thumbnail} />
                            <div className="flex flex-col justify-center">
                                <div className="mt-2">
                                    <p className="text-xs font-semibold">{item.name}</p>
                                    <p className="text-xs">{item.category}</p>
                                    <p className="text-xs">Rp {item.price.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    product.slice(0, productCount).map((item) => (
                        <div className={`w-${width} p-${padding} mb-${mb}`} key={item.id}>
                            <img src={item.thumbnail} />
                            <div className="flex flex-col justify-center">
                                <div className="mt-2">
                                    <p className="text-xs font-semibold">{item.name}</p>
                                    <p className="text-xs">{item.category}</p>
                                    <p className="text-xs">Rp {item.price.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }



        </>
    )
}