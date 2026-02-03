import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import styles from './HeroSection.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroSection() {
    const { t } = useLanguage();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={styles.badge}>
                            ✨ {t.hero.subtitle}
                        </span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {t.hero.title}
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        className={styles.buttonGroup}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button variant="primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                            {t.hero.cta}
                        </Button>
                        <Button variant="outline" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.5)' }}>
                            View Collection
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className={`${styles.blob} ${styles.blob1}`} />
                    <div className={`${styles.blob} ${styles.blob2}`} />

                    <motion.img
                        src="/aroma_flow_hero_v2.png"
                        alt="AromaFlow Inhaler"
                        className={styles.productImage}
                        style={{ y: y2 }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
