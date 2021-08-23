const {gql} =require('apollo-server-express')


const typeDefs=gql`

type Post{
    id:ID,
    tittle:String,
    description:String  
}

type Query {
    hello:String,
    getAll:[Post]   
}

input PostInput{
    tittle:String,
    description:String
}
type Mutation{
    createPost(post:PostInput):Post
    updatePost(id:String,post:PostInput):Post
    deletePost(id:String):String

}

`;


module.exports=typeDefs
