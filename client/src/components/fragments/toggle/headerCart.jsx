import ButtonElement from "../../elements/buttonElement";

export default function HeaderToggle(props) {
    const { setCartToggle, setFavouriteToggle, title } = props

    const onClickBack = () => {
        setCartToggle && setCartToggle(false)
        setFavouriteToggle && setFavouriteToggle(false)
    }

    return (
        <>
            <p className="text-sm">{title}</p>
            <>
                <ButtonElement handleClick={onClickBack}>
                    <p className="text-sm">BACK</p>
                </ButtonElement>
            </>

        </>
    )
}