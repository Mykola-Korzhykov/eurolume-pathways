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
                        <h3 className={styles.subtitle}>Projects</h3>
                        <div className={styles.rightImage}>
                            <Image src="/img/projects/project.jpg" blurDataURL="/img/projects/project.jpg" alt="Projects" layout='fill' />
                        </div>
                        <Link href="/projects" className={styles.more}>See More</Link>
                    </div>
                    <div className={styles.center}>
                        <h3 className={styles.subtitle}><span>Make your choice</span></h3>
                        <button type="button" className={`${styles.button} themeButton`} onClick={estimate}>Free Estimate</button>
                    </div>
                    <div className={styles.right}>
                        <h3 className={styles.subtitle}>Inspirations</h3>
                        <div className={styles.leftImage}>
                            <Image src="/img/projects/inspiration.jpg" blurDataURL="/img/projects/inspiration.jpg" alt="Inspirations" layout='fill' />
                        </div>
                        <Link href="/inspirations" className={styles.more}>See More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects