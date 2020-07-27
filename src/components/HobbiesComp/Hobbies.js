import React, { Component } from 'react'
import './hobbies.css'

class Hobbies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             index:0,
             imgs: ['BEDE4C6F-B72F-4FAE-A0F4-8241067A55E8_1_105_c.jpeg','IMG_8078.jpeg','IMG_7860.jpeg'],
             hob: ['Rubiks Cube','Cooking','Photography']
        }
        this.clicked = this.clicked.bind(this)
    }

    clicked(i){
        if(this.state.index+i<=2&&this.state.index+i>=0)
        this.setState({
            index: this.state.index+i
        })
        else if(this.state.index+i<0)
        this.setState({
            index: 2
        })
        else
        this.setState({
            index: 0
        })
        console.log(this.state.index)
    }
    
    render() {
        return (
            <div>
                <div className="car-body">
                <img src={`images/${this.state.imgs[this.state.index]}`} className="car-img"></img>
                <h5 className="headingg">{this.state.hob[this.state.index]}</h5>
                <div  onClick={() => this.clicked(1)} ><img src="https://image.flaticon.com/icons/svg/929/929736.svg"className="butn1"></img></div>
                <div onClick={() => this.clicked(-1)} ><img src="https://image.flaticon.com/icons/svg/929/929731.svg" className="butn2"></img></div>
                </div>
            </div>
        )
    }
}

export default Hobbies
