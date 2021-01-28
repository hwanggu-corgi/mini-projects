const { ApolloServer } = require('apollo-server');

// 1
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]

const resolvers = {
Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: () => links,
},

// 3
Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
}
}