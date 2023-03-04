const path = require('path')
const fs = require("fs")

function getSlugPath(slug) {
  return slug.slice(1, slug.length - 1).split('/')
}

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(path.join(__dirname, "build"), { recursive: true })
    fs.renameSync(
      path.join(__dirname, "public"),
      path.join(__dirname, "public_dev")
    )
  }
}

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "build"))
  fs.renameSync(
    path.join(__dirname, "public_dev"),
    path.join(__dirname, "public")
  )
}

exports.onCreateNode = ({ node, getNodesByType, actions }) => {
  const { createNodeField, createParentChildLink } = actions
  if (node.internal.type === 'Directory') {
    const parentDirectory = path.normalize(node.dir + '/')
    const parent = getNodesByType('Directory').find(n => path.normalize(n.absolutePath + '/') === parentDirectory)
    if (parent) {
      node.parent = parent.id
      createParentChildLink({
        child: node,
        parent
      })
    }
  }
  if (node.internal.type === 'Mdx' || node.internal.type === 'Md') {
    const slugPath = getSlugPath(node.fields.slug)
    createNodeField({
      node,
      name: 'topLevelDir',
      value: slugPath[0]
    })

    createNodeField({
      node,
      name: 'parentDir',
      value: slugPath ? slugPath[2] : ' '
    })

    createNodeField({
      node,
      name: 'subDir',
      value: slugPath[slugPath.length - 1]
    })
  }
}
