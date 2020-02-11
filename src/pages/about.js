import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/about.css"

export default ({ data }) => {
  const obj = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <div className="about-container">
        <div className="about-jumbo">
          <h1 className="about-jumbo-header">ABOUT US</h1>
          <div className="about-jumbo-profile">
            <img
              className="about-profile-img"
              src={require("../assets/icons/logo.png")}
            />
            <div className="about-profile-name">
              <p className="about-company-name">Nigerbell Group</p>
              <p className="about-company-rep">Dr. Vangerwua Barnabas</p>
            </div>
          </div>
        </div>
        <div className="about-content">
          <p className="about-content-text">
            <span className="about-first-letter">We</span> are hearing
            healthcare experts specializing in the prevention, identification,
            assessment, treatment and rehabilitation of hearing difficulties in
            both adults and children. We provide hearing assessments, and
            hearing aid prescriptions, fittings and adjustments as needed to our
            patients.
            <br />
            <br />
            We are devoted to improving the quality of life for every person who
            comes to our clinic. Tapping the diverse technologies of all our
            partners arround the world, we effectively apply our resources to
            support hearing care professionals and to provide high-tech
            solutions that meet the hearing and cosmetic preferences of each
            patient. Niger Bell takes pride in its global global partners with
            loyal and satisfied clients across Nigeria.
            <br />
            <br />
            We are large enough to blend the latest technology with
            sophisticated design and engineering, while offering the highest
            level of personalized service.
          </p>
          <br />
          <h1
            style={{
              fontSize: "35px",
              color: "#903",
              backgroundColor: "gray",
            }}
            className="about-jumbo-header"
          >
            OUR SPECIALIZATION
          </h1>
          <div className="about-specializations">
            <ul className="about-spec-list">
              {obj.specializations.map((i, key) => (
                  <li key={key} className="about-spec-list-item">
                      {i}
                </li>
              ))}
            </ul>
            
          </div>
        </div>
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
