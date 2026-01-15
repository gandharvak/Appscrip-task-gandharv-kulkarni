"use client";
import { useState } from 'react';
import { Search, Heart, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.topSection}>
                <div className={styles.leftContainer}>
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className={styles.logoIcon}>
                        <Link href="/">
                            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
                        </Link>
                    </div>
                </div>

                <h1 className={styles.brandName}>LOGO</h1>

                <div className={styles.iconActions}>
                    <Search size={24} strokeWidth={1.5} className={styles.icon} />
                    <Heart size={24} strokeWidth={1.5} className={styles.icon} />
                    <ShoppingBag size={24} strokeWidth={1.5} className={styles.icon} />
                    <User size={24} strokeWidth={1.5} className={`${styles.icon} ${styles.desktopOnly}`} />
                    <div className={`${styles.langSelector} ${styles.desktopOnly}`}>
                        <strong>ENG</strong> <ChevronDown size={16} />
                    </div>
                </div>
            </div>

            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navOpen : ''}`}>
                <li onClick={() => setIsMenuOpen(false)}>SHOP</li>
                <li onClick={() => setIsMenuOpen(false)}>SKILLS</li>
                <li onClick={() => setIsMenuOpen(false)}>STORIES</li>
                <li onClick={() => setIsMenuOpen(false)}>ABOUT</li>
                <li onClick={() => setIsMenuOpen(false)}>CONTACT US</li>
            </ul>
        </nav>
    );
};

export default Navbar;