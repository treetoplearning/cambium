const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;

    const postTemplate = path.resolve('src/templates/post.js');

    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                        date
                    }
                }
            }
        }
    }`)
    .then(res => {
        if(res.erros) {
            return Promise.reject(res.erros)
        }
        res.data.allMarkdownRemark.edges.forEach( ({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}