import { FC, useEffect } from 'react'

import ImageGallery from "react-image-gallery";
import Link from 'next/link';
import "react-image-gallery/styles/css/image-gallery.css";

import styles from './Gallery.module.scss'

const images = [
    {
        original: "/img/gallery/inspirations/1.jpg",
        thumbnail: "/img/gallery/inspirations/1.jpg",
    },
    {
        original: "/img/gallery/inspirations/2.jpg",
        thumbnail: "/img/gallery/inspirations/2.jpg",
    },
    {
        original: "/img/gallery/inspirations/3.jpg",
        thumbnail: "/img/gallery/inspirations/3.jpg",
    },
    {
        original: "/img/gallery/inspirations/4.jpg",
        thumbnail: "/img/gallery/inspirations/4.jpg",
    },
    {
        original: "/img/gallery/inspirations/5.jpg",
        thumbnail: "/img/gallery/inspirations/5.jpg",
    },
    {
        original: "/img/gallery/inspirations/6.jpg",
        thumbnail: "/img/gallery/inspirations/6.jpg",
    },
    {
        original: "/img/gallery/inspirations/7.jpg",
        thumbnail: "/img/gallery/inspirations/7.jpg",
    },
    {
        original: "/img/gallery/inspirations/8.jpg",
        thumbnail: "/img/gallery/inspirations/8.jpg",
    }
];

const InspirationsC: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className={styles.wrapper} id="gallery">
            <div className={styles.list}>
                <div className={styles.row}>
                    <h1 className={styles.title}>Inspirations</h1>
                    <Link href="/" className={`${styles.button} themeButton`}>Back</Link>
                </div>
                <ImageGallery items={images} />
            </div>
        </section>
    )
}

export default InspirationsC