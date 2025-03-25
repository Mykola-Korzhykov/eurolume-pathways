import { FC } from 'react'

import Image from 'next/image'

import styles from './Services.module.scss'
import { estimate } from '@helpers/estimate'

const Services: FC = () => {
    return (
        <section className={styles.wrapper} id="services">
            <div className="container">
                <h1 className={styles.title} data-aos="fade-up"><span>Services</span> We Offer</h1>
                <div className={styles.description} data-aos="fade-up">A little bit about the services we offer</div>
                <ul className={styles.list} data-aos="zoom-in">
                    <li className={styles.item}>
                        <div className={styles.image}>
                            <Image src="/img/services/freelance.png" blurDataURL="/img/services/freelance.png" placeholder='blur' layout='fill' alt="Freelance" />
                        </div>
                        <h3 className={styles.label}>Free Quote & Drone-Based Design</h3>
                        <p className={styles.text}>We provide a detailed cost estimate at no charge, including a professional site analysis and custom lighting design using drone imaging for a precise and elegant layout.</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.image}>
                            <Image src="/img/services/design.png" blurDataURL="/img/services/design.png" placeholder='blur' layout='fill' alt="Design" />
                        </div>
                        <h3 className={styles.label}>Custom Lighting Concepts</h3>
                        <p className={styles.text}>Every project is uniquely designed to match your home’s architecture and style, ensuring a seamless blend of beauty and functionality.</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.image}>
                            <Image src="/img/services/light.png" blurDataURL="/img/services/light.png" placeholder='blur' layout='fill' alt="Light" />
                        </div>
                        <h3 className={styles.label}>Professional LED Installation</h3>
                        <p className={styles.text}>We handle the entire installation process with precision—embedding LEDs, wiring smart systems, and ensuring long-lasting, weatherproof performance.</p>
                    </li>
                </ul>
                <button type="button" className={`${styles.button} themeButton`} data-aos="fade-down" onClick={estimate}>Free Estimate</button>
            </div>
        </section>
    )
}

export default Services