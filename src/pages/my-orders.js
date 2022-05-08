import React, { useContext } from "react";
import styles from "@styles/MyOrders.module.scss";
import Flechita from "@assets/icons/flechita.svg";
import TotalOrder from "@containers/TotalOrder";
import AppContext from "@context/AppContext";
import Head from "next/head";

const MyOrders = () => {
  const { state } = useContext(AppContext);
  
  return (
    <>
      <Head>
        <title>My Orders</title>
      </Head>
      <div className={styles["orders-container"]}>
        <h2>My orders</h2>
        <ul className={styles["orders-list"]}>
          {state.checkouts.map((checkout, index) => (
            <TotalOrder params={checkout} image={Flechita} index={index} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyOrders;
