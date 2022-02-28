import * as UserModel from "../../../models/api/v1/posts"

export async function returnPost(request, response){
 const id= request.params.id;
 const post=await UserModel.returnPost(id)
 response.status(200).json({post});
   }
 
export async function updatePost(request, response){
 const body= request.body;
 const id= request.params.id;
 const post= await UserModel.updatePostDto(body.message,id)
 response.status(200).json(post);
}   

export async function createPost(request, response){
 const body= request.body;
 const id= request.params.id;
 const newPost = await UserModel.createPostDto(body.message,id)
 response.status(201).json({ post: newPost });
   }

export async function returnListUserPost(request, response){
 const id= request.params.id;
 const listUserPost=await UserModel.returnListUserPost(id)
 response.status(200).json({listUserPost});
}   
   
   
export async function returnListPost(request, response){
 const id= request.params.id;
 const listPost=await UserModel.returnListPost(id)
 response.status(200).json({listPost});
}   

export async function deletePost(request, response){
 const id= request.params.id;
 const deletePost=await UserModel.deletePost(id)
 response.status(200).json({deletePost});
}
   
     