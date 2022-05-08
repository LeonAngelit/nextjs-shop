import React from "react";
import '@styles/CreateAccount.css';

const CreateAccount = () =>{
    return(
 <div className="create-account">
  <div className="create__main-title">
    <h2>My account</h2>
  </div>
  <form action="/">
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" className="input input-password" name="name" id="name" placeholder="name" />
      <label htmlFor="email">Email adress</label>
      <input type="text" className="input input-password" name="email" placeholder="enter your email" />
      <label htmlFor="password">Password</label>
      <input type="password" className="input input-password" name="password" placeholder="************" />
    </div>
    <input type="submit" className="primary-button login-button" defaultValue="Create account" />
  </form>
</div>
    );

}

export default CreateAccount;