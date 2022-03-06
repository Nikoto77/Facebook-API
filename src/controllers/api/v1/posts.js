import * as PostModel from "../../../models/api/v1/posts"

export async function returnPost(request, response){
 const id= request.params.id;
 const post=await PostModel.returnPost(Number(id))
 response.status(200).json({post});
   }
 
export async function updatePost(request, response){
 const body= request.body;
 const id= request.params.id;
 const post= await PostModel.updatePostDto(Number(id),body.message)
 response.status(200).json(post);
}   

export async function createPost(request, response){
  const postsData = request.body;
  const post = await PostModel.createPostDto(postsData.message, postsData.authorId);
  response.status(201).json(post);
}

export async function returnListUserPost(request, response){
 const id= request.params.id;
 const listUserPost=await PostModel.returnListUserPost(id)
 response.status(200).json({listUserPost});
}   
   
   
export async function returnListPost(request, response){
 const id= request.params.id;
 const listPost=await PostModel.returnListPost(id)
 response.status(200).json({listPost});
}   

export async function deletePost(request, response){
 const id= request.params.id;
 const deletePost=await PostModel.deletePost(Number(id))
 response.status(200).json({deletePost});
}
   
     