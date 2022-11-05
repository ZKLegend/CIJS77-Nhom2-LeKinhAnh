import React, { useState } from "react";
import Login from "./components/LoginComponent/Login";
import Dashboard from "./components/LoginComponent/Dashboard";
import LoginFail from "./components/LoginComponent/LoginFail";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoginFail, setIsLoginFail] = useState(false);

  return (
  <>
    <h1>Welcome to React Vite Micro App!</h1>
    { isLogin === true && isLoginFail === false ? <Login setIsLogin={setIsLogin} setIsLoginFail={setIsLoginFail}/> : null}
    { isLogin === false ? <Dashboard/> : null}
    { isLoginFail === true ? <LoginFail /> : null}
    {/* Chưa làm được Login Fail */}
  </>
  )
};

export default App;
