import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Posts from "./Posts";
import LoginSignUp from "./LoginSignUpLogic";

const Main = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : null
  }, [token]);

  return (
    
    <div>
      <LoginSignUp 
        isLoggedIn={isLoggedIn}
        setToken={setToken}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        />
      <Posts />
    </div>
  );
};

export default Main;
