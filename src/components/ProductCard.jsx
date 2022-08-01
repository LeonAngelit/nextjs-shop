import React, { useContext} from 'react';
import SvgAdd from '@assets/icons/bt_add_to_cart';
import SvgAdded from '@assets/icons/bt_added_to_cart.jsx';
import styles from '@styles/ProductCard.module.scss';
import AppContext from '@context/AppContext';

const ProductCard = ({product}) => {
  const {state} = useContext(AppContext);
  const {addToCart} = useContext(AppContext);
  const {selectProduct} = useContext(AppContext);
  const {removeFromCart} = useContext(AppContext);

  const HandleClick = (item) =>{
    state.productIDs.includes(item.id) ? removeFromCart(state.productIDs.indexOf(item.id)) : addToCart(item);
  };
    return (
        <div className={styles["home__product-card"]} data-theme={state.theme}>
          <div  className={styles["home__image-container"]}role={"button"} tabIndex={0}
          onClick={()=> state.productSelected ? state.productSelected==product ? selectProduct(false) : selectProduct(product) : selectProduct(product)} 
          onKeyDown={()=> state.productSelected ? state.productSelected==product ? selectProduct(false) : selectProduct(product) : selectProduct(product)}>
          <img src={product.images[0]} alt={product.title}/>
          </div>
      <div className={styles["home__description"]}>
        <div className={styles["text"]} data-theme={state.theme}>
          <h3>${product.price}</h3>
          <p>{product.title}</p>
        </div>
        <figure>
          <div onClick={()=>HandleClick(product)}  onKeyDown={()=>HandleClick(product)} role={"button"} tabIndex={0}>
        {state.productIDs.includes(product.id) ? <SvgAdded /> : <SvgAdd />} 
          </div>
        </figure>
      </div>
    </div>
      );
};
 
export default ProductCard;