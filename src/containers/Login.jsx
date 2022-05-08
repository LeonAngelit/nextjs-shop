import React, {useRef} from "react";
import '@styles/Login.css';
import logo from '@assets/logos/logo_yard_sale.svg';

const Login = () =>{
  const form = useRef(null);
  const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }

    console.log(data);
  }
    return(
<div className="login-container">
  <span className="login-title">
    <img src={logo} alt="logo yard sale" />
  </span>
  <form ref={form}>
    <label htmlFor="email">Email address</label>
    <input type="text" className="input input-password" name="email" placeholder="enter your email" />
    <label htmlFor="password">Password</label>
    <input type="password" className="input input-password" name="password" placeholder="************" />
    <button className="primary-button" onClick={handleSubmit}>
      Log in
    </button>
    <a className="forgot" href>Forgot my password</a>
  </form>
  <button className="secondary-button">Sign up</button>
</div>
    );
}

export default Login;

