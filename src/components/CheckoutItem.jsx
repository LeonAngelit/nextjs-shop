import React from 'react';
import styles from '@styles/CheckoutItem.module.scss';


const CheckoutItem = ({product}) => {
    return ( 
  <li className={styles.item}>
  <div className={styles["item-info"]}>
    <img src={product.images[0]} alt="bici" />
    <p>{product.title}</p>
  </div>
  <div className={styles["item-amount"]}>
    <p>${product.price}</p>
  </div>
</li>

     );
};
 
export default CheckoutItem;