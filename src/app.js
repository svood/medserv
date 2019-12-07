const express = require('express');
const morgan = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(morgan('dev'));
apolloServer.applyMiddleware({ app });

module.exports = {
  app,
  apolloServer,
};
