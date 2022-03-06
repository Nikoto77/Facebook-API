import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getProfile(id){
    return prisma.profile.findUnique(
        {
            where: {
                userId: id
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


export async function updateProfile(id, firstName, lastName){
    return prisma.profile.update({
        where:{
            userId: id,
        },
        data:{
            firstName: firstName,
            lastName: lastName
        }
    })
  }
