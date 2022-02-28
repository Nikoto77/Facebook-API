import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function updateProfile( firstName, lastName,userId){
    return prisma.profile.create({
     where:{
      userId: userId,
      },
      data:{
        firstName,
        lastName,                
        }
    })
}

export async function returnProfile(userId){
    return prisma.profile.findFirst(
        {
            where: {
                userId
            }

        }
    )
    }

export async function deleteProfile(userId){
 return prisma.profile.delete({
  where:{
    userId : userId        
  }
 })
}

