import { addCategory, getCategory } from "../services/category.js";
import sendResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const registerCategory=asyncHandler(async(req,res)=>{
    const category= await addCategory(req.body)
    sendResponse(res, 201, 'Category registered successfully', category);
})

export const fetchCategory=asyncHandler(async(req,res)=>{
    const categories=await getCategory()
    sendResponse(res, 200, 'Category fetch successfully', categories);

})