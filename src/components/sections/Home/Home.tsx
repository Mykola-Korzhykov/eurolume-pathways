import { FC } from 'react'

import styles from './Home.module.scss'
import Offer from './Offer/Offer'
import About from './About/About'

const Home: FC = () => {
    return (
        <>
            <Offer />
            <About />
        </>
    )
}

export default Home