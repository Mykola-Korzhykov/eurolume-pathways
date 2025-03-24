import { FC } from 'react'

import styles from './Offer.module.scss'

const Offer: FC = () => {
    return (
        <section className={styles.wrapper} id="offer">
            <div className="container">
                <p className={styles.slogan}>Illuminate Your Path with Elegance & Innovation</p>
                <h1 className={styles.title}><span>LED Strips:</span> The Future of Stylish Outdoor Lighting</h1>
                <p className={styles.description}>Transform your driveway, walkway, or backyard into a masterpiece of light. Elevate your home's entrance with a sleek, modern, and smart LED pathway that blends beauty and functionality</p>
                <button type="button" className={`${styles.button} themeButton`}>Free Estimate</button>
            </div>
        </section>
    )
}

export default Offer