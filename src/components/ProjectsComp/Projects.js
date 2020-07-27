import React, { Component } from 'react'
import './projects.css'

export class Projects extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            projects: [{"name":"Classic iPod","link":"https://ipod-reactjs.web.app/","vid":"ezgif.com-video-to-gif.gif"},{"name":"Covid-19 Tracker","link":"https://aakashmangla2000.github.io/Covid-19-India-Website/","vid":"ezgif.com-video-to-gif copy.gif"},{"name":"ATTAC","link":"https://docs.google.com/presentation/d/1E0xVpB25lAGZwybCTavIRpZfUZv8Z1R_nCv3VcXBrlo/edit#slide=id.g35f391192_00","vid":"ezgif.com-video-to-gif-3.gif"},{"name":"Tre-Way","link":"https://tre-way.web.app/","vid":"ezgif.com-video-to-gif-2.gif"}],
            active: 0,
            clicked: 0
        }
        this.elementClicked = this.elementClicked.bind(this)
    }

    elementClicked(ind){
        this.setState({
            clicked: ind
        })
    }
    
    render() {

        let proj = this.state.projects.map((el,ind) => {
            return(
                <li className={`${this.state.clicked===ind?'active':''} pro-el text-primary`}><div onMouseEnter={() => this.elementClicked(ind)}>{this.state.projects[ind].name}  <a target="_blank" href={this.state.projects[ind].link}><img className={`${this.state.clicked===ind?'active2':''} im-link`} src="https://image.flaticon.com/icons/svg/922/922124.svg"></img></a></div></li>
            )
        })

        return (
            <div>
                <div className="row ss">
                <div className="col-md-9">
                    {/* <div className="macbook"></div> */}
                    <img className="screen" src={`images/${(this.state.projects[this.state.clicked]).vid}`}></img>
                    <img className="macbook" src="/images/pngflow.com (1).png"></img>
                </div>
                <div className="col-md-3 lss">
                    <ul className="ls">
                        {/* <li><a target="_blank" href="https://ipod-reactjs.web.app/">Classic iPod</a></li>
                        <li><a target="_blank" href="https://aakashmangla2000.github.io/Covid-19-India-Website/">Covid-19 Tracker</a></li>
                        <li><a target="_blank" href="https://docs.google.com/presentation/d/1E0xVpB25lAGZwybCTavIRpZfUZv8Z1R_nCv3VcXBrlo/edit#slide=id.g35f391192_00">ATTAC</a></li>
                        <li><a target="_blank" href="https://tre-way.web.app/">Tre-Way</a></li> */}
                        {proj}
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default Projects

