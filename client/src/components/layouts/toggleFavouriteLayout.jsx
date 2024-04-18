import HeaderToggle from "../fragments/toggle/headerCart"
import CardToggle from "../fragments/toggle/cardCart"

export default function ToggleFavouriteLayout(props) {
    const { setFavouriteToggle, favouriteToggle, favourite } = props

    return (
        <>
            <div className="w-1/4 h-screen bg-[#f7f7f7]">
                <div className="w-full h-full flex flex-col">
                    <div className="flex justify-between items-center w-full h-12 px-5 border border-b-1 border-gray-300">
                        <HeaderToggle setFavouriteToggle={setFavouriteToggle} title={'YOUR FAVOURITE'} />
                    </div>

                    {
                        favourite?.length === 0 ? (
                            <div className="flex justify-center items-center w-full h-full">
                                <p className="text-sm">THERE IS NOTHING IN YOUR FAVOURITE</p>
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col overflow-y-scroll">
                                {favourite?.map((item) => (
                                    <CardToggle item={item} type={'cardFavourite'} key={item.id} />
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}