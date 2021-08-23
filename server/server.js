const express =require('express');
const { ApolloServer } =require('apollo-server-express');
const mongoose=require('mongoose');
const typeDefs=require('./typeDef');
const resolvers=require('./resolver');
const {gql} =require('apollo-server-express')
const url="mongodb+srv://Ba1993La:bala181193@N@freecluster.ajsxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true},
    (err)=>{
        if(err)
        {
            console.log("errrrrrrrrrrrrrrrr",err);
        }
        console.log("db connectecd");
    })

    
    const startServer=async()=>{
        const app=express();
        const apolloServer=new ApolloServer({
            typeDefs,resolvers

        });
        await apolloServer.start();
        apolloServer.applyMiddleware({app:app});
        app.listen(4000,()=>{
            console.log("server is running on 4000");
        })
    }

    startServer();