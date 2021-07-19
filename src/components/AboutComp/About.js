import React from 'react'
import './about.css'

function About() {
    return (
        <div className="aboutUs">
            <div className="row">
                <div className="col-md-6 leftside">
                <h1 className="headin">Hi, I'm Aakash Mangla</h1>
                <h6>Dedicated Engineering professional with history of meeting company goals utilizing consistent and organized practices. 
                    Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand. </h6>
                </div>
                <div className="col-md-6">
                <img src="/images/me.jpeg" className="my-img"></img>
                </div>      
            </div>            
            
        </div>
    )
}

export default About
