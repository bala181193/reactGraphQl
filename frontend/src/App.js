import {useState} from 'react'
import {useMutation, useQuery,gql} from '@apollo/client'
import { CREATE_POST,DELETE_POST} from './mutation/mutation'
import {getAll} from './query/query'

function App() {
  const{loading,data,error}=useQuery(getAll);
  const [createPost,{err}]=useMutation(CREATE_POST);
  const [deletePost,{errr}]=useMutation(DELETE_POST);

  const [tittle,settittle]=useState('') 
  const [description,setdescription]=useState('') 

  if(loading) return "Loading";
  // if(error)
  // {
  //   console.log("errrrrrrrrrrrrrrrrr",error)
  // }
  const addPost=()=>{
     createPost({
      variables:{
        tittle:tittle,
        description:description
      }
    })
  }
  
  const removePost=(id)=>{
    deletePost({
      variables:{
        id:id
       }
    })
  }

if(loading) return "loading"
if(error) return "errors"
  return (
    <div >
      
      {/* <h1>hi bala181193</h1> */}
      {
        data&& data.getAll.map((data,i)=>{
          return(  
            <>   

        
            <p>
            {data.tittle}-----------------{data.description}
          </p>
                <button onClick={()=>removePost(data.id)} >DletePost</button>
            </>
          )
          
        })
      }
      <br/>
      <input type="text" onChange={(e)=>settittle(e.target.value)} />
      <input type="text" onChange={(e)=>setdescription(e.target.value)} />

      <button onClick={()=>addPost()} >addPost</button>

    </div>
  );
}

export default App;
