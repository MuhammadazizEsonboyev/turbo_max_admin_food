import React from "react";
import { names } from "../DynamicNav";
import "..//Bobur.css";
const imgLogo = require("..//Img/logo 1.png");
const imgGithub = require("..//Img/Group 1.png");
function HeaderOne() {
  let style = {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    alignItems: "center",
    textAlign: "center",
    color: "#666666",
    // marginRight:"30px"
  };
  return (
    <section>
      <div className="container">
        <div className="row justify-content-between mt-5">
          <div className="col-3">
            <img src={imgLogo} alt="" />
          </div>
          {names.map((item) => (
            <div className="col-1">
              <h3 className="list_item" style={style}>
                {item.name}
              </h3>
            </div>
          ))}
          <div className="col-4">
            <img
              style={{ marginLeft: "250px", alignItems: "center" }}
              src={imgGithub}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="hi">
        <div className="container">
          <div className="row  justify-content-between">
            <div className="col-4">
              <h1 className="myName">
                Hi 👋, <br /> My name is
                <br /> <span>Bobur</span> <br /> I build things for web
              </h1>
            </div>
            <div className="col-4">
              <img
                className="img1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzIq4r7hMBI4xAD3Cx0wWmWGOasJWRs0pKw&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <h1 className="my">My Tech Stack</h1>
              <br />
              <p className="teach">
                Technologies I’ve been working with recently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderOne;
