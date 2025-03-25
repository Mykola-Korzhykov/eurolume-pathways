import { FC } from 'react'

import sendMessage from '@helpers/sendMessage';

import { estimate } from '@helpers/estimate';

import styles from './Offer.module.scss'
import Swal from 'sweetalert2';

const Offer: FC = () => {
    return (
        <section className={styles.wrapper} id="offer">
            <div className="container">
                <p className={styles.slogan} data-aos="zoom-in">Illuminate Your Path with Elegance & Innovation</p>
                <h1 className={styles.title} data-aos="fade-down"><span>LED Strips:</span> The Future of Stylish Outdoor Lighting</h1>
                <p className={styles.description} data-aos="fade-up">Transform your driveway, walkway, or backyard into a masterpiece of light. Elevate your home's entrance with a sleek, modern, and smart LED pathway that blends beauty and functionality</p>
                <button type="button" className={`${styles.button} themeButton`} onClick={estimate} data-aos="zoom-out">Free Estimate</button>
            </div>
        </section>
    )
}

export default Offer