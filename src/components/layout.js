import React from "react"
import NavBar from "../components/navbar"
import FooterContent from "../components/footer"
import { Layout } from "antd"
import "../styles/layout.css"

const { Header, Content, Footer } = Layout

export default ({ children }) => {
  return (
    <Layout className="App">
      <header>
        <NavBar />
      </header>
      <Content>
        <div style={{ height: "100%", marginTop: "52px" }}>{children}</div>
      </Content>

      <Footer style={{ backgroundColor: "black" }}>
        <FooterContent />
      </Footer>
    </Layout>
  )
}
