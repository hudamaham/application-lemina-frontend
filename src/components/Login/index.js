import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { useLoginMutation } from "../../app/auth/auth.service";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  return (
    <div class="login d-flex flex-column">
      <h1>Login</h1>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          login({ username: username, password: password });
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
        <button class="btn btn-primary btn-block btn-large" type="submit">
          Connecter
        </button>
        <NavLink to="/signup">
          <button class="btn btn-success btn-block btn-large  mt-3">
            Sign up
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
