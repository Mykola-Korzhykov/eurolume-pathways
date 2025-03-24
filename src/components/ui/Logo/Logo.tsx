import { FC } from 'react';

import LogoIcon from '@img/header/logo.svg'

import anchorClick from '@helpers/anchorClick';
import styles from './Logo.module.scss';

const Logo: FC = () => {
    return (
        <a href="#offer" className={styles.wrapper} onClick={anchorClick}>
            <div className={styles.icon}>
                <LogoIcon />
            </div>
            <p className={styles.title}>EuroLume Pathways</p>
        </a>
    );
}

export default Logo;