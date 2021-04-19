import styles from './index.module.scss';
import Card from './Card';

export default () => (
    <div className={styles.App}>
        <header className={styles.AppHeader}>
            <img src="/static/logo.png"
                className={styles.staticLogo} alt="logo"
            />
        </header>
        <div className={styles.Grid}>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
);
