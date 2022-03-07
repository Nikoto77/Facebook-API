import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function returnPost(id){
  return prisma.post.findFirst({
    where: {
      id,
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

export async function deletePost(id){
 return prisma.post.delete({
    where:{
     id        
     }
  })
}