import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './Projects.module.scss'
import { estimate } from '@helpers/estimate'

const Projects: FC = () => {
    return (
        <section className={styles.wrapper} id="projects">
            <div className="container">
                <h1 className={styles.title}>
                    Bringing Light to Life <span>Projects</span> and <span>Inspirations</span>
                </h1>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <h3 className={styles.subtitle}>Inspirations</h3>
                        <div className={styles.leftImage}>
                            <Image src="/img/projects/left.jpg" blurDataURL="/img/projects/left.jpg" alt="Inspirations" layout='fill' />
                        </div>
                        <Link href="/gallery" className={styles.more}>See More</Link>
                    </div>
                    <div className={styles.center}>
                        <h3 className={styles.subtitle}><span>Make your choice</span></h3>
                        <button type="button" className={`${styles.button} themeButton`} onClick={estimate}>Free Estimate</button>
                    </div>
                    <div className={styles.right}>
                        <h3 className={styles.subtitle}>Projects</h3>
                        <div className={styles.rightImage}>
                            <Image src="/img/projects/right.jpg" blurDataURL="/img/projects/right.jpg" alt="Projects" layout='fill' />
                        </div>
                        <Link href="/gallery" className={styles.more}>See More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects