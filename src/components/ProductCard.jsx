'use client';
import React from 'react'
import styles from './ProductCard.module.css';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = React.useState(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    // random out of stock logic for demonstration
    const isOutOfStock = product.id % 5 === 0;

    return (
        <div key={product.id} className={styles.card}>
            <Link href={`/product/${product.id}`}>

                <div className={styles.imageWrapper}>
                    {isOutOfStock && (
                        <div className={styles.overlay}>OUT OF STOCK</div>
                    )}
                    <Image
                        className={styles.productImage}
                        src={product.image}
                        alt={product.title}
                        width={100}
                        height={100}
                    />
                </div>
            </Link>

            <div className={styles.cardInfo}>
                <Link href={`/product/${product.id}`}>
                    <h3>{product.title}</h3>
                </Link>
                <div className={styles.cardFooter}>
                    <p><span>Sign in</span> or Create an account to see pricing</p>
                    <button className={styles.wishlist}>
                        <Heart
                            size={24}
                            color={isWishlisted ? '#ff6b81' : 'gray'}
                            onClick={toggleWishlist}
                            fill={isWishlisted ? '#ff6b81' : 'none'}
                            strokeWidth={2}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard