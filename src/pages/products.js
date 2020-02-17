import React, { useState } from "react"
import Layout from "../components/layout"
import "../styles/products.css"
import { Card, Pagination, Modal, Statistic } from "antd"
import { graphql } from "gatsby"
import "../styles/global.scss"
import { ReduceText } from "../helper"

export default ({ data }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  const openModal = product => {
    setSelectedProduct(product)
    setVisibleModal(true)
  }
  const closeModal = () => {
    setVisibleModal(false)
  }

  const products = data.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter
  )

  return (
    <Layout>
      <div className="products-container">
        <h1 className="title is-1">Available Products</h1>
        <h3 className="subtitle">Explore the products in our inventory</h3>
        <div className="searchbar-container">
          <input
            class="input is-rounded searchbar"
            type="text"
            placeholder="product name, category"
          ></input>
        </div>
        <div className="products">
          {products.map((e, key) => (
            <div key={key} class="card product-card"  onClick={() => openModal(e)}>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={e.image} alt={e.title} />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-5">{e.title}</p>
                  </div>
                </div>
                <div class="content">
                  {e.content}

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
        <Pagination
          total={products.length}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          pageSize={15}
          defaultCurrent={1}
        />
        <Modal
          title={selectedProduct.title || ""}
          visible={visibleModal}
          onCancel={() => closeModal()}
          style={{ minWidth: "800px" }}
          centered={true}
          onOk={() => closeModal()}
        >
          <div className="product-detail-container">
            <div className="product-detail-img">
              <img
                style={{ width: "100%" }}
                src={selectedProduct.image}
                alt="product detail img"
              />
            </div>
            <div className="product-detail-content">
              <Statistic
                title="Product Name"
                value={selectedProduct.title}
                valueStyle={{ fontSize: "18px" }}
              />
              <br />
              <Statistic
                title="Description"
                value={selectedProduct.content}
                valueStyle={{ fontSize: "18px" }}
              />
              <br />
              <hr />
              {selectedProduct.tag ? (
                <div>
                  <h2 className="title is-5">Tags</h2>
                  <div className="tags">
                    {selectedProduct.tag.map((e, key) => (
                      <span key={key} className="tag is-medium is-warning">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Modal>
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
            tag
          }
        }
      }
    }
  }
`
