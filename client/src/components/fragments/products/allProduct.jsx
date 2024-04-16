import { useParams } from "react-router-dom";
import CardProduct from "../cardProduct";

export default function AllProduct(props) {
    const { product } = props

    return (
        <>
            <div className="flex flex-col">
                <p className="p-2 text-sm">SHOP ALL</p>
                <div className="w-full h-full flex flex-wrap ">
                    <CardProduct product={product} type={'allProduct'} oneProductCount={false} />
                </div>
            </div>
        </>
    )
}