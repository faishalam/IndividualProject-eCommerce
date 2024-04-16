import { Typewriter } from 'react-simple-typewriter'


export default function Typing(props) {
    const {classname, words} = props

    return (
        <>
            <span className={classname}>
                <Typewriter
                    words={[words]}
                    typeSpeed={80}
                    delaySpeed={1000}
                />
            </span>
        </>
    )
}
