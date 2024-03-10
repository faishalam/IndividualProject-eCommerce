export default function NavbarLink(props) {
    console.log(props)
    const {text, classname} = props
    return (
        <>
            <p className={classname}>{text}</p>
        </>
    )
}