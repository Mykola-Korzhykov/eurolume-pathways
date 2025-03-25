import { FC } from 'react'

import styles from './Home.module.scss'
import Offer from './Offer/Offer'
import About from './About/About'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import Stages from './Stages/Stages'

const Home: FC = () => {
    return (
        <>
            <Offer />
            <About />
            <Services />
            <Projects />
            <Stages />
        </>
    )
}

export default Home