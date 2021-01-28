const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

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

const prisma = new PrismaClient();

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length;
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: async (parent, args, context) => {
            return context.prisma.link.findMany()
        },
    },
    Mutation: {
        post: (parent, args, context, info) => {
            const newLink = context.prisma.link.create({
                data: {
                    url: args.url,
                    description: args.description,
                },
            })
            return newLink
        },
        updateLink: (parent, args, context, info) => {
            const newLink = context.prisma.link.update({
                where: {
                    id: args.id
                },
                data: {
                    url: args.url,
                    description: args.description,
                },
            });

            // const index = links.findIndex(e => e.id == `link-${args.id}`);
            // const link = links[index];
            // if (index > -1) {
            //     links[index] = {
            //         id: `link-${index}`,
            //         description: args.description ? args.description : links[index].description,
            //         url: args.url ? args.url : links[index].url,
            //     }
            // }
            return newLink
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
    context: {
        prisma,
    },
})

server
.listen()
.then(({ url }) =>
    console.log(`Server is running on ${url}`)
);