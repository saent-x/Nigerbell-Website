import React from "react"
import Layout from "../components/layout"
import "../styles/products.css"
import { Input, Card, Pagination, Modal } from "antd"
import { graphql } from "gatsby"

export default ({ data }) => {
  let visibleModal = false
  const openModal = () => this.setState({ ...this.state, visibleModal: true })
  const closeModal = () => this.setState({ ...this.state, visibleModal: false })
  
  const products = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
  console.log(products)

  return (
    <Layout>
      <div className="products-container">
        <h1 className="products-header">Available Products</h1>
        <div className="searchbar-container">
          <Input.Search
            className="searchbar"
            placeholder="product name, category"
            onSearch={value => console.log(value)}
          />
        </div>
        <div className="products">
          {products.map((e, key) => (
            <Card
              key={key}
              onClick={() => openModal()}
              hoverable
              className="product-card"
              cover={<img alt="example" height="150" src={e.image} />}
            >
              <div className="product-header">{e.title}</div>
              <p className="product-description">{e.content}</p>
            </Card>
          ))}
        </div>
        <br />
        <br />
        <Pagination
          total={products.length}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          pageSize={15}
          defaultCurrent={1}
        />
        <Modal
          title="Selected Product"
          visible={visibleModal}
          onCancel={() => closeModal()}
          onOk={() => openModal()}
        ></Modal>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { key: { eq: "products" } } }) {
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
