import CardProduct from "../fragments/cardProduct";
import Navbar from "../fragments/navbar";
import AllProduct from "../fragments/products/allProduct";
import HotItemProduct from "../fragments/products/hotItemProduct";
import Sidebar from "../fragments/sidebar";

const hotItems = {
    "name": "ENLITE DOUBLE TSHIRT BLACK",
    "category": "TSHIRT",
    "description": "Warna yang terlihat pada gambar mungkin tidak 100% sama dengan produk yang sebenarnya,.",
    "excerpt": "Cotton 16’s (100% Cotton )",
    "price": 189000,
    "thumbnail": "https://spaces.ilfen.co/assets/image/produk/black_17.jpg",
    "images": [
        "https://spaces.ilfen.co/assets/image/produk/black_17.jpg",
        "https://spaces.ilfen.co/assets/image/produk/black_26.jpg",
        "https://spaces.ilfen.co/assets/image/produk/black_36.jpg",
        "https://spaces.ilfen.co/assets/image/produk/black_46.jpg",
        "https://spaces.ilfen.co/assets/image/produk/black_56.jpg",
        "https://spaces.ilfen.co/assets/image/produk/black_62.jpg"
    ],
    "createdAt": "2023-12-15T15:32:06.350Z",
    "updatedAt": "2024-03-18T14:47:12.101Z"
}

export default function AllProductsLayout() {
    return (
        <>
            <div className="w-full h-12 absolute top-0 bottom-0 none">
                <Navbar isNavbarVisible={true} />
            </div>

            <div className="flex bg-white mt-1 w-full h-screen fixed">
                <div className="w-1/2 h-screen bg-white">
                    <div className="flex">
                        <Sidebar />

                        <HotItemProduct />
                    </div>
                </div>

                <div className="w-1/2 h-screen mb-20 mt-10 p-4 overflow-y-scroll">
                    <AllProduct />
                </div>
            </div>
        </>
    )
}
