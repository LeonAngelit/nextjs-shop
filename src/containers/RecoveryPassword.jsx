import React from 'react';
import '@styles/Recover.css';
import Logo from '@assets/logos/logo_yard_sale.svg'

const RecoveryPassWord = () =>{

    return(
<div className="recovery-container">
  <span className="recovery-title">
    <img src={Logo} alt="logo yard sale" />
    <h1>Create a new password</h1>
    <p>Enter a new password for your account</p>
  </span>
  <form action="/">
    <label htmlFor="password">Password</label>
    <input type="password" className="input input-password" name="password" placeholder="************" />
    <label htmlFor="password-repeat">Re-enter password</label>
    <input type="password" className="input input-password" name="password-repeat" placeholder="************" />
    <input type="submit" className="primary-button login-button" defaultValue="Confirm" />
  </form>
</div>
    );

};

export default RecoveryPassWord;