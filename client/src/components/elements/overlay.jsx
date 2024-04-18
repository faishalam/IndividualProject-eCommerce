export default function Overlay(props) {
    const {opacity, width} = props

    return ( 
        <>
            <div className={`w-full' h-screen absolute bg-black opacity-${opacity}`}></div>
        </>
    )
}