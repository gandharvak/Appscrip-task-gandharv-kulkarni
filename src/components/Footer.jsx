'use client'
import React, { useState } from 'react';
import { Instagram, Linkedin, ChevronDown } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.newsletter}>
                        <h3>BE THE FIRST TO KNOW</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Enter your e-mail..." className={styles.emailInput} />
                            <button className={styles.subscribeButton}>SUBSCRIBE</button>
                        </div>
                    </div>

                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <h3>CALL US</h3>
                            <div className={styles.contactDetails}>
                                <span>+44 221 133 5360</span>
                                <span className={styles.dot}>•</span>
                                <span>customercare@mettamuse.com</span>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <h3>CURRENCY</h3>
                            <div className={styles.currency}>
                                🇺🇸 <span className={styles.dot}>•</span> USD
                            </div>
                            <small className={styles.desktopOnly}>Transactions will be completed in Euros and a currency reference is available on hover.</small>
                        </div>
                    </div>
                </div>

                <hr className={styles.divider} />

                <div className={styles.bottomSection}>
                    {/* mettā muse section */}
                    <div className={`${styles.linkColumn} ${openSections['metta'] ? styles.isOpen : ''}`}>
                        <div className={styles.columnHeader} onClick={() => toggleSection('metta')}>
                            <h3>mettā muse</h3>
                            <ChevronDown className={styles.mobileChevron} />
                        </div>
                        <ul className={styles.linkList}>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                        </ul>
                    </div>

                    {/* Quick Links section */}
                    <div className={`${styles.linkColumn} ${openSections['links'] ? styles.isOpen : ''}`}>
                        <div className={styles.columnHeader} onClick={() => toggleSection('links')}>
                            <h3>QUICK LINKS</h3>
                            <ChevronDown className={styles.mobileChevron} />
                        </div>
                        <ul className={styles.linkList}>
                            <li>Orders & Shipping</li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment & Pricing</li>
                            <li>Return & Refunds</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className={styles.followSection}>
                        <div className={`${styles.socials} ${openSections['follow'] ? styles.isOpen : ''}`}>
                            <div className={styles.columnHeader} onClick={() => toggleSection('follow')}>
                                <h3>FOLLOW US</h3>
                                <ChevronDown className={styles.mobileChevron} />
                            </div>
                            <div className={`${styles.socialIcons} ${styles.linkList}`}>
                                <Instagram size={24} className={styles.icon} />
                                <Linkedin size={24} className={styles.icon} />
                            </div>
                        </div>

                        <div className={styles.payments}>
                            <h3>mettā muse ACCEPTS</h3>
                            <div className={styles.paymentIcons}>
                                <div className={styles.paymentBox}><img src="/gpay.svg" alt="GPay" /></div>
                                <div className={styles.paymentBox}><img src="/mastercard.svg" alt="Mastercard" /></div>
                                <div className={styles.paymentBox}><img src="/paypal.svg" alt="Paypal" /></div>
                                <div className={styles.paymentBox}><img src="/amex.svg" alt="Amex" /></div>
                                <div className={styles.paymentBox}><img src="/applepay.svg" alt="Apple Pay" /></div>
                                <div className={styles.paymentBox}><img src="/opay.svg" alt="Opay" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className={styles.copyright}>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;