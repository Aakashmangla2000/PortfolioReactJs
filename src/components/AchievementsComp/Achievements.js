import React, { Component } from 'react'
import './achievements.css'

class Achievements extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ach: [
                 {
                     "name":"National Record Holder for Rubiks Cube",
                     "desc":"I broke the Indian National Record for the fastest time to solve Rubik’s cube with feet with a time of 33.84 seconds at a WCA recognised competition held at Shri Ram College of Commerce.",
                     "month":"Nov",
                     "year":"2017",
                     "img":"13-130273_rubiks-cube-background.jpg"
                 },
                 {
                     "name":"First Runner Up at HackIT19",
                     "desc":"700+ teams registered from all over INDIA and 30 teams were selected. Out of which by the process of elimination 12 teams were finalised which pitched their ideas in front of the judges and we secured 2nd position.",
                     "month":"Oct",
                     "year":"2019",
                     "img":"photo-1461749280684-dccba630e2f6.jpg"
                 },
                 {
                    "name":"1st Prize winner at ENCON",
                    "desc":"Projects from various schools from delhi were exhibited at ENCON held at SVC Delhi and our project was awarded the first prize. Our project was named ATTAC and it was an improvised design which uses RECYCLED WATER FILTERS to purify air.",
                    "month":"Jan",
                    "year":"2017",
                    "img":"2081946.jpg"
                }
             ]
        }
    }
    
    render() {
        
        let achievements = this.state.ach.map((el,ind) => {
            return(
                <div class="example-2 card">
                    <img className="back" src={`images/${el.img}`}></img>
                    <div class="wrapper">
                    <div class="header">
                        <div class="date">
                        {/* <span class="day">12 </span> */}
                        <span class="month">{el.month} </span>
                        <span class="year">{el.year}</span>
                        </div>
                    </div>
                    <div class="data">
                        <div class="content">
                        {/* <span class="author">Jane Doe</span> */}
                        <h8 class="title">{el.name}</h8>
                        <p class="text">{el.desc}</p>
                        {/* <a href="#" class="button">Read more</a> */}
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
            <div className="chck">
                    {achievements}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
            </div>
        )
    }
}

export default Achievements
