import React, { useState } from "react";
import Login from "./components/LoginComponent/Login";
import Dashboard from "./components/LoginComponent/Dashboard";
import LoginFailed from "./components/LoginComponent/LoginFailed";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  return (
  <>
    <h1>Welcome to React Vite Micro App!</h1>
    { isLogin === true ? <Login setIsLogin={setIsLogin}/> : null}
    { isLogin === false ? <Dashboard/> : null}
    { isLoginFailed === true ? <LoginFailed setIsLoginFailed={setIsLoginFailed}/> : null}
  </>
  )
};

export default App;
