import { useLanguage } from '../../context/LanguageContext';
import styles from './PricingSection.module.css';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function PricingSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>{t.pricing.subtitle}</span>
                    <h2 className={styles.title}>{t.pricing.title}</h2>
                </div>

                <div className={styles.grid}>
                    {t.pricing.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.priceCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {index === 1 && <span className={styles.popularBadge}>Best Value</span>}
                            <h3 className={styles.priceName}>{item.name}</h3>
                            <div className={styles.priceValue}>{item.price}</div>
                            <p className={styles.priceDesc}>{item.desc}</p>
                            <Button variant={index === 1 ? 'primary' : 'outline'} style={{ width: '100%' }}>
                                {t.nav.buyNow}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
