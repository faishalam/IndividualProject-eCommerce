export default function ButtomAuthModal(props) {
    const {text, auth} = props
    return (
        <>
            <div>
                <p className="text-xs text-center mt-2">OR</p>
                <p className="text-xs text-center mt-2">{text} </p>
                <p className="text-xs text-center mt-2">{auth}</p>
            </div>
        </>
    )
}