import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h1>This is profile page</h1>
            <Link to="/profile/aboutme">About Me</Link>
            <br/>
            <Link to="/profile/contact">Contact</Link>
            <Outlet />
        </div>
    )
}

export default Profile;