import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <form action="" method="post">
      <h3>Sign In</h3>

      <div>
        <label>Email</label>
        <input type="text" name="email" placeholder="Enter Email" />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id=""
        />
      </div>

      <Link to="/jobs">
        <button type="submit">Login</button>
      </Link>
    </form>
  );
};

export default SignIn;
