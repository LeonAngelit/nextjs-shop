import React  from 'react';
import styles from '@styles/ProductList.module.scss';
import ProductCard from '@components/ProductCard';
import useGetProducts from '@hooks/useGetProducts';
const API = process.env.NEXT_PUBLIC_API_ID;


const ProductList = () => {
  const products = useGetProducts(API);
    return ( 
        <section className={styles["product-list-container"]}>
        <section className={styles["list__cards-container"]}>
          {products.map(product =>(
             <ProductCard product={product} key={product.id}/>
          ))}
        </section>
      </section>
     );
}
 
export default ProductList;