import Navbar from "../fragments/navbar";
import Footer from "../fragments/footer";
import ButtonElement from "../elements/buttonElement";
import { addToFavourite } from "../../features/favourite/asyncAction";
import { addToCart } from "../../features/cart/asyncAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalInput from "../elements/modalInput";
import MainProductDetail from "../fragments/productDetail/mainProductDetail";

export default function ProductDetailLayout(props) {
    const dispatch = useDispatch()
    const { id, isLoading, productById, stockById } = props
    const [availableStock, setAvailableStock] = useState(0)
    const [form, setForm] = useState({
        "jumlah": 0,
        "size": ''
    })
    const [error, setError] = useState('')
    const [seletedSize, setSelectedSize] = useState(false)

    const onHandleChange = (size) => {
        const checkStock = stockById[size]
        setAvailableStock(checkStock)

        setForm({
            ...form,
            size
        })

        setSelectedSize(size)
    };

    const onAddToCart = async () => {
        try {
            await dispatch(addToCart(id, form))
            setError('')
        } catch (error) {
            setError(error)
        }
    }

    const onAddToFavourite = async () => {
        try {
            await dispatch(addToFavourite(id))
            setError('')
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }


    return (
        <>
            <div className="w-full h-12 absolute top-0 bottom-0 none">
                <Navbar isNavbarVisible={true} />
            </div>
            {
                isLoading ? (
                    <div className="flex justify-center items-center w-full h-screen">
                        <p>loading..</p>
                    </div>
                ) : (
                    <div className="flex w-full h-screen">

                        <div className="flex w-3/4 overflow-x-auto">
                            {
                                productById.images?.map((item, i) => (
                                    <img src={item} className="w-full h-screen" key={i} />
                                ))
                            }
                        </div>

                        <div className="flex flex-col justify-center items-center w-1/4 bg-[#f7f7f7]">
                            <MainProductDetail
                                id={id}
                                productById={productById}
                                error={error}
                                onHandleChange={onHandleChange}
                                setSelectedSize={setSelectedSize}
                                setAvailableStock={setAvailableStock}
                                seletedSize={seletedSize}
                                availableStock={availableStock}
                                form={form}
                                setForm={setForm}
                                setError={setError}
                                onAddToCart={onAddToCart}
                                onAddToFavourite={onAddToFavourite}
                            />
                        </div >
                    </div >
                )
            }
            <Footer />
        </>
    )
}