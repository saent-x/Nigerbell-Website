import React from "react"
import { Carousel, Card } from "antd"
import "../styles/home.css"
import Partners from "../components/partners"
import MapArea from "../components/maparea"
import Headline from "../components/headline"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const { Meta } = Card

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Headline />
        <div autoplay>
          <div className="carousel carousel-slide1">
            <div className="slide-info">
              <h1 className="slide-info-heading">Nigerbell Hearing</h1>
              <p className="slide-info-paragraph">
                Nigerbell is one of Nigeria's most respected Speech and Hearing
                centers with international partners.
              </p>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="home-intro" title="Who we are? and What we do?">
            <div className="home-intro-card">
              <div className="home-intro-image-container">
                <img
                  className="home-intro-image"
                  src={require("../assets/imgs/wwr.jpg")}
                />
                <p>Dr. Bem Vangerwua</p>
                <p> C.E.O Nigerbell Group</p>
              </div>
              <div className="home-intro-card-content">
                <h1 className="home-intro-card-content-header">
                  Who we are? and What we do?
                </h1>
                <p className="home-intro-content-text">
                  We are hearing healthcare experts specializing in the
                  prevention, identification, assessment, treatment and
                  rehabilitation of hearing difficulties in both adults and
                  children.
                  <br />
                  <br />
                  We provide hearing assessments, and hearing aid prescriptions,
                  fittings and adjustments as needed to our patients. We are
                  devoted to improving the quality of life for every person who
                  comes to our clinic. Nigerbell takes pride in its global
                  global partners with loyal and satisfied clients across
                  Nigeria. We are large enough to blend the latest technology
                  with sophisticated design and engineering, while offering the
                  highest level of personalized service.
                </p>
              </div>
            </div>
          </div>
          <h1 className="home-specializations-header">Our Specializations</h1>

          <div className="home-specializations" title="Our Specializations">
            <div className="home-specializations-list">
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Tinnitus Counselling & Management"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Audiometric Calibration"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Hearing Solution Providers"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Ear Moulds"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Audiological Equipment Sales"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Speech Therapy Services"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Ear Care & Hearing Health Care"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Audiological Services"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Hearing Aids Styles"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Hearing Aid Equipment Sales"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Hearing Aid Repairs and Services"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Hearing Aid Accessories Sales"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Hearing Aids Consumable Sales"
                />
              </Card>
              <Card hoverable className="cardStyleII">
                <Meta
                  className="home-specializations-list-item"
                  description="Ear Conservation Project"
                />
              </Card>
            </div>
          </div>
        </div>
        <div className="home-articles">
          <h1 className="home-article-header">Articles</h1>
          <div className="home-short-info">
            <Card
              hoverable
              className="cardStyle"
              cover={
                <img
                  alt="example"
                  height="200"
                  src={require("../assets/imgs/tem1.jpg")}
                />
              }
            >
              <Meta
                className="home-article-content"
                title="Cochlear Implants"
                description="Cochlear implants are designed for people with severe-to-profound sensorineural hearing loss. With this type of hearing loss, the hair cells in the inner ear are damaged, and can’t detect sounds properly. A cochlear implant bypasses these damaged hair cells and sends electric signals to the brain, where they are interpreted as sound."
              />
            </Card>
            <Card
              hoverable
              className="cardStyle"
              cover={
                <img
                  alt="example"
                  height="200"
                  src={require("../assets/imgs/tem2.jpg")}
                />
              }
            >
              <Meta
                className="home-article-content"
                title="Products"
                description="WIDEX DREAM allows more sound in than any other hearing aid so you can hear more details of the world around you – and in a way that’s as true-to-life as technology allows. Even in noisy environments such as parties, sport events or at the cinema."
              />
            </Card>
            <Card
              hoverable
              className="cardStyle"
              cover={
                <img
                  alt="example"
                  height="200"
                  src={require("../assets/imgs/tem3.jpg")}
                />
              }
            >
              <Meta
                className="home-article-content"
                title="Consulting"
                description="Probably the best way to start with us is to book an appointment to see one of our audiologists. You will be asked for details about the hearing problems you have including any relevant information about your health history in general."
              />
            </Card>
          </div>
        </div>
        <Partners />
        <MapArea />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "data" }
        name: { eq: "specializations" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              specializations
            }
          }
        }
      }
    }
  }
`
