import { useDispatch, useSelector } from "react-redux";
import ButtonElement from "../../elements/ButtonElement";
import { fetchCart, updateCart } from "../../../features/cart/asyncAction";
import { heroService } from "../../../services/hero";
import { useEffect } from "react";
import ModalAddInformationLayout from "../../layouts/ModalAddInformationLayout";
import { getProductById } from "../../../features/product/asyncAction";
import { useParams } from "react-router-dom";
import { fetchStockById } from "../../../features/stock/asyncAction";

export default function FooterToggle(props) {
    const dispatch = useDispatch()
    const { price, id } = props

    const onModalInformation = () => {
        document.getElementById('modalAddInformation').showModal()
    }

    return (
        <>
            <div className="w-3/4 flex justify-between mb-5">
                <p className="text-sm">TOTAL</p>
                <p className="text-sm">RP. {price?.toLocaleString('id-ID')}</p>
            </div>

            <ButtonElement handleClick={onModalInformation} classname="w-3/4 h-7 bg-black rounded-2xl ransition-colors duration-200 ease-in-out hover:bg-gray-700 active:bg-gray-800">
                <p className="text-sm text-white">CHECKOUT</p>
            </ButtonElement>

            <ModalAddInformationLayout />
        </>
    )
}