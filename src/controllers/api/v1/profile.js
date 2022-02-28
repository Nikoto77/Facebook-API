import * as UserModel from "../../../models/api/v1/profile"



export async function updateProfile(request, response){
 const body= request.body;
 const id= request.params.id;
 const newProfile= await UserModel.updateProfile(body.firstName,body.lastName,id)
 response.status(201).json(newProfile);
}

export async function returnProfile(request, response){
 const id= request.params.id;
 const profile=await UserModel.returnProfile(id)
 response.status(200).json({profile});
}
export async function deleteProfile(request, response){
 const id= request.params.id;
 const DeProfile=await UserModel.deleteProfile(id)
 response.status(200).json({DeProfile});
}

