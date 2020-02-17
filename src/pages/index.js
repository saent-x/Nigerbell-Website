import React from "react"
import "../styles/home.css"
import Partners from "../components/partners"
import MapArea from "../components/maparea"
import Headline from "../components/headline"
import Layout from "../components/layout"
import { graphql, navigate } from "gatsby"
import "../styles/global.scss"
import { ReduceText } from "../helper"
import moment from "moment"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => {
    let obj = { ...edge.node.frontmatter }
    obj.body = edge.node.rawMarkdownBody
    return obj
  })
  const specializations =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter.specializations
  const openPost = title => navigate(title)

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

          <div className="home-specializations">
            <div className="home-specializations-list">
              {specializations.map((specialty, key) => (
                <div key={key} className="box cardStyleII">
                  {specialty}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="home-articles">
          <h1 className="home-article-header">Articles</h1>
          <div className="home-short-info">
            {posts.map((e, key) => (
              <div key={key} class="card cardStyle" onClick={() => openPost(e.title)}>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={e.thumbnail} alt={e.title} />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src={e.authorimage} alt={e.author} />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p
                        class="title is-4"
                        style={{ color: "black !important" }}
                      >
                        {e.author}
                      </p>
                      <p class="subtitle is-6">@{e.author.toLowerCase()}</p>
                    </div>
                  </div>

                  <div class="content">
                    {ReduceText(e.description, 15)}
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">
                      {moment(e.date).format("YYYY-MM-DD")}
                    </time>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Partners />
          <MapArea />
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
    allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "blog" } } }
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            author
            authorimage
            date
            description
            title
            thumbnail
          }
          rawMarkdownBody
        }
      }
    }
  }
`
