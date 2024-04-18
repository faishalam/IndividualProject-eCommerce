import { motion } from "framer-motion"

export default function Motion(props) {
    const { classname, initial, animate, transition } = props
    return (
        <>
            <motion.div
                className={classname}
                initial={initial}
                animate={animate}
                transition={transition}
            >
                {props.children}
            </motion.div>

        </>
    )
}