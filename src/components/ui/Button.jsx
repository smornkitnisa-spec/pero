import styles from './Button.module.css';
import { motion } from 'framer-motion';

export function Button({ children, variant = 'primary', className = '', ...props }) {
    return (
        <motion.button
            className={`${styles.button} ${styles[variant]} ${className}`}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
