import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/about.css"

export default ({ data }) => {
  const specializations =
    data.fetchSpecializations.edges[0].node.childMarkdownRemark.frontmatter
      .specializations
  const aboutdata =
    data.fetchAboutPage.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <div className="about-container">
        <div className="about-jumbo">
          <h1 className="about-jumbo-header">ABOUT US</h1>
          <div className="about-jumbo-profile">
            <img className="about-profile-img" src={aboutdata.image} />
            <div className="about-profile-name">
              <p className="about-company-name">{aboutdata.author}</p>
              <p className="about-company-rep">{aboutdata.jobtitle}</p>
            </div>
          </div>
        </div>
        <div className="about-content">
          <div dangerouslySetInnerHTML={{ __html: aboutdata.content }} />
          <br />
          <h1 className="about-spec-header about-jumbo-header">
            OUR SPECIALIZATION
          </h1>
          <div className="about-specializations">
            {specializations.map((i, key) => (
              <div key={key} className="box cardStyleII">
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    fetchSpecializations: allFile(
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
    fetchAboutPage: allFile(
      filter: { sourceInstanceName: { eq: "data" }, name: { eq: "aboutpage" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              image
              author
              jobtitle
              title
              content
            }
          }
        }
      }
    }
  }
`
