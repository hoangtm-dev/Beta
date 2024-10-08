import React from 'react';
import './Loginform.css';
import { FaUser } from 'react-icons/fa';

const Login = () => {
  return (
    <div id = "wrapper">
      <form>
      <h1>Login</h1>
      <div className="input-box">
        <p><b>Username:</b></p>
        <input type="text" placeholder="username" />
      </div>
      <div className="input-box">
        <p><b>Password:</b></p>
        <input type="password" placeholder="password" />
      </div>
      <div className="remember-forgot">
        <label><input type="checkbox" />Remember me</label>
        <a href="#">Need help?</a>
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
    
  );
};

export default Login;
