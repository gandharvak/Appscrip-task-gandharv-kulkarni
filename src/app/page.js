import FilterLayout from '../components/FilterLayout';
import ProductCard from '../components/ProductCard';
import styles from './page.module.css';

export async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.heroSub}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </header>

      <FilterLayout productsLength={products.length}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </FilterLayout>
    </div>
  );
}