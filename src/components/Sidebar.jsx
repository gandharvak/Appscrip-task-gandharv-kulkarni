import { ChevronDown } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const filterCategories = [
        "IDEAL FOR", "OCCASION", "WORK", "FABRIC", "SEGMENT",
        "SUITABLE FOR", "RAW MATERIALS", "PATTERN"
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.customizable}>
                <input type="checkbox" id="customizable" className={styles.checkbox} />
                <label htmlFor="customizable">CUSTOMIZABLE</label>
            </div>

            {filterCategories.map((category) => (
                <details key={category} className={styles.filterSection} open>
                    <summary className={styles.summary}>
                        <div>
                            <span className={styles.categoryTitle}>{category}</span>
                            <p className={styles.selectedText}>All</p>
                        </div>
                        <span className={styles.chevron}><ChevronDown /></span>
                    </summary>

                    <div className={styles.optionsList}>
                        <label className={styles.option}>
                            <input type="checkbox" className={styles.checkbox} /> Men
                        </label>
                        <label className={styles.option}>
                            <input type="checkbox" className={styles.checkbox} /> Women
                        </label>
                        <label className={styles.option}>
                            <input type="checkbox" className={styles.checkbox} /> Baby & Kids
                        </label>
                    </div>
                </details>
            ))}
        </aside>
    );
};

export default Sidebar;