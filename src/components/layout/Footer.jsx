import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.investment}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Investor Relations</h3>
                    <p>{t.footer.investment}</p>
                </div>

                <h2 className={styles.title}>{t.footer.contact}</h2>
                <p style={{ marginBottom: '2rem' }}>hello@aromaflow.com | +66 81 234 5678</p>

                <p className={styles.copy}>© 2026 AromaFlow. All rights reserved.</p>
            </div>
        </footer>
    );
}
