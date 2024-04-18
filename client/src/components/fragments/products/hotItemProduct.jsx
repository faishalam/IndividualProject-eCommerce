import CardProduct from "../CardProduct";

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

export default function HotItemProduct(props) {
    const {hotItems} = props

    return (
        <>
            <div className="w-3/4 h-screen mb-20 mt-10 p-4 bg-[#f7f7f7] overflow-y-scroll">
                <div className="flex flex-col">
                    <p className="p-2 text-sm">HOT ITEMS</p>
                    <CardProduct hotItems={hotItems} type={'hotItems'} />
                </div>
            </div>
        </>
    )
}