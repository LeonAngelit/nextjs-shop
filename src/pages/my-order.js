import React, { useContext } from "react";
import TotalOrder from "@containers/TotalOrder";
import styles from "@styles/Checkout.module.scss";
import CheckoutItem from "@components/CheckoutItem";
import AppContext from "@context/AppContext";
import Head from "next/head";
const MyOrder = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles["checkout-container"]}>
        <h2>My order</h2>
        <TotalOrder params={state.selectedOrder.selected ? state.checkouts[state.selectedOrder.value] : state.checkouts[state.checkouts.length - 1]} />
        <ul className={styles.items}>
          {state.selectedOrder.selected
            ? state.checkouts[state.selectedOrder.value].articles.map((product, index) => <CheckoutItem product={product} key={index} />)
            : state.checkouts.length > 0
            ? state.checkouts[state.checkouts.length - 1].articles.map((product, index) => <CheckoutItem product={product} key={index} />)
            : null}
        </ul>
      </div>
    </>
  );
};

export default MyOrder;
