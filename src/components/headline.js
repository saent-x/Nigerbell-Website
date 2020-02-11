import React from "react";
import "../styles/home.css"; //since they both share styles
import Moment from "moment";
import { Icon } from "antd";

export default class Headline extends React.Component{
    render() {
        return (
          <div className="home-headline">
            <div className="home-headline-title">
              <span style={{ marginLeft: "2px" }}>
                <Icon type="info-circle" theme="filled" />
              </span>
            </div>
            <div className="home-headline-information">
              <marquee behaviour="scroll" direction="right">
                Today marks our 20th anniversary hurray ✨ | We welcome you to
                our annual end of the year party | Join us as we celebrate the
                birthday of our diligent employee.
              </marquee>
            </div>
            <div className="home-headline-date">{Moment().format("L")}</div>
          </div>
        );
    }
}