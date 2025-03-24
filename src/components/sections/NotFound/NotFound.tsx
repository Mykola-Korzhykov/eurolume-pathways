import { FC } from "react";

import Image from "next/image";

import styles from "./NotFound.module.scss";
import Link from "next/link";

const NotFound: FC = () => {
    return (
        <div className={styles.wrapper} data-aos="fade-down">
            <div className={styles.image}>
                <Image src="/img/not-found.png" alt="Not Found" blurDataURL="/img/not-found.png" placeholder="blur" layout="fill" />
            </div>
            <p className={styles.description}>This page does not exists!</p>
            <Link href="/">
                <button type="button" className={`${styles.button} themeButton`}>
                    Back
                </button>
            </Link>
        </div>
    );
};

export default NotFound;