import * as UserModel from "../../../models/api/v1/users.js"
import jwt from "jsonwebtoken"



export async function createUser(request, response){
 const body= request.body;
 const newUser = await UserModel.registerDto(body.email,body.password)
 response.status(201).json({ user: newUser });
}

export async function loginUser(request, response){
 const result=await UserModel.LoginDto(request.body);
  if (!result) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
 console.log(result);
 const token=jwt.sign({id:result.id}, 'SECRET')
 response.status(201).json({result, token});
}