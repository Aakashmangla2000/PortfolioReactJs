import React from 'react'
import './about.css'

function About() {
    return (
        <div className="aboutUs">
            <div className="row">
                <div className="col-md-6 leftside">
                <h1 className="headin text-primary">Hi, I'm Aakash Mangla</h1>
                <h6>Full Stack develeoper based in Delhi. Skilled in MERN Stack,
                Python, C++, Management, and Teamwork.
                Strong engineering professional with a B.Tech focused on Information
                Technology from Bhartiya Vidyapeeth College Of Engineering, New Delhi. </h6>
                </div>
                <div className="col-md-6">
                <img src="/images/me.jpeg" className="my-img"></img>
                </div>      
            </div>            
            
        </div>
    )
}

export default About
