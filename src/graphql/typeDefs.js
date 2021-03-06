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
        hello2: String
        getUsers: [User]
       
      
    }
    type Mutation {
        addUser(userName: String!, email: String!): User
    }

`;
