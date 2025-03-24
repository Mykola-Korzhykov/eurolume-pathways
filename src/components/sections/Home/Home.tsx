import { FC } from 'react'

import styles from './Home.module.scss'
import Offer from './Offer/Offer'
import About from './About/About'
import Services from './Services/Services'

const Home: FC = () => {
    return (
        <>
            <Offer />
            <About />
            <Services />
        </>
    )
}

export default Home