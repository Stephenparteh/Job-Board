import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <form action="" method="post">
      <h3>Sign Up</h3>

      <div>
        <label>Full Name</label>
        <input type="text" name="full_name" placeholder="Enter Full Name" />
      </div>
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
      <div>
        <label>Role</label>
        <input type="radio" name="job_seeker" id="job_seeker" /> Job Seeker
        <input type="radio" name="employer" id="employer" /> Employer
      </div>

      <Link to="/login">
        <button type="submit">Sign Up</button>
      </Link>
    </form>
  );
};

export default SignUp;
