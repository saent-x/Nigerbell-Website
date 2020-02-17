import React from "react"
import Layout from "../components/layout"
import "../styles/contact.css"
import { Button, Row, Col, Icon } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkedAlt, faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import "../styles/global.scss"

export default ({ data }) => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-input">
          <h1 className="title is-2">
            SEND US A MESSAGE <p className="tick">*</p>
          </h1>
          <input
            className="input is-medium contact-textbox"
            placeholder="Type your full name"
          />
          <input
            className="input is-medium contact-textbox"
            placeholder="Email"
          />
            <textarea
              style={{ minHeight: "200px", minWidth: "0px" }}
              className="textarea is-medium contact-textbox"
              placeholder="Message"
            />
          <br />
          <button class="button is-large is-danger">
            <span class="icon is-medium">
              <FontAwesomeIcon
                style={{ fontSize: "25px", color: "white" }}
                icon={faEnvelope}
              />
            </span>
            <span>SEND TO US!</span>
          </button>
        </div>
        <div className="contact-address">
          <h1 style={{ color: "black" }} className="title is-2">
            DROP IN OUR OFFICE <p className="tick">*</p>
          </h1>
          <br />
          <p style={{ color: "black" }} className="subtitle is-5">
            Our office is located in a beautiful building inside the busiest and
            fast-growing city.
          </p>
          <br />
          <div>
            <Row style={{ marginTop: "5px", marginBottom: "5px" }}>
              <Col span={3}>
                <FontAwesomeIcon
                  style={{ fontSize: "15px", color: "black" }}
                  icon={faMapMarkedAlt}
                />
              </Col>
              <Col span={21}>
                <h3 style={{ color: "black" }} className="subtitle is-6">
                  Agidingbi, Ikeja, Lagos State
                </h3>
              </Col>
            </Row>
            <Row style={{ marginTop: "5px", marginBottom: "5px" }}>
              <Col span={3}>
                <FontAwesomeIcon
                  style={{ fontSize: "15px", color: "black" }}
                  icon={faEnvelope}
                />
              </Col>
              <Col span={21}>
                <h3 style={{ color: "black" }} className="subtitle is-6">
                  office@nigerbellhearing.com
                </h3>
              </Col>
            </Row>
            <Row style={{ marginTop: "5px", marginBottom: "5px" }}>
              <Col span={3}>
                <FontAwesomeIcon
                  style={{ fontSize: "15px", color: "black" }}
                  icon={faPhoneVolume}
                />{" "}
              </Col>
              <Col span={21}>
                <h3 style={{ color: "black" }} className="subtitle is-6">
                  + (234) 802-3011-988
                </h3>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Layout>
  )
}
