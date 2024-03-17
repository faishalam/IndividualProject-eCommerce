export default function Sidebar() {
    return (
        <>
            <div className="flex flex-col w-1/4 mt-10 p-6">
                <p className="text-sm">FILTER</p>
                <p className="text-sm">CATEGORIES</p>
                <div className="mt-5">
                    <p className="text-[12px]">T-shirt</p>
                    <p className="text-[12px]">Hat</p>
                    <p className="text-[12px] text-gray-400">Jeans</p>
                    <p className="text-[12px] text-gray-400">Jacket</p>
                    <p className="text-[12px] text-gray-400">Outer</p>
                    <p className="text-[12px] text-gray-400">Accessoris</p>
                    <p className="text-[12px] text-gray-400">Sweater</p>
                    <p className="text-[12px] text-gray-400">Tops</p>
                    <p className="text-[12px] text-gray-400">Shoes</p>
                    <p className="text-[12px] text-gray-400">Vest</p>
                    <p className="text-[12px] text-gray-400">Underwear</p>
                    <p className="text-[12px] text-gray-400">Coat</p>
                </div>

                <p className="text-sm mt-10">PRICE</p>
                <div className="mt-5">
                    <p className="text-[12px]">Lowest Price</p>
                    <p className="text-[12px]">Higher Price</p>
                </div>
            </div>
        </>
    )
}