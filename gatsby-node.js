const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      fetchPosts: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "blog" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      fetchProducts: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "products" } } }
      ) {
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

  const posts = data.fetchPosts.edges
  const products = data.fetchProducts.edges

  // create a page for each individual blog-post
  posts.forEach((edge, index) => {
    const slug = edge.node.fields.slug
    //pass "next" and "previous" so that the page can easily navigate back and forth posts
    const next = index === 0 ? null : posts[index - 1].node.fields.slug
    const previous = index === posts.length - 1 ? null : posts[index + 1].node.fields.slug

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/post-template.js"),
      context: { slug, next, previous },
    })
  })

  CreatePaginatedPages(
    posts,
    1,
    actions.createPage,
    "./src/templates/blog-template.js",
    "blog"
  )
  CreatePaginatedPages(
    products,
    1,
    actions.createPage,
    "./src/templates/products-template.js",
    "products"
  )
}

function CreatePaginatedPages(
  collection,
  postsPerPage,
  createPage,
  templatepath,
  rootPath
) {
  //create paginated pages for blog page
  const numOfPages = Math.ceil(collection.length / postsPerPage)

  //create pages and pass the values for "skip" & "limit" via context
  Array.from({
    length: numOfPages,
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${rootPath}` : `/${rootPath}/${i + 1}`,
      component: require.resolve(templatepath),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numOfPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
