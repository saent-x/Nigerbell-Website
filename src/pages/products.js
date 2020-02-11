import React from "react"
import Layout from "../components/layout"
import "../styles/products.css"
import { Input, Card, Pagination, Modal } from "antd"

export default () => {
  let visibleModal = false
  const openModal = () => this.setState({ ...this.state, visibleModal: true })
  const closeModal = () => this.setState({ ...this.state, visibleModal: false })

  const products = [];
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
              onClick={() => openModal()}
              hoverable
              className="product-card"
              cover={<img alt="example" height="150" src={e.imageUrl} />}
            >
              <div className="product-header">{e.name}</div>
              <p className="product-description">{e.description}</p>
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
