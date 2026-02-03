import { useLanguage } from '../../context/LanguageContext';
import styles from './SolutionSection.module.css';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

export function SolutionSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.solution.title}</h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.problems}>
                        {t.solution.problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                className={styles.problemCard}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <XCircle color="#FEB2B2" size={24} style={{ flexShrink: 0 }} />
                                <div>
                                    <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{problem.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#718096' }}>{problem.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.solutionCard}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <CheckCircle color="var(--color-primary)" size={48} style={{ marginBottom: '1.5rem' }} />
                        <h3 className={styles.solutionTitle}>{t.solution.solution.title}</h3>
                        <p className={styles.solutionDesc}>{t.solution.solution.desc}</p>
                        <div className={styles.usp}>
                            {t.solution.solution.usp}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
