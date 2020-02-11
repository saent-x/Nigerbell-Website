import React from "react"
import Moment from "moment"
import "../styles/footer.css"
import { Icon } from "antd"

export default () => {
  return (
    <div className="footer-container">
      <div className="footer-social-container">
        <div className="footer-social">
          <Icon
            style={{ color: "white" }}
            className="social-icon"
            type="facebook"
          />
        </div>
        <div className="footer-social">
          <Icon
            style={{ color: "white" }}
            className="social-icon"
            type="twitter"
          />
        </div>
        <div className="footer-social">
          <Icon
            style={{ color: "white" }}
            className="social-icon"
            type="linkedin"
          />
        </div>
        <div className="footer-social">
          <Icon
            style={{ color: "white" }}
            className="social-icon"
            type="instagram"
          />
        </div>
      </div>

      <img height="60" width="180" src={require("../assets/icons/logo2.png")} />
      <p style={{ color: "gray", fontSize: "12px", margin: "10px" }}>
        Nigerbell Group® {Moment().format("YYYY")}
      </p>
    </div>
  )
}
