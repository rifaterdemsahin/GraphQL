   const { gql } = require('apollo-server');

   const typeDefs = gql`
      type Product {
         id: ID!
         name: String!
         price: Float!
         inStock: Boolean!
      }

      type Query {
         products: [Product]
      }
   `;

   const resolvers = {
      Query: {
         products: () => [
            { id: 1, name: 'Laptop', price: 999.99, inStock: true },
            { id: 2, name: 'Phone', price: 799.99, inStock: false }
         ]
      }
   };

   module.exports = { typeDefs, resolvers };
