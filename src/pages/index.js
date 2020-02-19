import React from "react"
import "../styles/home.css"
import Partners from "../components/partners"
import MapArea from "../components/maparea"
import Headline from "../components/headline"
import Layout from "../components/layout"
import { graphql, navigate } from "gatsby"
import "../styles/global.scss"
import { ReduceText } from "../helper"

export default ({ data }) => {
  const posts = data.fetchPosts.edges.map(edge => {
    let obj = { ...edge.node.frontmatter }
    obj.body = edge.node.rawMarkdownBody
    obj.slug = edge.node.fields.slug
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
            <div className="jumbo-overlay">
              <div>
                <h1 className="title is-1 jumbo-heading">
                  {homepageData.homejumbo.title.toUpperCase()}
                </h1>
                <p className="subtitle is-5 jumbo-subtitle">
                  {homepageData.homejumbo.content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="home-intro" title={homepageData.homejumbo.title}>
            <div className="home-intro-card">
              <div className="home-intro-image-container">
                <img className="home-intro-image" src={homepageData.image} />
                <p className="title is-6">{homepageData.author}</p>
                <p className="subtitle is-7">{homepageData.jobtitle}</p>
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
                onClick={() => openPost(e.slug)}
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
                      <div class="media-content">
                        <p class="title is-5">{e.title}</p>
                        <p class="subtitle is-6">{e.author}</p>
                      </div>
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
          <Partners partners={partners} />
          <MapArea />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    fetchPartners: allFile(
      filter: { sourceInstanceName: { eq: "data" }, name: { eq: "partners" } }
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
      filter: { sourceInstanceName: { eq: "data" }, name: { eq: "index" } }
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
          fields {
            slug
          }
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
