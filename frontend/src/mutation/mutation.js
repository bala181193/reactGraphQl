import {gql} from '@apollo/client';

export const CREATE_POST=gql`
mutation createPost($tittle:String,$description:String)
{
    createPost(post:{tittle:$tittle,description:$description})
    {
        id
        tittle
        description
    }
}

`

export const DELETE_POST=gql`

mutation deletePost($id:String)
{
    deletePost(id:$id)
}
`