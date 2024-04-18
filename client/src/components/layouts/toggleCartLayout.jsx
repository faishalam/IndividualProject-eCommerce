import HeaderToggle from "../fragments/toggle/HeaderCart"
import CardToggle from "../fragments/toggle/CardCart"
import FooterToggle from "../fragments/toggle/FooterCart"
import { useState } from "react"
import ButtonElement from "../elements/ButtonElement"

export default function ToggleCartLayout(props) {
    const { setCartToggle, cartToggle, cart, history } = props
    const [toggleHistory, setToggleHistory] = useState(false)

    const price = Array.isArray(cart) && cart?.reduce((total, item) => {
        return total + item.Product.price * item.jumlah
    }, 0)

    const handleClickHistory = () => {
        setToggleHistory(true)
    }

    const handleClickCart = () => {
        setToggleHistory(!cartToggle)
    }

    const handleOnBack = () => {
        setCartToggle && setCartToggle(false)
    }


    return (
        <>
            <div className={`w-1/4 h-screen bg-[#f7f7f7] `}>
                <div className="w-full h-full flex flex-col">
                    <div className="flex justify-between items-center w-full h-12 px-5 border border-b-1 border-gray-300">
                        <ButtonElement handleClick={handleClickCart} classname="text-sm font-normal transition-transform duration-300 transform hover:translate-x-2 relative">CART</ButtonElement>
                        <ButtonElement handleClick={handleClickHistory} classname="text-sm font-normal transition-transform duration-300 transform hover:translate-x-2 relative">HISTORY</ButtonElement>
                        <ButtonElement handleClick={handleOnBack} classname="text-sm font-normal transition-transform duration-300 transform hover:translate-x-2 relative">BACK</ButtonElement>
                    </div>

                    {!toggleHistory && (
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
                                <FooterToggle price={price} id={Array.isArray(cart) && cart?.map((item) => item?.Product?.id)} />
                            </div>
                        </>
                    )}

                    {toggleHistory && (
                        <>
                            {history?.length === 0 ? (
                                <div className="flex justify-center items-center w-full h-full">
                                    <p className="text-sm">THERE IS NOTHING IN YOUR HISTORY</p>
                                </div>
                            ) : (
                                <div className="flex-grow flex flex-col overflow-y-scroll">
                                    {history?.map((item) => (
                                        <CardToggle item={item} type={'historyCard'} key={item?.id} />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div >
        </>
    )
}
