import { useDispatch } from "react-redux";
import { fetchProducts } from "../../features/product/asyncAction";
import { Link } from "react-router-dom";



export default function Sidebar() {
    const dispatch = useDispatch();

    const handleOnFilter = (category) => {
        const params = {
            filter: category,
        };
        dispatch(fetchProducts(params));
    }

    return (
        <>
            <div className="flex flex-col w-1/4 mt-10 p-6">
                <p className="text-sm">TERMINAL</p>
                <p className="text-sm mt-2">FILTER</p>
                <div className="mt-5 flex flex-col justify-start items-start ">
                    <Link to={`/products/filter=TSHIRT`} className="text-[12px]">T-shirt</Link>
                    <Link to={`/products/filter=HAT`} className="text-[12px]">Hat</Link>
                    <button className="text-[12px] text-gray-400">Jeans</button>
                    <p className="text-[12px] text-gray-400">Jacket</p>
                    <p className="text-[12px] text-gray-400">Outer</p>
                    <p className="text-[12px] text-gray-400">Accessoris</p>
                    <p className="text-[12px] text-gray-400">Sweater</p>
                    <p className="text-[12px] text-gray-400">Tops</p>
                    <p className="text-[12px] text-gray-400">Shoes</p>
                    <p className="text-[12px] text-gray-400">Vest</p>
                    <p className="text-[12px] text-gray-400">Underwear</p>
                    <p className="text-[12px] text-gray-400">Coat</p>
                    <Link to={'/products'}><button onClick={() => handleOnFilter('')} className="text-[12px] mt-2">View All</button></Link>
                </div>

                {/* <p className="text-sm mt-10">PRICE</p>
                <div className="mt-5">
                    <Link to={'/products/sortLowPrice=price'}><button onClick={() => handleOnFilter('sortLowPrice')} className="text-[12px]">Lowest Price</button></Link>
                    <Link to={'/products/sortLowPrice=price'}><button onClick={() => handleOnFilter('sortHighPrice')} className="text-[12px]">Highest Price</button></Link>
                </div> */}
            </div>
        </>
    )
}