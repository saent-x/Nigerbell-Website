import React from "react"
import Layout from "../components/layout"
import "../styles/bloghome.css"
import { Pagination } from "antd"
import { graphql, navigate } from "gatsby"
import "../styles/global.scss"

export default ({ data }) => {
  const openPost = slug => navigate(slug)
  const posts = data.allMarkdownRemark.edges.map(edge => {
    let obj = { ...edge.node.frontmatter }
    obj.slug = edge.node.fields.slug
    return obj
  })

  return (
    <Layout>
      <div className="blog-container">
        <div className="blog-jumbo">
          <h1 className="blog-jumbo-text">BLOG</h1>
          <small className="blog-jumbo-small-text">Recent posts</small>
        </div>
        <div className="blog-posts">
          {posts.map((e, key) => (
            <div
              key={key}
              className="card blog-card"
              onClick={() => openPost(e.slug)}
            >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={e.thumbnail} alt={e.title} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-32x32">
                      <img src={e.authorimage} alt={e.title} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-5">{e.title}</p>
                    <p className="subtitle is-6">{e.author}</p>
                  </div>
                </div>
                <div className="content">
                  {e.description}

                  {e.tag ? (
                    <div className="tags">
                      {e.tag.map((e, key) => (
                        <span key={key} className="tag is-small is-warning">
                          #{e}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <br />
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div style={{ textAlign: "center", margin: "10px" }}>
          <Pagination
            total={posts.length}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            pageSize={15}
            defaultCurrent={1}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query blogData($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "blog" } } }
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
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
