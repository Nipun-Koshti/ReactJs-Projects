import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="h-[80vh] p-5">
      <div className="flex justify-center items-center h-full">
        {username === "" ? (
          <h1>
            Hello there!
            <br />
            You have not logged in.
          </h1>
        ) : (
          <h1>
            Welcome {username}
            <br />    
            You are logged in.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
