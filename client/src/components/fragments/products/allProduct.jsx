import CardProduct from "../cardProduct";

export default function AllProduct() {
    return (
        <>
            <div className="flex flex-col">
                <p className="p-2 text-sm">SHOP ALL</p>
                <div className="flex flex-wrap ">
                    <CardProduct width="1/3" padding={'2'} mb={'10'} oneProductCount={false} />
                </div>
            </div>
        </>
    )
}