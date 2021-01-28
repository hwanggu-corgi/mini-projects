const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

// 1
// is useful for small server
// const typeDefs = `
//   type Query {
//     info: String!
//     feed: [Link!]!
//   }

//   type Mutation {
//     post(url: String!, description: String!): Link!
//   }

//   type Link {
//     id: ID!
//     description: String!
//     url: String!
//   }
// `

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length;
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        },
        updateLink: (parent, args) => {
            const index = links.findIndex(e => e.id == `link-${args.id}`);
            const link = links[index];
            if (index > -1) {
                links[index] = {
                    id: `link-${index}`,
                    description: args.description ? args.description : links[index].description,
                    url: args.url ? args.url : links[index].url,
                }
            }
            return link
        },
        deleteLink: (parent, args) => {
            const index = links.findIndex(e => e.id == `link-${args.id}`);
            const link = links[index];

            if (index > -1) {
                links.splice(index, 1);
            }

            return link;
        },
    },
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
})

server
.listen()
.then(({ url }) =>
    console.log(`Server is running on ${url}`)
);