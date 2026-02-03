import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../ui/Card';
import styles from './ConceptSection.module.css';
import { motion } from 'framer-motion';
import { Lock, Hand, Sprout, Wind } from 'lucide-react';

export function ConceptSection() {
    const { t } = useLanguage();

    const icons = [Lock, Hand, Wind, Sprout];

    return (
        <section id="concept" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tagline}>{t.concept.tagline}</span>
                    <h2 className={styles.title}>{t.concept.title}</h2>
                    <p className={styles.description}>{t.concept.description}</p>
                </div>

                <div className={styles.grid}>
                    {t.concept.features.map((feature, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className={styles.featureCard}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature}</h3>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
