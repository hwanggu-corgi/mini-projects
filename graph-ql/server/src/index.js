const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const { getUserId } = require('./utils');

const fs = require('fs');
const path = require('path');

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

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

const prisma = new PrismaClient();

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length;
const resolvers = {
    Query,
    Mutation,
    User,
    Link
}

// const resolvers = {
//     Query: {
//         info: () => `This is the API of a Hackernews Clone`,
//         feed: async (parent, args, context) => {
//             return context.prisma.link.findMany()
//         },
//     },
//     Mutation: {
//         post: (parent, args, context, info) => {
//             const newLink = context.prisma.link.create({
//                 data: {
//                     url: args.url,
//                     description: args.description,
//                 },
//             })
//             return newLink
//         },
//         updateLink: (parent, args, context, info) => {
//             const newLink = context.prisma.link.update({
//                 where: {
//                     id: parseInt(args.id)
//                 },
//                 data: {
//                     url: args.url,
//                     description: args.description,
//                 },
//             });

//             return newLink
//         },
//         deleteLink: (parent, args) => {
//             const index = links.findIndex(e => e.id == `link-${args.id}`);
//             const link = links[index];

//             if (index > -1) {
//                 links.splice(index, 1);
//             }

//             return link;
//         },
//     },
// }

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: ({ req }) => {
        return {
            ...req,
            prisma,
            userId: req && req.headers.authorization ? getUserId(req) : null
        }
    },
})

server
.listen()
.then(({ url }) =>
    console.log(`Server is running on ${url}`)
);