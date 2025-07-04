import React from "react";

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

      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
