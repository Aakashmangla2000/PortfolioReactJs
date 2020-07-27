import React, { Component } from 'react'
import './dock.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Projects from '../ProjectsComp/Projects';

class Dock extends Component {
    render() {
        return (
            <div className="pers">
                <div id="dock-container">
                    <div id="dock">
                    <ul>
                        <li>
                            <span>About</span>
                            <Link to="/"><img src="https://image.flaticon.com/icons/svg/2948/2948241.svg"/></Link>
                        </li>
                        <li>
                            <span>Projects</span>
                            <Link to="/projects"><img src="https://image.flaticon.com/icons/svg/3247/3247963.svg"/></Link>
                        </li>
                        <li>
                            <span>Skills</span>
                            <Link to="/skills"><img src="https://image.flaticon.com/icons/svg/3079/3079012.svg"/></Link>
                        </li>
                        {/* <li>
                            <span>Experience</span>
                            <Link to="/experience"><img src="https://image.flaticon.com/icons/svg/2941/2941556.svg"/></Link>
                        </li> */}
                        <li>
                            <span>Hobbies</span>
                            <Link to="/hobbies"><img src="https://image.flaticon.com/icons/svg/2917/2917633.svg"/></Link>
                        </li>
                        <li>
                            <span>Contact</span>
                            <Link to="/contact"><img src="https://image.flaticon.com/icons/svg/2991/2991633.svg"/></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dock
