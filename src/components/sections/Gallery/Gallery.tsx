import { FC, useEffect } from 'react'

import ImageGallery from "react-image-gallery";
import Link from 'next/link';
import "react-image-gallery/styles/css/image-gallery.css";

import styles from './Gallery.module.scss'

const images = [
    {
        original: "/img/gallery/1.jpg",
        thumbnail: "/img/gallery/1.jpg",
    },
    {
        original: "/img/gallery/2.jpg",
        thumbnail: "/img/gallery/2.jpg",
    },
    {
        original: "/img/gallery/3.jpg",
        thumbnail: "/img/gallery/3.jpg",
    },
    {
        original: "/img/gallery/4.jpg",
        thumbnail: "/img/gallery/4.jpg",
    },
    {
        original: "/img/gallery/5.jpg",
        thumbnail: "/img/gallery/5.jpg",
    },
    {
        original: "/img/gallery/6.jpg",
        thumbnail: "/img/gallery/6.jpg",
    },
    {
        original: "/img/gallery/7.jpg",
        thumbnail: "/img/gallery/7.jpg",
    },
    {
        original: "/img/gallery/8.jpg",
        thumbnail: "/img/gallery/8.jpg",
    },
    {
        original: "/img/gallery/9.jpg",
        thumbnail: "/img/gallery/9.jpg",
    },
    {
        original: "/img/gallery/10.jpg",
        thumbnail: "/img/gallery/10.jpg",
    },
    {
        original: "/img/gallery/11.jpg",
        thumbnail: "/img/gallery/11.jpg",
    },
];

const GalleryC: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className={styles.wrapper} id="gallery">
            <div className={styles.list}>
                <div className={styles.row}>
                    <h1 className={styles.title}>Gallery</h1>
                    <Link href="/" className={`${styles.button} themeButton`}>Back</Link>
                </div>
                <ImageGallery items={images} />
            </div>
        </section>
    )
}

export default GalleryC