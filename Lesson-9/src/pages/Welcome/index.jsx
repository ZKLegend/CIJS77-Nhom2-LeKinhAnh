import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="welcome">
            <h1>Welcome</h1>
            <button onClick ={() => {navigate("/")}}>Back Home</button>
        </div>
    );
};

export default Welcome;