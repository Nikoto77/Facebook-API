import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export  async function updateProfile(firstName, lastName, userId) {
 return prisma.profile.upsert({
  where: {
         userId: userId,
         },
         update: {
          firstName: firstName,
          lastName: lastName,
         },
         create: {
          firstName,
          lastName,
          User: {
             connect: { id: userId },
          }
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

