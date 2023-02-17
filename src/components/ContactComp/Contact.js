import React, { Component } from "react";
import "./contact.css";
class Contact extends Component {
  render() {
    return (
      <div>
        <div className="crd-bdy text-secondary">
          <div className="row justify-content-center p-md-5">
            <div className="col-lg-5">
              <img className="my-imgg" src="images/IMG_4440.jpeg"></img>
            </div>
            <div className="col-lg-7">
              <div className="row justify-content-center mt-lg-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  className="loc mb-md-2"
                ></img>
                <h6 className="m-0">Delhi, India</h6>
              </div>
              <h3>Aakash Mangla</h3>
              <h5>Software Engineer</h5>
              <a
                className="cv"
                target="_blank"
                href="/images/Aakash_Mangla_Resume_Final_1.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aakash-mangla-067685170/"
            >
              <img
                className="con-icon"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384889.png"
              ></img>
            </a>
            <a target="_blank" href="https://github.com/Aakashmangla2000">
              <img
                className="con-icon"
                src="https://cdn-icons-png.flaticon.com/512/779/779088.png"
              ></img>
            </a>
            {/* <a target="_blank" href="https://www.instagram.com/aakash_mangla/">
              <img
                className="con-icon"
                src="https://cdn-icons-png.flaticon.com/512/725/725278.png"
              ></img>
            </a> */}
            <a target="_blank" href="mailto:aakashmangla15@gmail.com">
              <img
                className="con-icon"
                src="https://cdn-icons-png.flaticon.com/512/888/888903.png"
              ></img>
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+919654595941&amp;text=Hello I am looking Forward to work with you!"
            >
              <img
                className="con-icon"
                src="https://cdn-icons-png.flaticon.com/512/889/889235.png"
              ></img>
            </a>
            {/* <a target="_blank" href="https://twitter.com/aakashmangla_">
              <img
                className="con-icon"
                src="https://cdn-icons-png.flaticon.com/512/889/889228.png"
              ></img>
            </a> */}
            {/* <a
              target="_blank"
              href="https://www.snapchat.com/add/aakash_mangla"
            >
              <img
                className="con-icon"
                src="https://cdn-icons-png.flaticon.com/512/779/779106.png"
              ></img>
            </a> */}
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Contact;
