import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export async function generateStaticParams() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) return { title: "Product Not Found" };

        const product = await res.json();
        return {
            title: `${product.title} | Appscrip - Gandharv Kulkarni`,
            description: product.description,
            openGraph: { images: [product.image] },
        };
    } catch (error) {
        return { title: "Error Loading Product" };
    }
}

export default async function ProductPage({ params }) {
    const { id } = await params;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) notFound();

    const product = await res.json();
    if (!product || !product.id) notFound();

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.productImage}
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={500}
                        priority
                    />
                </div>

                <div className={styles.cardInfo}>
                    <span className={styles.category}>{product.category}</span>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.priceContainer}>
                        <div className={styles.currentPriceRow}>
                            <span className={styles.price}>${product.price.toFixed(2)}</span>
                            <span className={styles.discount}>50%</span>
                        </div>
                    </div>

                    <div className={styles.cardFooter}>
                        <p><span>Sign in</span> or Create an account to see pricing</p>
                    </div>
                </div>
            </div>
        </div>
    );
}