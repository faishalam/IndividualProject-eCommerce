import { useSelector } from "react-redux";
import ButtonElement from "../../elements/ButtonElement";
import ModalInput from "../../elements/ModalInput";
import { useEffect, useState } from "react";

export default function MainProductDetail(props) {
    const { id, productById, onHandleChange, seletedSize, availableStock, error, form, onAddToCart, onAddToFavourite, setForm, setSelectedSize, setAvailableStock } = props
    const user = useSelector((state) => state.user.user)

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const token = localStorage.getItem('access_token')

    const buttonItemsButtom = [
        {
            title: 'ADD TO CART',
            classname: 'w-3/4 h-7 border border-black rounded-2xl text-black text-sm mt-20 transition-colors ease-in-out duration-200 hover:bg-gray-200 active:bg-gray-300',
            action: () => {
                isLoggedIn ? (
                    onAddToCart(),
                    setSelectedSize(''),
                    setAvailableStock(null),
                    setForm({
                        size: '',
                        jumlah: 0
                    })
                ) : (
                    document.getElementById('modalAuth').showModal()
                )
            }
        },
        {
            title: 'ADD TO FAVOURITE',
            classname: 'w-3/4 h-7 bg-black rounded-2xl text-white text-sm mt-2 transition-colors duration-200 ease-in-out hover:bg-gray-700 active:bg-gray-800',
            action: () => {
                isLoggedIn ? (
                    onAddToFavourite()
                ) : (
                    document.getElementById('modalAuth').showModal()
                )
            }
        }
    ]

    useEffect(() => {
        setIsLoggedIn(token && token?.length ? true : false)
    }, [user])


    return (
        <>
            <div className="max-w-lg mx-8">
                {
                    error && (
                        <p className="text-sm italic text-red-500">*{error}</p>
                    )
                }
                <p className="text-sm">{productById.category}</p>
                <p className="text-3xl">{productById.name}</p>
                <p className="test-sm">RP. {productById && productById.price && productById.price.toLocaleString('id-ID')}</p>

                <div className="w-full h-1/6 mt-2 flex gap-2 mb-2">
                    {productById.size?.map((item, i) => (
                        <ButtonElement
                            handleClick={() => onHandleChange(item)}
                            value={item}
                            classname={`flex w-1/6 h-full gap-5 border border-gray-300 justify-center items-center rounded hover:bg-black hover:text-white transition-colors ease-in-out duration-200 ${seletedSize === item ? 'bg-black text-white' : ''}`}
                            key={i}
                        >
                            {item}
                        </ButtonElement>
                    ))}

                </div >

                {availableStock ? (
                    <p className="text-[#b3b0b0] text-[12px] italic" > AVAILABLE STOCK: {availableStock}</p>
                ) : (
                    <p className="text-sm italic text-[#f7f7f7]">OUT OF STOCK</p>
                )}

                <ModalInput
                    label={"JUMLAH"}
                    type={"number"}
                    name={"jumlah"}
                    id={"jumlah"}
                    placeholder={"JUMLAH"}
                    value={form.jumlah}
                    onChange={(e) => {
                        const newValue = parseInt(e.target.value);
                        if (newValue >= 0 && newValue <= availableStock) {
                            setForm({ ...form, [e.target.name]: newValue });
                        }
                    }}
                />

                <p className="text-sm mt-6">{productById.description}</p>
            </div >
            {
                buttonItemsButtom.map((button, i) => (
                    <ButtonElement
                        key={i}
                        handleClick={button.action}
                        classname={button.classname}
                    >
                        {button.title}
                    </ButtonElement>
                ))
            }
        </>
    )
}