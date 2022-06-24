import React, {useContext} from 'react';
import styles from '@styles/CheckoutItem.module.scss';
import AppContext from '@context/AppContext';


const CheckoutItem = ({product}) => {
  const {selectProduct} = useContext(AppContext);
    return ( 
  <li className={styles.item} onClick={() => selectProduct(product)}>
  <div className={styles["item-info"]}>
    <img src={product.images[0]} alt="bici"  />
    <p>{product.title}</p>
  </div>
  <div className={styles["item-amount"]}>
    <p>${product.price}</p>
  </div>
</li>

     );
};
 
export default CheckoutItem;