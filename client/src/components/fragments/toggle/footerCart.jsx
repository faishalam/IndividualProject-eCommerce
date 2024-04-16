import { useDispatch } from "react-redux";
import ButtonElement from "../../elements/buttonElement";
import { updateCart } from "../../../features/cart/asyncAction";

export default function FooterToggle(props) {
    const dispatch = useDispatch()
    const { price, id } = props

    const onCheckout = () => {
        dispatch(updateCart(id))
    }

    return (
        <>
            <div className="w-3/4 flex justify-between mb-5">
                <p className="text-sm">TOTAL</p>
                <p className="text-sm">RP. {price?.toLocaleString('id-ID')}</p>
            </div>

            <ButtonElement handleClick={onCheckout} classname="w-3/4 h-7 bg-black rounded-2xl">
                <p className="text-sm text-white">CHECKOUT</p>
            </ButtonElement>
        </>
    )
}