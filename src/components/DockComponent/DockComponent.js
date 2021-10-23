import React, { Component } from "react";
import "./dock.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "../ProjectsComp/Projects";

class Dock extends Component {
  render() {
    return (
      <div className="pers">
        <div id="dock-container">
          <div id="dock">
            <ul>
              <li>
                <span>About</span>
                <Link to="/">
                  <img src="https://cdn-icons-png.flaticon.com/512/2948/2948241.png" />
                </Link>
              </li>
              <li>
                <span>Projects</span>
                <Link to="/projects">
                  <img src="https://cdn-icons-png.flaticon.com/512/3067/3067513.png" />
                </Link>
              </li>
              <li>
                <span>Skills</span>
                <Link to="/skills">
                  <img src="https://cdn-icons-png.flaticon.com/512/2444/2444277.png" />
                </Link>
              </li>
              <li>
                <span>Experience</span>
                <Link to="/experience">
                  <img src="https://cdn-icons-png.flaticon.com/512/4333/4333864.png" />
                </Link>
              </li>
              <li>
                <span>Achievements</span>
                <Link to="/achievements">
                  <img src="https://cdn-icons-png.flaticon.com/512/893/893899.png" />
                </Link>
              </li>
              <li>
                <span>Hobbies</span>
                <Link to="/hobbies">
                  <img src="https://cdn-icons-png.flaticon.com/512/2917/2917633.png" />
                </Link>
              </li>
              <li>
                <span>Contact</span>
                <Link to="/contact">
                  <img src="https://cdn-icons-png.flaticon.com/512/2991/2991633.png" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dock;
