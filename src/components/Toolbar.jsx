import styles from './Toolbar.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Toolbar = ({ setShowFilter, showFilter, productsLength }) => {
    return (
        <div className={styles.toolbar}>
            <div className={styles.leftSection}>
                <span className={styles.itemCount}>
                    {productsLength} ITEMS
                </span>
                <div className={styles.filterToggle} onClick={() => setShowFilter(!showFilter)}>
                    {showFilter ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    <button className={styles.toggleBtn}>
                        {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
                    </button>
                </div>
            </div>

            <div className={styles.sortSection}>
                <select className={styles.dropdown}>
                    <option>RECOMMENDED</option>
                    <option>NEWEST FIRST</option>
                    <option>PRICE: HIGH TO LOW</option>
                    <option>PRICE: LOW TO HIGH</option>
                </select>
            </div>
        </div>
    );
};

export default Toolbar;