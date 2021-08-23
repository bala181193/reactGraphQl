const mongoose=require('mongoose');

const  PostSchema=new mongoose.Schema({
    tittle:String,
    description:String
})

const Post=mongoose.model('post',PostSchema);

module.exports=Post;