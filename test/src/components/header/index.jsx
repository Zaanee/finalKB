import styles from './style.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to="/">Home page</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/test">Loading data</Link>
            </nav>
        </div>
    );
}

export default Header
