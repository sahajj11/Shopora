import API from "../../services/axios"

export const loginRequest=async(payload)=>{
    const {data} = await API.post("/auth/login", payload)
    return data
}

export const registerRequest=async(payload)=>{
    const {data}=await API.post("/auth/register",payload)
    return data
}