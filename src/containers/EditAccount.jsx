import React, {useContext} from "react";
import styles from "@styles/EditAccount.module.scss";
import AppContext from "@context/AppContext";

const EditAccount = () => {
  const { state } = useContext(AppContext);
  return (
    <div className={styles["edit-account"]}>
      <div className={styles["edit__main-title"]}>
        <h2>My account</h2>
      </div>

     
      
        <div className={styles["edit__form-container"]}>
        {state.userLoggedIn ? (
          <>
          <label htmlFor="name">Name</label>
          <p>Camila Yokoo</p>
          <label htmlFor="email">Email adress</label>
          <p>camilayokoo@gmail.com</p>
          <label htmlFor="password">Password</label>
          <p>************</p> 
          </>)  : (
            <p>Usuario Invitado</p>
          )}
        </div>
     

      {state.userLoggedIn && <button className={styles["secondary-button"]}>Edit</button>}
    </div>
  );
};

export default EditAccount;
