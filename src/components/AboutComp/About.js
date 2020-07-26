import React from 'react'
import './about.css'

function About() {
    return (
        <div className="aboutUs">
            <div className="row">
                <div className="col-md-6">
                <h1 className="headin">I'm Aakash Mangla</h1>
                <h6>Practicing Frontend Developer with a demonstrated history
                of working in the e-learning industry. Skilled in Firebase,
                Python (Programming Language), C++, Management, and Teamwork.
                Strong engineering professional with a BTech focused on Information
                Technology from Bhartiya VidyaPeeth College Of Engineering, New Delhi . </h6>
                </div>
                <div className="col-md-6">
                <img src="/images/me.jpeg" className="my-img"></img>
                </div>      
            </div>            
            
        </div>
    )
}

export default About
