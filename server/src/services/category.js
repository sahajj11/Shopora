import redis from "../config/redis.js";
import prisma from "../db/prisma.js"

export const addCategory = async (categories) => {
  const result = await prisma.category.createMany({
    data: categories,
  });

  return result;
};

export const getCategory=async()=>{

  const cached=await redis.get("cache:categories")
  if (cached) return JSON.parse(cached);
  console.log("cached : ",cached)

  const categories=await prisma.category.findMany()
  await redis.set("cache:categories", JSON.stringify(categories), "EX", 600)
  return categories
}