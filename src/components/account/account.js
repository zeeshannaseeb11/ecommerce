import React from "react";
import Login from "./login";
import Register from "./register";

const Account = () => {
  return (
    <div className="account">
      <span>My Account</span>
      <div className="account-container">
        <div className="account-container-login">
          <h2>Login</h2>
          <Login />
        </div>

        <div className="account-container-register">
          <h2>Register</h2>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Account;
