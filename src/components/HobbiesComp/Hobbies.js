import React, { Component } from "react";
import "./hobbies.css";
import { fadeIn } from "react-animations";

class Hobbies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      imgs: [
        "BEDE4C6F-B72F-4FAE-A0F4-8241067A55E8_1_105_c.jpeg",
        "IMG_8078.jpeg",
        "IMG_7860.jpeg",
      ],
      hob: [
        {
          name: "Cubing",
          link: "https://cdn-icons-png.flaticon.com/512/2532/2532683.png",
          img: "BEDE4C6F-B72F-4FAE-A0F4-8241067A55E8_1_105_c.jpeg",
        },
        {
          name: "Cooking",
          link: "https://cdn-icons-png.flaticon.com/512/817/817282.png",
          img: "IMG_8078.jpeg",
        },
        {
          name: "Photography",
          link: "https://cdn-icons-png.flaticon.com/512/2990/2990729.png",
          img: "IMG_7860.jpeg",
        },
        {
          name: "Music",
          link: "https://cdn-icons-png.flaticon.com/512/3010/3010957.png",
          img: "IMG_6522.jpeg",
        },
        {
          name: "Art",
          link: "https://cdn-icons-png.flaticon.com/512/2972/2972213.png",
          img: "DDCL0803.jpeg",
        },
      ],
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked(i) {
    if (this.state.index + i <= 2 && this.state.index + i >= 0)
      this.setState({
        index: this.state.index + i,
      });
    else if (this.state.index + i < 0)
      this.setState({
        index: 2,
      });
    else
      this.setState({
        index: 0,
      });
    console.log(this.state.index);
  }

  setIndex(i) {
    this.setState({
      index: i,
    });
  }

  render() {
    let hobbies = this.state.hob.map((el, ind) => {
      return (
        <div className="hob-list">
          <li className="li-item" onMouseEnter={() => this.setIndex(ind)}>
            <h7>
              {el.name}{" "}
              <img className="hob-logo animate__fadeIn" src={el.link}></img>
            </h7>
          </li>
        </div>
      );
    });
    return (
      <div>
        {/* <div className="car-body">
                <img src={`images/${this.state.imgs[this.state.index]}`} className="car-img"></img>
                <h5 className="headingg">{this.state.hob[this.state.index]}</h5>
                <div  onClick={() => this.clicked(1)} ><img src="https://cdn-icons-png.flaticon.com/512/929/929736.png"className="butn1"></img></div>
                <div onClick={() => this.clicked(-1)} ><img src="https://cdn-icons-png.flaticon.com/512/929/929731.png" className="butn2"></img></div>
                </div> */}
        <div className="row rr">
          <div className="col-md-6">
            <ul>{hobbies}</ul>
          </div>
          <div className="col-md-6">
            <div className="photo-frame">
              <img
                className="photo"
                src={`images/${this.state.hob[this.state.index].img}`}
              ></img>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Hobbies;
