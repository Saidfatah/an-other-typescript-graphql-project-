const { ApolloServer } = require('apollo-server');
import "reflect-metadata"
import { createConnection } from "typeorm";
import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'




const server = new ApolloServer({ typeDefs, resolvers });

createConnection().then(()=>{
    server.listen().then((props: any)=>{
        console.log('listning at :'+props.url )
    }) 
}) 

