import { FC } from 'react'

import styles from './Home.module.scss'
import Offer from './Offer/Offer'

const Home: FC = () => {
    return (
        <section className={styles.wrapper} data-aos="fade-up">
            <div className="container">
                <Offer />
            </div>
        </section>
    )
}

export default Home