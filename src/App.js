import React from 'react';
import logo from './logo.svg';
import './App.css';
import DockComponent from './components/DockComponent/DockComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './components/ProjectsComp/Projects';
import About from './components/AboutComp/About';
import Skills from './components/SkillsComp/Skills';
import Experience from './components/ExperienceComp/Experience';
import Hobbies from './components/HobbiesComp/Hobbies';
import Contact from './components/ContactComp/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="main-body">
      <Route path='/projects' exact strict render><Projects/></Route>
    <Route path='/' exact strict render><About/></Route>
    <Route path='/skills' exact strict render><Skills/></Route>
    <Route path='/experience' exact strict render><Experience/></Route>
    <Route path='/hobbies' exact strict render><Hobbies/></Route>
    <Route path='/contact' exact strict render><Contact/></Route>
      </div>
    
      <DockComponent/>
    </div>
    </Router>
  );
}

export default App;
