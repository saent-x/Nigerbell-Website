import React from "react"
import Layout from "../components/layout"
import "../styles/contact.css"
import { Input, Button, Row, Col, Icon } from "antd"

export default ({ data }) => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-input">
          <h1 className="contact-header">
            SEND US A MESSAGE <p className="tick">*</p>
          </h1>
          <input
            className="contact-textbox"
            placeholder="Type your full name"
          />
          <input className="contact-textbox" placeholder="Email" />
          <textarea
            style={{ minHeight: "200px" }}
            className="contact-textbox"
            placeholder="Message"
          />
          <br />
          <Button className="contact-btn" type="dashed" size="large">
            SEND TO US!
          </Button>
        </div>
        <div className="contact-address">
          <h1 style={{ color: "black" }} className="contact-header">
            DROP IN OUR OFFICE <p className="tick">*</p>
          </h1>
          <p className="contact-address-info">
            Our office is located in a beautiful building inside the busiest and
            fast-growing city.
          </p>
          <br />
          <div>
            <Row>
              <Col span={3}>
                <Icon
                  style={{ fontSize: "15px", color: "red" }}
                  type="heat-map"
                />{" "}
              </Col>
              <Col span={21}>
                <h3 className="contact-text">Agidingbi, Ikeja, Lagos State</h3>
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <Icon
                  style={{ fontSize: "15px", color: "red" }}
                  type="message"
                />
              </Col>
              <Col span={21}>
                <h3 className="contact-text">office@nigerbellhearing.com</h3>
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <Icon style={{ fontSize: "15px", color: "red" }} type="phone" />
              </Col>
              <Col span={21}>
                <h3 className="contact-text">(+234) 802-3011-988</h3>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Layout>
  )
}
