import React from 'react';


function Login() {
  return (
    <div className="login-form">
      <div className="text">
        LOGIN
      </div>
      <form>
        <div className="field">
          <div className="fas fa-envelope"></div>
          <input type="text" placeholder="Email or Phone" />
        </div>
        <div className="field">
          <div className="fas fa-lock"></div>
          <input type="password" placeholder="Password" />
        </div>
        <button>LOGIN</button>
        <div className="link">
          Not a member? <a href="#">Signup now</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
