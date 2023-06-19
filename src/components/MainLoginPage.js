import React, { Component } from 'react'
import "../components/MainLoginPage.css"
import {useNavigate} from "react-router-dom"

function MainLoginPage(){ 
    let navigate = useNavigate();
        return (
            <div>
                <div className='welcome'>
                    {/* <h1>ZOHO Project</h1> */}
                    <h2>Hotel Management System</h2>
                    <h1></h1>
                </div>
                <div class="m-container">
                    <div class="split m-left hover-left" onClick={() => {navigate('/adminlogin')}}>
                        {/* <img src={hoteladmin} alt="" /> */}
                    </div>
                    <div class="split m-right">
                        {/* <img src={hotelmember} alt="" /> */}
                    </div>
                    <script src="script.js"></script>
                </div>
            </div>
        )
    }
 
export default MainLoginPage;