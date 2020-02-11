import React from "react";
import "../styles/partners.css";

export default class Partners extends React.Component {
  render() {
    return (
      <div className="partners-container">
        <h1 className="partners-header">Partners</h1>
        <div className="partners-logos">
          <img
            style={{ margin: "10px" }}
            width="150"
            src={require("../assets/icons/pat1.png")}
          />
          <img
            style={{ margin: "10px" }}
            width="150"
            src={require("../assets/icons/pat2.png")}
          />
          <img
            style={{ margin: "10px" }}
            width="150"
            src={require("../assets/icons/pat3.png")}
          />
          <img
            style={{ margin: "10px" }}
            width="150"
            src={require("../assets/icons/pat4.png")}
          />
          <img
            style={{ margin: "10px" }}
            width="150"
            src={require("../assets/icons/pat5.png")}
          />
          <img
            style={{ margin: "10px" }}
            width="150"
            src={require("../assets/icons/pat6.png")}
          />
          <img
            style={{ margin: "10px" }}
            width="150"
            src={require("../assets/icons/pat7.png")}
          />
        </div>
      </div>
    );
  }
}
