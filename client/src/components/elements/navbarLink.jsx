export default function NavbarLink(props) {
    const {text, classname} = props
    return (
        <>
            <p className={classname}>{text}</p>
        </>
    )
}