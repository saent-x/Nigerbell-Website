import React from "react";
import "../styles/home.css"; //since they both share styles
import Moment from "moment";
import { Icon } from "antd";

export default ({info}) => {
        return (
          <div className="home-headline">
            <div className="home-headline-title">
              <span style={{ marginLeft: "2px" }}>
                <Icon type="info-circle" theme="filled" />
              </span>
            </div>
            <div className="home-headline-information">
              <marquee behaviour="scroll" direction="right">
                {info}
              </marquee>
            </div>
            <div className="home-headline-date">{Moment().format("L")}</div>
          </div>
        );
}