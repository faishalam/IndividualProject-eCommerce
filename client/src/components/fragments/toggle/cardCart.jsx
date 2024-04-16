import { Link } from "react-router-dom";
import ButtonElement from "../../elements/buttonElement";
import { useDispatch } from "react-redux";
import { removeFavourite } from "../../../features/favourite/asyncAction";
import { addToCart, removeCart } from "../../../features/cart/asyncAction";

export default function CardToggle(props) {
    const { item, type } = props
    const dispatch = useDispatch()

    const onRemoveFavourite = () => {
        dispatch(removeFavourite(item.productId))
    }

    const onAddToCart = () => {
        dispatch(addToCart(item.productId))
    }

    const onRemoveCart = () => {
        dispatch(removeCart(item.productId))
    }

    const Button = () => {
        switch (type) {
            case 'cardFavourite':
                return (
                    <div className="flex w-full gap-2">
                        <ButtonElement handleClick={onRemoveFavourite} classname={'text-sm rounded-lg transition-colors duration-300 hover:text-red-500'}>
                            REMOVE
                        </ButtonElement>
                    </div>
                )
            case 'cardCart':
                return (
                    <div className="flex justify-between items-between w-full gap-2 mt-4">
                        <p className="text-sm text-red-500 h-6 ">{item?.payment === false ? 'UNPAID' : 'PAID'}</p>

                        <ButtonElement handleClick={onRemoveCart} classname={'w-1/2 h-6 text-sm rounded-lg transition-colors duration-300 hover:text-red-500'}>
                            REMOVE
                        </ButtonElement>
                    </div>
                )
            case 'historyCard':
                return (
                    <div className="flex w-full gap-2">
                        <p className="text-sm text-green-500 h-6">{item?.payment === false ? 'UNPAID' : 'PAID'} </p>
                        <p className="text-sm text-[#cac5c5]"><i>{item?.createdAt.split('T')[0]}</i></p>
                    </div>
                )

            default:
                break;
        }
    }

    return (
        <>
            <Link to={`/product-detail/${item?.Product?.id}`}>
                <div className="flex w-full h-full max-h-[150px] justify-center items-center p-2" key={item.id}>
                    <div className="w-1/4">
                        <img src={item?.Product?.thumbnail} className="w-[200px] h-[120px]" alt={item?.Product?.name} />
                    </div>
                    <div className="w-3/4 h-full p-2 flex flex-col justify-between">
                        <div className="flex flex-col w-full">

                            <p className="text-sm">{item?.Product?.name}</p>
                            <p className="text-sm">{item?.Product?.category}</p>
                            <p className="text-sm">RP. {item?.Product?.price.toLocaleString('id-ID')}</p>
                            {
                                type === 'cardCart' && (
                                    <div className="flex w-full gap-2">
                                        <p className="text-sm">({item?.size}) : {item?.jumlah}</p>
                                    </div>
                                )
                            }
                        </div>

                        <Button />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#e9e7e7]"></div>
            </Link >

        </>
    )
}