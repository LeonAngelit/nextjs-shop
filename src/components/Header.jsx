import React, { useContext, useState, useLayoutEffect, useEffect } from "react";
import styles from "@styles/Header.module.scss";
import LogoYard from "@assets/logos/logo_yard_sale.jsx";
import Cart from "@assets/icons/icon_shopping_cart.jsx";
import IconMenu from "@assets/icons/icon_menu.jsx";
import DesktopMenu from "@components/DesktopMenu";
import ShoppingCart from "@containers/ShoppingCart";
import AppContext from "@context/AppContext";
import MobileMenu from "@components/MobileMenu";
import ProductDetail from "@components/ProductDetail";
import Link from "next/link";

const darkTheme = {
  "very-light-pink": "pink",
  white: "rgba(0,0,0,.9)",
  black: "whitesmoke",
  dark: "whitesmoke",
  "text-input-field": "black",
  "hospital-green": "#7390fa",
};

const lightTheme = {
  "very-light-pink": "#c7c7c7",
  "hospital-green": "#ACD9B2",
  white: "white",
  black: "black",
  dark: "#232830",
  "text-input-field": "#F7F7F7",
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const { state } = useContext(AppContext);
  const { updateChecked } = useContext(AppContext);
  const [theme, setTheme] = useState(state.checked ? darkTheme : lightTheme);

  useTheme(theme);

  useEffect(() => {
    state.checked ? (document.getElementById("checkbox").checked = true) : null;
  }, []);

  const handleToggle = () => {
    return setToggle(!toggle);
  };
  const handleToggleMobile = () => {
    return setToggleMobile(!toggleMobile);
  };
  const handleToggleModal = () => {
    return setToggleModal(!toggleModal);
  };

  function handleCheck(event) {
    updateChecked(event.target.checked);
    JSON.parse(window.localStorage.getItem("state")).checked ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  return (
    <header className={styles["navbar-container"]} data-theme={state.theme}>
      <div className={styles["logo-menu"]} onClick={() => handleToggleMobile()} onKeyDown={() => handleToggleMobile()} role="button" tabIndex={0}>
        <figure>
          <IconMenu />
        </figure>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <figure>
            <LogoYard />
          </figure>
        </Link>
      </div>
      <div className={styles["check-container"]}>
        <input type="checkbox" className={styles["checkbox"]} id="checkbox" onChange={handleCheck} />
        <label htmlFor="checkbox" className={styles["label"]}>
          <i className={styles["fa-sun"]}></i>
          <i className={styles["fa-moon"]}></i>
          <div className={styles["ball"]} />
        </label>
      </div>
      <div className={styles["account-state"]}>
        <button onClick={() => handleToggle()} onKeyDown={() => handleToggle()} role="menu">
          {state.userLoggedIn ? state.userLoggedIn : "Invitado"}
        </button>
        <div className={styles.imageCart} width={40} height={40} onClick={() => handleToggleModal()} onKeyDown={() => handleToggleModal()} role="button" tabIndex={0}>
          <Cart />
        </div>
        {state.cart.length > 0 ? <div className={styles["shopping-cart-notification"]}>{state.cart.length}</div> : null}
      </div>
      <div className={styles["modals-container"]}>
        {state.productSelected && <ProductDetail product={state.productSelected} />}
        {toggle && <DesktopMenu handle={handleToggle} />}
        {toggleModal && <ShoppingCart handle={handleToggleModal} />}
      </div>
      {toggleMobile && <MobileMenu handle={handleToggleMobile} />}
    </header>
  );
};

function useTheme(theme) {
  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
      }
    },
    [theme] // Only call again if theme object reference changes
  );
}

export default Header;
