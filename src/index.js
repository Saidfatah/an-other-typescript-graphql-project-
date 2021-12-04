const { ApolloServer, gql } = require('apollo-server');
import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'




const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({url})=>{
    console.log('listning at :' + url)
})