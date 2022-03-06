import * as ProfileModel from "../../../models/api/v1/profile"



export async function updateProfile(request, response){
 const body= request.body;
 const id= request.params.id;
 const newProfile= await ProfileModel.updateProfile(id,body.firstName,body.lastName)
 response.status(201).json(newProfile);
}

export async function getProfile(request, response){
 const id= request.params.id;
 const profile=await ProfileModel.getProfile(id)
 response.status(200).json({profile});
}
export async function deleteProfile(request, response){
 const id= request.params.id;
 const DeProfile=await ProfileModel.deleteProfile(id)
 response.status(200).json({DeProfile});
}

