"use client";
import { useState } from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import styles from '../app/page.module.css';

export default function FilterLayout({ children, productsLength }) {
    const [showFilter, setShowFilter] = useState(true);

    return (
        <>
            <Toolbar setShowFilter={setShowFilter} showFilter={showFilter} productsLength={productsLength} />

            <div className={styles.mainLayout}>
                {showFilter && <Sidebar />}

                <section className={showFilter ? styles.gridWithSidebar : styles.gridFullWidth}>
                    {children}
                </section>
            </div>
        </>
    );
}