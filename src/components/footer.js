import React from "react"
import Moment from "moment"
import "../styles/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  return (
    <div className="footer-container">
      <div className="footer-social-container">
        <div
          title="facebook"
          className="footer-social"
          style={{ backgroundColor: "#3b5999" }}
        >
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "20px" }}
            icon={["fab", "facebook-f"]}
          />
        </div>
        <div
          title="twitter"
          className="footer-social"
          style={{ backgroundColor: "#0084ff" }}
        >
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "20px" }}
            icon={["fab", "twitter"]}
          />
        </div>
        <div
          title="linkedin"
          className="footer-social"
          style={{ backgroundColor: "#0077B5" }}
        >
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "20px" }}
            icon={["fab", "linkedin-in"]}
          />
        </div>
        <div
          title="instagram"
          className="footer-social"
          style={{ backgroundColor: "#e4405f" }}
        >
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "22px" }}
            icon={["fab", "instagram"]}
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
