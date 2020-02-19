import React from "react"
import Layout from "../components/layout"
import "../styles/blogpost.css"
import { graphql } from "gatsby"
import moment from "moment"

export default ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const body = data.markdownRemark.html

  return (
    <Layout>
      <div className="blogpost-container">
        <div
          className="blogpost-jumbo"
          style={{
            backgroundImage: `linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(0, 0, 0, 0.73)
    ),
    url(${post.thumbnail})`,
          }}
        >
          <h1 className="blogpost-jumbo-header">{post.title}</h1>
          <div className="blogpost-jumbo-profile">
            <img className="blogpost-profile-img" src={post.authorimage} />
            <div className="blogpost-profile-name">
              <p className="blogpost-company-name">{post.author}</p>
              <p className="blogpost-company-rep">{post.jobtitle}</p>
              <p className="blogpost-company-timestamp">
                {moment(post.date).format("MMMM Do YYYY, h:mm a")}
              </p>
            </div>
          </div>
        </div>
        <div className="blogpost-content">
          <div
            className="blogpost-content-text"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
          <br />
          <br />
          <h2 className="title is-4">Tags</h2>
          {post.tag ? (
            <div className="tags">
              {post.tag.map((e, key) => (
                <span key={key} className="tag is-medium is-warning">#{e}</span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        author
        authorimage
        thumbnail
        date
        tag
        jobtitle
      }
      html
    }
  }
`
