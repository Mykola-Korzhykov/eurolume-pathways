import { FC, useEffect } from 'react'

import ImageGallery from "react-image-gallery";
import Link from 'next/link';
import "react-image-gallery/styles/css/image-gallery.css";

import styles from './Gallery.module.scss'

const images = [
    {
        original: "/img/gallery/projects/1.jpg",
        thumbnail: "/img/gallery/projects/1.jpg",
    },
    {
        original: "/img/gallery/projects/2.jpg",
        thumbnail: "/img/gallery/projects/2.jpg",
    },
    {
        original: "/img/gallery/projects/3.jpg",
        thumbnail: "/img/gallery/projects/3.jpg",
    },
    {
        original: "/img/gallery/projects/4.jpg",
        thumbnail: "/img/gallery/projects/4.jpg",
    },
    {
        original: "/img/gallery/projects/5.jpg",
        thumbnail: "/img/gallery/projects/5.jpg",
    },
    {
        original: "/img/gallery/projects/6.jpg",
        thumbnail: "/img/gallery/projects/6.jpg",
    },
    {
        original: "/img/gallery/projects/7.jpg",
        thumbnail: "/img/gallery/projects/7.jpg",
    },
    {
        original: "/img/gallery/projects/8.jpg",
        thumbnail: "/img/gallery/projects/8.jpg",
    },
    {
        original: "/img/gallery/projects/9.jpg",
        thumbnail: "/img/gallery/projects/9.jpg",
    },
    {
        original: "/img/gallery/projects/10.jpg",
        thumbnail: "/img/gallery/projects/10.jpg",
    },
    {
        original: "/img/gallery/projects/11.jpg",
        thumbnail: "/img/gallery/projects/11.jpg",
    },
    {
        original: "/img/gallery/projects/12.jpg",
        thumbnail: "/img/gallery/projects/12.jpg",
    },
    {
        original: "/img/gallery/projects/13.jpg",
        thumbnail: "/img/gallery/projects/13.jpg",
    },
    {
        original: "/img/gallery/projects/14.jpg",
        thumbnail: "/img/gallery/projects/14.jpg",
    },
];

const ProjectsC: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className={styles.wrapper} id="gallery">
            <div className={styles.list}>
                <div className={styles.row}>
                    <h1 className={styles.title}>Projects</h1>
                    <Link href="/" className={`${styles.button} themeButton`}>Back</Link>
                </div>
                <ImageGallery items={images} />
            </div>
        </section>
    )
}

export default ProjectsC