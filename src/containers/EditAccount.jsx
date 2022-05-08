import React from 'react';
import '@styles/EditAccount.css';

const EditAccount = () => {
    return ( 
<div className="edit-account">
  <div className="edit__main-title">
    <h2>My account</h2>
  </div>
  <div className="edit__form-container">
    <label htmlFor="name">Name</label>
    <p>Camila Yokoo</p>
    <label htmlFor="email">Email adress</label>
    <p>camilayokoo@gmail.com</p>
    <label htmlFor="password">Password</label>
    <p>************</p> 
  </div>
  <button className="secondary-button">Edit</button>
</div>
     );
}
 
export default EditAccount;