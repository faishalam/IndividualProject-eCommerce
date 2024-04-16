import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CardProduct(props) {
    const { product, hotItems, type } = props
    const location = useLocation()
    const [productCount, setProductCount] = useState(product?.length);

    useEffect(() => {
        if (location.pathname === '/') {
            setProductCount(6);
        } else {
            setProductCount(product?.length);
        }
    }, [location.pathname, product]);

    const renderProductCard = (item, width, imgWidth) => (
        <Link to={`/product-detail/${item.id}`} className={`mb-8 p-2 ${width} `} key={item.id}>
            <img src={item.thumbnail} alt={item.name} className={`w-full ${imgWidth} object-cover`} />
            <div className="flex flex-col justify-center">
                <div className="mt-2">
                    <p className="text-xs font-semibold">{item.name}</p>
                    <p className="text-xs">{item.category}</p>
                    <p className="text-xs">Rp {item.price.toLocaleString('id-ID')}</p>
                </div>
            </div>
        </Link>
    );

    const renderProducts = () => {
        switch (type) {
            case 'allProduct':
                return product?.slice(0, productCount).map((item) => renderProductCard(item, 'w-1/3', 'h-[350px]'));
            case 'hotItems':
                return renderProductCard(hotItems, '', '');
            case 'homeProduct':
                return product?.slice(0, productCount).map((item) => renderProductCard(item, 'w-1/6', ''));
            default:
                return null;
        }
    };

    console.log(type)

    return (
        <div className="w-full flex flex-wrap">
            {renderProducts()}
        </div>
    )
}