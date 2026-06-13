import API from "../../services/axios"

export const getCategories=async()=>{
    const {data}=await API.get("/category/get-categories")
    return data
}