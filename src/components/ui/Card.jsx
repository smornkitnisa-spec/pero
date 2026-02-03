import styles from './Card.module.css';
import { motion } from 'framer-motion';

export function Card({ children, className = '', ...props }) {
    return (
        <motion.div
            className={`${styles.card} ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
}
