import { FC, MouseEvent } from 'react'

import InstagramIcon from '@img/footer/instagram.svg'

import Logo from "@components/ui/Logo/Logo";
import ArrowIcon from '@img/footer/arrow.svg'
import styles from "./Footer.module.scss";
import anchorClick from '@helpers/anchorClick';
import getAppWorkYears from '@helpers/getAppWorkYears';
import { usePathname } from 'next/navigation';

const Footer: FC = () => {
    const pathname = usePathname();

    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        anchorClick(e);
    }

    return (
        <footer className={styles.wrapper} id="contacts">
            <div className="container">
                <Logo />
                <div className={styles.row} data-aos="fade-up">
                    <h2 className={styles.title}>Our <span className="theme-color">Contact Information</span></h2>
                    <div className={styles.block}>
                        <a href="#offer" className={styles.arrow} onClick={anchorHandleClick}>
                            <ArrowIcon />
                        </a>
                        <button type="button" className={`${styles.button} themeButton`}>Free Estimate</button>
                    </div>
                </div>
                <div className={styles.grid} data-aos="fade-right">
                    {pathname == '/' && (
                        <div className={styles.column}>
                            <h3 className={styles.subtitle}>Navigation</h3>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <a href="#offer" className={styles.link} onClick={(e: any) => anchorHandleClick(e)}>Home</a>
                                </li>
                                <li className={styles.item}>
                                    <a href="#about" className={styles.link} onClick={anchorHandleClick}>About us</a>
                                </li>
                                <li className={styles.item}>
                                    <a href="#services" className={styles.link} onClick={anchorHandleClick}>Services</a>
                                </li>
                                <li className={styles.item}>
                                    <a href="#projects" className={styles.link} onClick={anchorHandleClick}>Projects</a>
                                </li>
                                <li className={styles.item}>
                                    <a href="#stages" className={styles.link} onClick={anchorHandleClick}>Stages</a>
                                </li>
                                <li className={styles.item}>
                                    <a href="#Contacts" className={styles.link} onClick={anchorHandleClick}>Contacts</a>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className={styles.column}>
                        <h3 className={styles.subtitle}>Contacts</h3>
                        <a href="tel:+16122597432" className={styles.phone}>+1 612 259 7432</a>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.subtitle}>Social medias</h3>
                        <div className={styles.social}>
                            <a href="https://instagram.com" target="_blank" className={styles.socialItem}>
                                <p className={styles.socialTitle}>Instagram</p>
                                <div className={styles.socialIcon}>
                                    <InstagramIcon />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom} data-aos="fade-up">
                    <p className={styles.rights}>{getAppWorkYears(2025)} © All rights reserved</p>
                    <p className={styles.owner}>CEO: Serhii Dublii</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;