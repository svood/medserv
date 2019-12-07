const { gql } = require('apollo-server-express');
const {User} = require('./mongo/models');
module.exports = gql`
type User {
        id: ID!
        userName: String
        email: String
    }
    type Query {
        hello: String
        getOneUser: [User]
        getUsers: [User]
       
      
    }
    type Mutation {
        addUser(userName: String!, email: String!): User
    }

`;
