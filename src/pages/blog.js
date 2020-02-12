import React from "react"
import Layout from "../components/layout"
import "../styles/bloghome.css"
import { Card, Avatar, Pagination } from "antd"
import { graphql } from "gatsby"

export default ({ data }) => {
  const openPost = () => this.props.history.push("/post/1234")
  const posts = []
  return (
    <Layout>
      <div className="blog-container">
        <div className="blog-jumbo">
          <h1 className="blog-jumbo-text">BLOG</h1>
          <small className="blog-jumbo-small-text">Recent posts</small>
        </div>
        <div className="blog-posts">
          {posts.map((e, key) => (
            <Card
              hoverable
              className="blog-card"
              key={key}
              cover={<img alt="post image" src={e.imageUrl} />}
              onClick={() => OpenPost()}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={e.name}
                description={e.description}
              />
            </Card>
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
            title
            image
            content
          }
        }
      }
    }
  }
`
