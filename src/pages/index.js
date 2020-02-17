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
  const posts = data.fetchPosts.edges.map(edge => {
    let obj = { ...edge.node.frontmatter }
    obj.body = edge.node.rawMarkdownBody
    return obj
  })
  const specializations =
    data.fetchSpecializations.edges[0].node.childMarkdownRemark.frontmatter
      .specializations
  const homepageData =
    data.fetchIndex.edges[0].node.childMarkdownRemark.frontmatter
  const partners =
    data.fetchPartners.edges[0].node.childMarkdownRemark.frontmatter.partners

  const openPost = title => navigate(title)

  return (
    <Layout>
      <div>
        <Headline info={homepageData.infotext} />
        <div autoplay>
          <div
            className="carousel carousel-slide1"
            style={{ backgroundImage: `url(${homepageData.homejumbo.image})` }}
          >
            <div className="slide-info">
              <h1 className="slide-info-heading">
                {homepageData.homejumbo.title}
              </h1>
              <p className="slide-info-paragraph">
                {homepageData.homejumbo.content}
              </p>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="home-intro" title="Who we are? and What we do?">
            <div className="home-intro-card">
              <div className="home-intro-image-container">
                <img className="home-intro-image" src={homepageData.image} />
                <p>{homepageData.author}</p>
                <p>{homepageData.jobtitle}</p>
              </div>
              <div className="home-intro-card-content">
                <h1 className="home-intro-card-content-header">
                  {homepageData.title}
                </h1>
                <p className="home-intro-content-text">
                  {homepageData.content}
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
              <div
                key={key}
                class="card cardStyle"
                onClick={() => openPost(e.title)}
              >
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={e.thumbnail} alt={e.title} />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-32x32">
                        <img src={e.authorimage} alt={e.author} />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p
                        class="title is-6"
                        style={{ color: "black !important" }}
                      >
                        {e.author}
                      </p>
                      <p className="subtitle is-6">
                          {moment(e.date).format("YYYY-MM-DD")}
                        </p>
                    </div>
                  </div>

                  <div class="content">
                    {ReduceText(e.description, 15)}
                    {e.tag ? (
                      <div className="tags">
                        {e.tag.map((e, key) => (
                          <span className="tag is-small is-warning">#{e}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Partners partners={partners}/>
          <MapArea />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
         {
           fetchPartners: allFile(
             filter: {
               sourceInstanceName: { eq: "data" }
               name: { eq: "partners" }
             }
           ) {
             edges {
               node {
                 childMarkdownRemark {
                   frontmatter {
                     partners
                   }
                 }
               }
             }
           }
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
           fetchIndex: allFile(
             filter: {
               sourceInstanceName: { eq: "data" }
               name: { eq: "index" }
             }
           ) {
             edges {
               node {
                 childMarkdownRemark {
                   frontmatter {
                     image
                     author
                     content
                     title
                     jobtitle
                     infotext
                     homejumbo {
                       image
                       title
                       content
                     }
                   }
                 }
               }
             }
           }
           fetchPosts: allMarkdownRemark(
             filter: { frontmatter: { key: { eq: "blog" } } }
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
                   tag
                 }
               }
             }
           }
         }
       `
