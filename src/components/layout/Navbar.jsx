import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { Leaf } from 'lucide-react';

export function Navbar() {
    const { t, lang, toggleLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: t.nav.about, href: "#about" },
        { label: t.nav.concept, href: "#concept" },
        { label: t.nav.products, href: "#products" },
        { label: t.nav.contact, href: "#contact" },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Leaf color="var(--color-primary)" />
                    AromaFlow
                </div>

                <div className={styles.links}>
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className={styles.link}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className={styles.actions}>
                    <button onClick={toggleLanguage} className={styles.langToggle}>
                        {lang.toUpperCase()}
                    </button>
                    <Button variant="primary" style={{ padding: '0.5rem 1.25rem' }}>
                        {t.nav.buyNow}
                    </Button>
                </div>
            </div>
        </nav>
    );
}
