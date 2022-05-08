import React, { useContext} from 'react';
import AddCart from '@assets/icons/bt_add_to_cart.svg';
import AddedCart from '@assets/icons/bt_added_to_cart.svg';
import styles from '@styles/ProductCard.module.scss';
import AppContext from '@context/AppContext';
import Image from 'next/image';

const ProductCard = ({product}) => {
  const {state} = useContext(AppContext);
  const {addToCart} = useContext(AppContext);
  const {selectProduct} = useContext(AppContext);
  const {removeFromCart} = useContext(AppContext);

  const HandleClick = (item) =>{
    state.productIDs.includes(item.id) ? removeFromCart(state.productIDs.indexOf(item.id)) : addToCart(item);
  };
    return (
        <div className={styles["home__product-card"]}>
          <div role={"button"} tabIndex={0}
          onClick={()=> state.productSelected ? state.productSelected==product ? selectProduct(false) : selectProduct(product) : selectProduct(product)} 
          onKeyDown={()=> state.productSelected ? state.productSelected==product ? selectProduct(false) : selectProduct(product) : selectProduct(product)}>
          <img src={product.images[0]} alt={product.title}/>
          </div>
      <div className={styles["home__description"]}>
        <div className={styles["text"]}>
          <h3>${product.price}</h3>
          <p>{product.title}</p>
        </div>
        <figure>
          <div onClick={()=>HandleClick(product)}  onKeyDown={()=>HandleClick(product)} role={"button"} tabIndex={0}>
          <Image width={73.06} height={73.06} objectPosition={"static"} src={state.productIDs.includes(product.id) ? AddedCart: AddCart} alt="product" />
          </div>
        </figure>
      </div>
    </div>
      );
};
 
export default ProductCard;