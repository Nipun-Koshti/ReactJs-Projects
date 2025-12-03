import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Checker = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("userDetails") || null
  );

  const navigate = useNavigate();

  const handelLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("userDetails");
      setIsLoggedIn(null);
      navigate("/login");
    }else{
        navigate("/login");
    }
  };
  return (
    <div>
      <nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>Test</h1>
          <button onClick={handelLogout}>
            {isLoggedIn == null ? "LogIn" : "logout"}
          </button>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Checker;
