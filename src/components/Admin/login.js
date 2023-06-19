import React from 'react'
import "../Admin/login.css";
import loginLogo from "./AdminImages/logo.png";
import loginImg from "./AdminImages/login-bg.png"
import {useNavigate} from "react-router-dom"
function Login() {
    let navigate = useNavigate();
    return (
        <div className='main'>
            <div className='main-1'>
                <div className='logo'>
                    <img src={loginLogo} alt="" />
                    <div className='logo-name'>
                        <h1>dravel</h1>
                        <p>Hotel Admin Dashboard</p>
                    </div>
                </div>
                <div className='note'>
                    <h2>Welcome back!</h2>
                    <p>Manage Rooms and Receptionists</p>
                </div>
                <div className='loginImg'>
                    <img src={loginImg} alt="" />
                </div>
            </div>
            <div className='main-2'>
                <div className='form-bx'>
                    <h2>Sign in your Account</h2>
                    <form action="">
                        <h3>Email</h3>
                        <input type="text" required/>
                        <h3>Password</h3>
                        <input type="password" required/><br />
                        <button onClick={() => {navigate('/dashboard')}}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login