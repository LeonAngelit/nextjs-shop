import React, {useContext, useState} from "react";
import styles from '@styles/Header.module.scss';
import Logo from '@assets/logos/logo_yard_sale.svg';
import Cart from '@assets/icons/icon_shopping_cart.svg';
import IconMenu from '@assets/icons/icon_menu.svg';
import DesktopMenu from '@components/DesktopMenu';
import ShoppingCart from '@containers/ShoppingCart';
import AppContext from "@context/AppContext";
import MobileMenu from "@components/MobileMenu";
import ProductDetail from "@components/ProductDetail";
import Image from "next/image";
import Link from "next/link";


const Header = () =>{
  const [toggle,setToggle] = useState(false);
  const [toggleMobile,setToggleMobile] = useState(false);
  const {state} = useContext(AppContext);
  const {handleModal} = useContext(AppContext);
  const handleToggle = ()=>{
    return setToggle(!toggle);
  };
  const handleToggleMobile = ()=>{
    return setToggleMobile(!toggleMobile);
  };
  const handleCart = () =>{
    handleModal();
  };
    return(
<header className={styles["navbar-container"]}>
  <div className={styles["logo-menu"]} onClick={() => handleToggleMobile()} onKeyDown={() => handleToggleMobile()} role="button" tabIndex={0}>
    <Image className={styles.imageMenu}  src={IconMenu} alt="Menu" />
  </div>
  <div className={styles.logo}>
    <Link href="/" ><Image src={Logo} width={140} height={30} alt="Logo Tienda" /></Link>
  </div>
  <nav className={styles.navigation}>
    <ul className={styles["option-list"]}>
      <li className={styles["nav-option"]}><Link href="/">All</Link></li>
      <li className={styles["nav-option"]}><Link href="/">Clothes</Link></li>
      <li className={styles["nav-option"]}><Link href="/">Electronics</Link></li>
      <li className={styles["nav-option"]}><Link href="/">Furniture</Link></li>
      <li className={styles["nav-option"]}><Link href="/">Toys</Link></li>
      <li className={styles["nav-option"]}><Link href="/">Others</Link></li>
    </ul>
  </nav>
  <div className={styles["account-state"]}>
    <button onClick={() => handleToggle()} onKeyDown={()=> handleToggle()} role="menu">exampleUser</button>
    <div className={styles.imageCart}> <Image src={Cart} alt="Cart" width={40} height={40} onClick={() => handleCart()} /></div>
   {state.cart.length > 0 ?  <div className={styles["shopping-cart-notification"]}>{state.cart.length}</div> : null}
  </div>
  <div className={styles["modals-container"]}>
  {state.productSelected && <ProductDetail product = {state.productSelected} />}
  {toggle && <DesktopMenu />}
  {state.toggleModal && <ShoppingCart />}
  </div>
  {toggleMobile && <MobileMenu />}
</header>
    );

};

export default Header;