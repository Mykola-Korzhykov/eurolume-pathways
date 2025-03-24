import { FC } from 'react'

import EnvelopeIcon from '@img/stages/envelope.svg'
import TruckIcon from '@img/stages/truck.svg'
import StreamIcon from '@img/stages/streamline.svg'
import PencilIcon from '@img/stages/pencil.svg'
import CheckIcon from '@img/stages/check.svg'

import styles from './Stages.module.scss'

const Stages: FC = () => {
    return (
        <section className={styles.wrapper} id="stages">
            <div className="container">
                <h2 className={styles.title} data-aos="fade-up"><span>Our Process:</span> From Vision to Reality</h2>
                <ul className={styles.list}>
                    <li className={styles.item} data-aos="zoom-in">
                        <div className={styles.icon}>
                            <EnvelopeIcon />
                        </div>
                        <h3 className={styles.label}>Request a Free On Site Consultation</h3>
                        <p className={styles.text}>Submit a request to start your custom LED pathway project. We’ll schedule a visit to your property, assess your space, and discuss your vision—ensuring a seamless, full-service experience</p>
                    </li>
                    <li className={styles.item} data-aos="zoom-out">
                        <div className={styles.icon}>
                            <TruckIcon />
                        </div>
                        <h3 className={styles.label}>On-Site Assessment & Expert Consultation</h3>
                        <p className={styles.text}>We personally visit your home, evaluate site conditions, and walk you through the best lighting solutions for your space.</p>
                    </li>
                    <li className={styles.item} data-aos="zoom-in">
                        <div className={styles.icon}>
                            <StreamIcon />
                        </div>
                        <h3 className={styles.label}>Drone Photography & Site Mapping</h3>
                        <p className={styles.text}>Using aerial drone imaging, we capture precise visuals of your driveway, pathways, or backyard, allowing us to create a tailored lighting layout.</p>
                    </li>
                    <li className={styles.item} data-aos="zoom-out">
                        <div className={styles.icon}>
                            <PencilIcon />
                        </div>
                        <h3 className={styles.label}>Custom Design Proposals</h3>
                        <p className={styles.text}>We present multiple lighting concepts, carefully crafted to enhance your home’s aesthetics, functionality, and curb appeal.</p>
                    </li>
                    <li className={styles.item} data-aos="zoom-in">
                        <div className={styles.icon}>
                            <CheckIcon />
                        </div>
                        <h3 className={styles.label}>Precision Installation & Final Reveal</h3>
                        <p className={styles.text}>Our expert team installs your seamless, weatherproof LED system, ensuring long-lasting elegance, functionality, and smart control integration.</p>
                    </li>
                </ul>
                <button type="button" className={`${styles.button} themeButton`} data-aos="fade-down">Free Estimate</button>
            </div>
        </section>
    )
}

export default Stages