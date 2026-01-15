import Image from 'next/image'
import React from 'react'
import styles from './TopHeader.module.css'

const TopHeader = () => {
    return (
        <div className={styles.topHeader}>
            <div className={styles.topHeaderContent}>
                {
                    new Array(3).fill(0).map((_, index) => (
                        <div key={index} className={styles.headerItem}>
                            <Image src="/headerIcon.svg" alt="Logo" width={16} height={16} />
                            <span>Lorem ipsum dolor</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopHeader