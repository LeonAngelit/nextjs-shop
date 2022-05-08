import React from "react";
import styles from "@styles/EditAccount.module.scss";
import Head from "next/head";

const EditAccount = () => {
  return (
    <>
      <Head>
        <title>My account</title>
      </Head>
      <div className={styles["edit-account"]}>
        <div className={styles["edit__main-title"]}>
          <h2>My account</h2>
        </div>
        <div className={styles["edit__form-container"]}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <p>Camila Yokoo</p>
          <label className={styles.label} htmlFor="email">
            Email adress
          </label>
          <p>camilayokoo@gmail.com</p>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <p>************</p>
        </div>
        <button className={styles["secondary-button"]}>Edit</button>
      </div>
    </>
  );
};

export default EditAccount;
