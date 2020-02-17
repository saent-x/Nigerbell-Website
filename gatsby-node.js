exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { key: { eq: "blog" } } }) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const title = edge.node.frontmatter.title

    actions.createPage({
      path: title,
      component: require.resolve("./src/templates/post-template.js"),
      context: { title },
    })
  })
}
