import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function returnPost(authorId){
  return prisma.post.findFirst({
    where: {
      authorId,
    },
  })
}

export async function createPostDto(message,authorId) {
  return prisma.post.create({
     data:{
        message,
        Author:{ 
           connect: {id: authorId},
        },
     }
  })
}

export async function updatePostDto(id, message){
 return prisma.post.update({
   where:{
    id,
   },
   data:{
    message,
   },
 });
};
export async function returnListUserPost(authorId){
 return prisma.post.findMany({
    where: {
      authorId : authorId
     }
    })
}
export async function returnListPost(message,authorId){
 return prisma.post.findMany()
 }


export async function deletePost(authorId){
 return prisma.post.delete({
    where:{
     authorId        
     }
  })
}