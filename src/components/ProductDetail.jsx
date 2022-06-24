import React, {useContext} from 'react';
import styles from '@styles/ProductDetail.module.scss';
import Close from '@assets/icons/icon_close.png';
import AppContext from '@context/AppContext';
import Image from 'next/image';

const ProductDetail = ({product}) => {
  const {state} = useContext(AppContext);
  const {selectProduct} = useContext(AppContext);
  const {addToCart} = useContext(AppContext);
  const {removeFromCart} = useContext(AppContext);

  const HandleClick = (item) =>{
    state.productIDs.includes(item.id) ? removeFromCart(state.productIDs.indexOf(item.id)) : addToCart(item);
  };
    return ( 
  <aside className={styles["detail__cards-container"]}>
    <div className={styles["detail__product-card"]}>
      <img src={product.images[0]} alt={product.title} />
      <div className={styles.points}>
        <li />
        <li />
        <li />
      </div>
      <div className={styles.description}>
        <div className={styles.text}>
          <h3>${product.price}</h3>
          <p>{product.title}</p>
          <p>{product.description}</p>
        </div>
      </div>
      {state.productIDs.includes(product.id) ?  <button className={styles.disabled} onClick={()=>HandleClick(product)}><span className={styles.carrito} /> Added to cart</button>  : 
      <button className={styles["primary-button"]} onClick={()=>HandleClick(product)}><span className={styles["carrito"]} /> Add to cart</button> }
      <div className={styles.close} role="button" tabIndex={0}  onClick={()=>selectProduct(false)} onKeyDown={()=>selectProduct(false)}><Image src={Close} alt="product detail"/></div>
    </div>
  </aside>

     );
};
 
export default ProductDetail;