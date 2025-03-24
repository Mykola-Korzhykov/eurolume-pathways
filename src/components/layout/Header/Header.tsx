import { FC, RefObject, useEffect, useState, MouseEvent } from 'react';
import Link from 'next/link';

import Logo from '@components/ui/Logo/Logo';

import anchorClick from '@helpers/anchorClick';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

type Props = {
    isSticky: boolean,
    headerRef: RefObject<HTMLElement>
}

const Header: FC<Props> = ({ isSticky, headerRef }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const pathname = usePathname()

    const toggleMenu = () => {
        document.body.classList.toggle('lock-scroll');
        setIsOpen(!isOpen);
    }

    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (window.screen.width < 993) toggleMenu();
        anchorClick(e);
    }

    return (
        <header className={`${styles.wrapper} ${isSticky ? styles.sticky : ''}`} id="header" ref={headerRef}>
            <div className="container">
                <nav className={styles.navigation}>
                    <Logo />
                    {pathname == '/' && (
                        <ul className={`${styles.list} ${isOpen ? styles.show : ''}`}>
                            <li className={styles.item}>
                                <a href="#about" className={styles.link} onClick={anchorHandleClick}>
                                    About us
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="#services" className={styles.link} onClick={anchorHandleClick}>
                                    Services
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="#projects" className={styles.link} onClick={anchorHandleClick}>
                                    Projects
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="#stages" className={styles.link} onClick={anchorHandleClick}>
                                    Stages
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="#contacts" className={styles.link} onClick={anchorHandleClick}>
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    )}
                    <div className={styles.right}>
                        <a href="tel:+16122597432" className={styles.phone}>+1 612 259 7432</a>
                        <button type="button"
                            aria-label="Toggle Menu"
                            className={`${styles.open_btn} ${isOpen ? styles.close_btn : ''}`}
                            onClick={toggleMenu}>
                        </button>
                    </div>
                </nav>
            </div>
            <div className={styles.line}></div>
        </header>
    );
}

export default Header;