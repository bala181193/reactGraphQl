const Post=require('./models/post');

const resolver={  
    Query:{
        hello:()=>{
            return "hello world"
        },
        getAll:async ()=>{
            return await Post.find({})
        },
        
    },
    Mutation:{ 
        createPost: async(parent,args,context,info)=>{

            const {tittle,description}=args.post
            const post =await new Post({tittle:tittle,description:description}).save();
            return post

        },
        updatePost: async(parent,args,context,info)=>{

            const {id} =args;
            const {tittle,description}=args.post
            const post =await  Post.findByIdAndUpdate(id,{tittle:tittle,description:description},{new:true});
            return post

        },

        deletePost:async(parent,args,context,info)=>{

            const {id}=args;
            const post=await Post.findByIdAndDelete(id);
            return "deleted successfully";
        }
    }
    
}

module.exports=resolver;
