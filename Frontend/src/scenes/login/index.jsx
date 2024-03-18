import React from 'react';

function LoginPage() {
  return (
    <div className="login-pagee">
      <div className="login-containerr">
        <h1 className="login-titlee">Login</h1>
        <form className="login-formm">
          <div className="form-groupp">
            <label htmlFor="username" className="form-labell">Username</label>
            <input type="text" id="username" className="form-inputt" />
          </div>
          <div className="form-groupp">
            <label htmlFor="password" className="form-labell">Password</label>
            <input type="password" id="password" className="form-inputt" />
          </div>
          <div className="form-buttons">
            <button type="submit" className="login-buttonn">Login</button>
            <button type="reset" className="reset-buttonn">Reset</button>
            <a href="/signup" className="signup-buttonn">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
