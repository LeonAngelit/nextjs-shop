import React, {useContext} from 'react';
import styles from '@styles/ShoppingCart.module.scss';
import Back from '@assets/icons/flechita.svg'
import CartItem from '@components/CartItem';
import AppContext from '@context/AppContext';
import Image from 'next/image';


const ShoppingCart = () => {
  const {state} = useContext(AppContext);
  const {handleModal} = useContext(AppContext);
  const {addCheckout} = useContext(AppContext);
  const handleCart = () =>{
    handleModal();
  }

  const sumTotal = () =>{
    return state.cart.reduce((a,b) => a+b.price,0)
  }


    return (    
<div className={styles["cart-container"]}>
  <div className={styles['cart-title']}>
  <Image src={Back} width={'8vw'} height={16} alt="Back" onClick={() => handleCart()}/>
  <h2>Shopping cart</h2>
  </div>
  <ul className={styles["cart-items"]}>
    {state.cart.map((product,index) =>(
       <CartItem product ={product} key={`cart-item-${index}`} indexValue={index}/>
    ))}
  </ul>
  <div className={styles['checkout-button-container']}>
  <div className={styles["cart-total-order"]}>
    <p>Total</p>
    <p> {state.cart.length > 0 ? `$${sumTotal()}`: 'No hay productos'}</p>
  </div>
  <button className={styles["primary-button"]} onClick={() =>
    { 
      if(state.cart.length > 0 ){
        addCheckout({amount: sumTotal(), articles: state.cart, date: new Date().toDateString()});
        state.selectedOrder.selected = false;
        location.href="/my-order";
        } else null}}> Checkout</button>
  </div>
</div>
 );
}
 
export default ShoppingCart;