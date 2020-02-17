import React from "react"
import Layout from "../components/layout"
import "../styles/bloghome.css"
import { Pagination } from "antd"
import { graphql, navigate } from "gatsby"
import "../styles/global.scss"

export default ({ data }) => {
  const openPost = title => navigate(title)
  const posts = data.allMarkdownRemark.edges.map(edge => {
    let obj = { ...edge.node.frontmatter }
    obj.body = edge.node.rawMarkdownBody
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
              class="card blog-card"
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
                    <figure class="image is-48x48">
                      <img src={e.authorimage} alt={e.title} />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{e.author}</p>
                    <p class="subtitle is-6">{e.author}</p>
                  </div>
                </div>
                <div class="content">
                  {e.description}

                  {e.tag ? (
                    <div className="tags">
                      {e.tag.map((e, key) => (
                        <span className="tag is-small is-warning">#{e}</span>
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
  {
    allMarkdownRemark(filter: { frontmatter: { key: { eq: "blog" } } }) {
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
          rawMarkdownBody
        }
      }
    }
  }
`
