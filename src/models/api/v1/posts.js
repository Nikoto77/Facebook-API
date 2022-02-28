import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function returnPost(message,authorId){
  return prisma.post.findFirst({
    where: {
      message,
      authorId,
    },
  })
}

export async function createPostDto(message,authorId){
 return prisma.post.create({
    data:{
      message,
      authorId
     }
   })
}
export async function updatePostDto( message){
 return prisma.profile.create({
            data:{
                message                    
                }
            
        })
    }

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


export async function deletePost(userId){
 return prisma.post.delete({
    where:{
     authorId : userId        
     }
  })
}