import * as UserModel from "../../../models/api/v1/users.js"
import jwt from "jsonwebtoken"



export async function createUser(request, response){
 const body= request.body;
 const newUser = await UserModel.registerDto(body.email,body.password)
 response.status(201).json({ user: newUser });
}

export async function loginUser(request, response){
 const body= request.body;
 const user = await UserModel.LoginDto(body.email,body.password)
 const token = jwt.sign({ email: user.email }, 'Toto')
 response.status(200).json({ user, token });
}