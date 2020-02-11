import React from "react";
import "../styles/navbar.css";
import { Menu, Input, Icon } from "antd";
import { Link } from "gatsby";

const { Search } = Input;
const { SubMenu } = Menu;


export default () => {
  return (
    <React.Fragment>
      <div className="nav-logo">
        <img
          alt="logo"
          width="30"
          height="30"
          src={require("../assets/icons/logo.png")}
        />
        <h4 className="nav-brand">Nigerbell Hearing</h4>
      </div>

      <Menu
        className="collapse-nav"
        overflowedIndicator={<Icon type="menu" />}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "45px", backgroundColor: "black" }}
      >
        <Menu.Item
          disabled={true}
          key="0"
          onClick={() => console.log("probably worked!")}
        >
          <Search
            className="search-collapse-nav"
            placeholder="search"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </Menu.Item>
        <Menu.Item className="nav-highlight" key="1">
          <Link className="selected-link" to="/">
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link className="selected-link" to="/products">
            Products
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link className="selected-link" to="/blog">
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link className="selected-link" to="/about">
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link className="selected-link" to="/contact">
            Contact
          </Link>
        </Menu.Item>
      </Menu>
      <Search
        className="hide-search-nav"
        placeholder="search"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </React.Fragment>
  )
}