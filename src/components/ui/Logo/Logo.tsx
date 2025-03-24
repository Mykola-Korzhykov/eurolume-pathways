import { FC } from 'react';

import anchorClick from '@helpers/anchorClick';
import styles from './Logo.module.scss';

const Logo: FC = () => {
    return (
        <a href="#offer" className={styles.wrapper} onClick={anchorClick}>
            <p className={styles.title}>EuroLume Pathways</p>
        </a>
    );
}

export default Logo;