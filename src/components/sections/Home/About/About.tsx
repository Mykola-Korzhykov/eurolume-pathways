import { FC } from 'react';
import Image from 'next/image';

import PhoneIcon from '@img/phone.svg'

import styles from './About.module.scss'
import { estimate } from '@helpers/estimate';

const About: FC = () => {
    return (
        <section className={styles.wrapper} id="about">
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.column} data-aos="fade-right">
                        <h2 className={styles.title}><span>Luxury Outdoor LED Lighting</span> in Twin Cities, MN</h2>
                        <p className={styles.description}>Transform your outdoor space with premium LED lighting! At EuroLume Pathways, we design and install elegant, custom LED solutions that enhance your home’s beauty, safety, and ambiance. From pathways to driveways, we create a lighting experience that is both functional and luxurious—tailored to your unique style</p>
                        <div className={styles.phone}>
                            <div className={styles.icon}>
                                <PhoneIcon />
                            </div>
                            <p className={styles.text}>Call us today at <a href="tel:+6124593533">+1 612 459 3533</a> to schedule your free consultation!</p>
                        </div>
                        <button type="button" className={`${styles.button} themeButton`} onClick={estimate}>Free Estimate</button>
                    </div>
                    <div className={styles.image} data-aos="fade-left">
                        <Image src="/img/about.png" blurDataURL='/img/about.png' placeholder='blur' layout='fill' alt="Lighting" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About