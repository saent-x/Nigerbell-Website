import React from "react"
import Layout from "../components/layout"
import "../styles/blogpost.css"
import { Comment, Avatar, Input } from "antd"
import moment from "moment"
import Markdown from "react-markdown"
import CommentList from "../components/commentlist"
import Editor from "../components/comment-editor"

const { TextArea } = Input

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      submitting: false,
      value: "",
      post: {
        imageURL: require("../assets/imgs/tem5.jpg"),
        title: "The Reward For Delay",
        name: "Dr. Vangerwua Barnabas",
        position: "C.E.O Nigerbell Group",
        timestamp: "5th Friday, October, 2020",
        content: `
# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`,
      },
    }
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return
    }

    this.setState({
      submitting: true,
    })

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      })
    }, 1000)
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
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
    url(${this.state.post.imageURL})`,
            }}
          >
            <h1 className="blogpost-jumbo-header">{this.state.post.title}</h1>
            <div className="blogpost-jumbo-profile">
              <img
                className="blogpost-profile-img"
                src={require("../assets/icons/logo.png")}
              />
              <div className="blogpost-profile-name">
                <p className="blogpost-company-name">{this.state.post.name}</p>
                <p className="blogpost-company-rep">
                  {this.state.post.position}
                </p>
                <p className="blogpost-company-timestamp">
                  {this.state.post.timestamp}
                </p>
              </div>
            </div>
          </div>
          <div className="blogpost-content">
            <Markdown source={this.state.post.content} />
            <br />
            <br />
            <div style={{ width: "60%" }}>
              {this.state.comments.length > 0 && (
                <CommentList comments={this.state.comments} />
              )}
              <Comment
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                }
                content={
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={this.state.submitting}
                    value={this.state.value}
                  />
                }
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
