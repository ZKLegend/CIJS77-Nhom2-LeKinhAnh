import React from "react";

const LoginFail = (props) => {  
    if (props.username !== "admin" || props.password !=="admin") {
        props.setIsLoginFail(true);
    }
    return (
        <>
            <h1>Fail Login</h1>
        </>
    )
}

export default LoginFail;