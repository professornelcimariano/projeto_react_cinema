import { Link } from 'react-router-dom';
import styles from './MenuLink.module.css';

function MenuLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default MenuLink;