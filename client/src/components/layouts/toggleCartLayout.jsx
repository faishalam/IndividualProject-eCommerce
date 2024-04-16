import HeaderToggle from "../fragments/toggle/headerCart"
import CardToggle from "../fragments/toggle/cardCart"
import FooterToggle from "../fragments/toggle/footerCart"
import { useState } from "react"

export default function ToggleCartLayout(props) {
    const { setCartToggle, cartToggle, classname, cart, history } = props
    const [toggleHistory, setToggleHistory] = useState(false)

    const price = cart?.reduce((total, item) => {
        return total + item.Product.price * item.jumlah
    }, 0)

    const handleClickHistory = () => {
        setToggleHistory(true)
    }


    return (
        <>
            <div className={`w-1/4 h-screen bg-[#f7f7f7] `}>
                <div className="w-full h-full flex flex-col">
                    <div className="flex justify-between items-center w-full h-12 px-5 border border-b-1 border-gray-300">
                        <HeaderToggle setCartToggle={setCartToggle} title={'CART'} />
                        <button onClick={handleClickHistory} className="text-sm">HISTORY</button>
                    </div>

                    {
                        toggleHistory ? (
                            <div className="flex-grow flex flex-col items-center overflow-y-scroll">
                                {
                                    history?.length === 0 && (
                                        <div className="flex justify-center w-full h-full">
                                            <p className="text-sm">THERE IS NOTHING IN YOUR HISTORY</p>
                                        </div>
                                    )
                                }

                                {history?.map((item) => (
                                    <CardToggle item={item} type={'historyCard'} key={item.id} />
                                ))}
                            </div>
                        ) : (
                            <>
                                {cart?.length === 0 ? (
                                    <div className="flex justify-center items-center w-full h-full">
                                        <p className="text-sm">THERE IS NOTHING IN YOUR CART</p>
                                    </div>
                                ) : (
                                    <div className="flex-grow flex flex-col overflow-y-scroll">
                                        {cart?.map((item) => (
                                            <CardToggle item={item} type={'cardCart'} key={item?.id} />
                                        ))}
                                    </div>
                                )}

                                < div className="w-full h-32 flex flex-col justify-center items-center border border-t-1 border-gray-300">
                                    <FooterToggle price={price} id={cart?.map((item) => item?.Product?.id)} />

                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}
