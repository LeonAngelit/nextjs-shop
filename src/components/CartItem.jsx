import React, {useContext} from 'react';
import Close from '@assets/icons/icon_close.png';
import AppContext from '@context/AppContext';
import styles from '@styles/CartItem.module.scss';
import Image from 'next/image';

const CartItem = ({product, indexValue}) => {
  const {removeFromCart} = useContext(AppContext);
    return (
        <li className={styles["cart-item"]}>
      <div className={styles["cart-item-info"]}>
        <img src={product.images[0]} alt="bici" />
        <p>{product.title}</p>
      </div>
      <div className={styles["cart-item-amount"]}>
        <p>${product.price}</p>
        <Image src={Close} alt="close" onClick={()=>removeFromCart(indexValue)} />
      </div>
    </li>
      );
};
 
export default CartItem;