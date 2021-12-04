const { ApolloServer } = require('apollo-server');
import "reflect-metadata"
import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'
import {Database} from './repositories/Database'



const server = new ApolloServer({ typeDefs, resolvers });

const db = new Database()
db.getConnection("default").then(()=>{
    server.listen().then((props: any)=>{
        console.log('listning at :'+props.url )
    }) 
}) 

