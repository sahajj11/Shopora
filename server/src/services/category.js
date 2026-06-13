import prisma from "../db/prisma.js"

export const addCategory = async (categories) => {
  const result = await prisma.category.createMany({
    data: categories,
  });

  return result;
};

export const getCategory=async()=>{
  const categories=await prisma.category.findMany()
  return categories
}