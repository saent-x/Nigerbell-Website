import React from "react"

export default function({ data }) {
  console.log(data)
  return <div>Hello world!</div>
}

export const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "data" }
        name: { eq: "specializations" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              specializations
            }
          }
        }
      }
    }
  }
`
