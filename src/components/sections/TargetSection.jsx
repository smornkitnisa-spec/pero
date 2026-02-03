import { useLanguage } from '../../context/LanguageContext';
import styles from './TargetSection.module.css';
import { motion } from 'framer-motion';

export function TargetSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <img
                src="/aroma_flow_lifestyle_office.png"
                alt="Office Lifestyle"
                className={styles.bgImage}
            />
            <div className={styles.overlay} />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.subtitle}>{t.target.audience}</span>
                    <h2 className={styles.title}>{t.target.title}</h2>
                    <p className={styles.insight}>{t.target.insight}</p>
                </motion.div>
            </div>
        </section>
    );
}
