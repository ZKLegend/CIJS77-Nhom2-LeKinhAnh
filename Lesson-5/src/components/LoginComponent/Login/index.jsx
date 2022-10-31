import React, {useState} from "react";
import './index.css';

const Login = (props) => {
    const [user, setUser] = useState({username: "", password: ""});

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (user.username === "admin" && user.password ==="admin") {
            props.setIsLogin(false);
        }

        else {
            props.setIsLoginFailed(true);
        }
        
        console.log(user.username);
        console.log(user.password);
        setUser({...user, username: ""});
        setUser({...user, password: ""});
    }

    
    const handleUserNameChange = (event) => {
        setUser({...user, username: event.target.value});
    }

    const handlePasswordChange = (event) => {
        setUser({...user, password: event.target.value});
    }
    // Có cách nào gom 2 function trên lại thành 1 function chung?


    return (
    <form onSubmit={handleSubmit}>
    <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
    </div>

    <div className="container">
    <label forhtml="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" value = {user.username} onChange = {handleUserNameChange} required/>

    <label forhtml="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value = {user.password} onChange = {handlePasswordChange} required/>

    <button type="submit">Login</button>
    <label>
    <input type="checkbox" name="remember" /> Remember me
    </label>
    </div>

    <div className="container">
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
    </form>
    )
}

export default Login;