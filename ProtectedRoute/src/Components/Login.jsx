import React from "react";
import { useUser } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {user, setUser} = useUser();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();

    if (!user.name || !user.password) {
      alert("please enter the value");
      return;
    }

    localStorage.setItem("userDetails", user);
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handelLogin}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Enter the name"
          />
        </div>

        <div>
          <label htmlFor="pass"></label>
          <input
            type="password"
            id="pass"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter the password"
          />
        </div>

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
