import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/* export async function registerDto(email,password){
 return prisma.user.create({
  data:{
    email,
    password
  }
 })
} */
/* export async function LoginDto(email,password){
 return prisma.user.findFirst({
  where: {
    email : email,
    password : password
    }
  })
} */

export const findById = ({ id }) =>
  prisma.user.findUnique({
    where: { id },
  });




  export async function LoginDto({email,password}){
    return prisma.user.findFirst({
        where:{
            email,
            password,
        }
    })
}

export async function registerDto(email,password){
  return prisma.user.create({
      data:{
          email,
          password,
          Profile:{
              create:{
                  firstName: '',
                  lastName: ''
              }
         }
      }
  })
}