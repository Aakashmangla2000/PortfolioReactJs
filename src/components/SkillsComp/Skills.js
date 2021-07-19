import React, { Component } from 'react'
import './skills.css'

export class Skills extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             skills:[
                {
                    "name":"Programming Languages",
                    "sub": [
                        {
                            "name":"C++",
                            "val": 90
                        },
                        {
                            "name":"JavaScript",
                            "val": 90
                        },
                        {
                            "name":"C#",
                            "val": 85
                        },
                        {
                            "name":"Python",
                            "val": 70
                        }
                    ],
                    "link": "https://image.flaticon.com/icons/svg/3176/3176336.svg"
                },
                {
                    "name":"Front-End",
                    "sub": [
                        {
                            "name":"HTML",
                            "val": 90
                        },
                        {
                            "name":"CSS",
                            "val": 80
                        },
                        {
                            "name":"React.Js",
                            "val": 80
                        },
                        {
                            "name":"Redux",
                            "val": 60
                        }
                    ],
                    "link": "https://image.flaticon.com/icons/svg/646/646460.svg"
                },
                {
                    "name":"Back-End",
                    "sub": [
                        {
                            "name":"Node.Js",
                            "val": 80
                        },
                        {
                            "name":".NET",
                            "val": 70
                        },
                        {
                            "name":"REST API",
                            "val": 90
                        },
                        {
                            "name":"SQL/No-SQL",
                            "val": 80
                        }
                    ],
                    "link": "https://image.flaticon.com/icons/svg/2165/2165703.svg"
                }
             ],
             index: 0
        }
        this.hoverElement = this.hoverElement.bind(this)
    }


    hoverElement(ind){
        this.setState({
            index: ind
        })
    }

    render() {
        let cols = ['red','blue','green','orange']

        let list = this.state.skills[this.state.index].sub.map((el,ind) => {
            return(
                <div class="single-chart">
                    {/* <h6>{el.name}</h6> */}
                    <svg viewBox="0 0 36 36" class={`circular-chart ${cols[ind]}`}>
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray={`${el.val}, 100`}
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">{el.name}</text>
                    </svg>
                </div>
            )
        })

        let list2 = this.state.skills.map((el,ind) => {
            return(
                <div className="left-list" onMouseEnter={() => {this.hoverElement(ind)}}><li><h4>{el.name} <img className="logo" src={el.link}></img></h4></li></div>
            )
        })
        return (
            <div>
                <div className="flex-wrapper justify-content-center">
                <div className="row">
                    <div className="col-md-9 justify-content-center left-side">
                        <ul>
                            {list2}
                        </ul>
                    </div>
                    <div className="col-md-3 right-side">
                        {/* <div className="row"> */}
                            {list}
                        {/* </div> */}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Skills
