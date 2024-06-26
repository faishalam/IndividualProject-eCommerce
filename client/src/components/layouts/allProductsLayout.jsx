import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";
import AllProduct from "../fragments/products/AllProduct";
import HotItemProduct from "../fragments/products/HotItemProduct";
import Sidebar from "../fragments/Sidebar";

export default function AllProductsLayout(props) {
    const { product } = props
    const hotItems = product?.slice(0, 1)


    return (
        <>
            <div className="w-full h-12 absolute top-0 bottom-0 none">
                <Navbar isNavbarVisible={true} />
            </div>

            <div className="flex bg-white mt-1 w-full h-screen fixed">
                <div className="w-1/2 h-screen bg-white">
                    <div className="flex">
                        <Sidebar />

                        {hotItems.map((hotItems) => (
                            <HotItemProduct hotItems={hotItems} key={hotItems.id} />
                        ))}
                    </div>
                </div>

                <div className="w-1/2 h-screen mb-20 mt-10 p-4 overflow-y-scroll">
                    <AllProduct product={product} />
                </div>
            </div>

                        

        </>
    )
}
