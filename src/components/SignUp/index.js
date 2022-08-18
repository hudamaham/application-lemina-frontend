import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRegisterMutation } from "../../app/auth/auth.service";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register] = useRegisterMutation();
  return (
    <div class="login d-flex flex-column">
      <h1>Sign up</h1>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          register({
            username: username,
            password: password,
            confirmpassword: confirmPassword,
          });
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required="required"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required="required"
        />
        <input
          type="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required="required"
        />
        <button class="btn btn-primary btn-block btn-large" type="submit">
          Sign up
        </button>
        <NavLink to="/login">
          <button class="btn btn-success btn-block btn-large  mt-3">
            Login
          </button>
        </NavLink>
      </form>
    </div>
  );
}
