import env from "../config/env.js";
import prisma from "../db/prisma.js"
import ApiError from "../utils/ApiError.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser=async({name,email,password})=>{

    const existing=await prisma.user.findUnique({where:{email}})
    if(existing) throw new ApiError(409,"Email already registered")

    const hashedPassword=await bcrypt.hash(password,10)

    const user=await prisma.user.create({
        data:{name,email,password:hashedPassword}
    })

    const {password:_,...userWithoutPassword}=user
    return userWithoutPassword
}

export const loginUser = async ({ email, password }) => {

  // find user
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new ApiError(401, 'Invalid email or password');

  // compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ApiError(401, 'Invalid email or password');

  // generate token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRES_IN }
  );

  const { password: _, ...userWithoutPassword } = user;
  return { token, user: userWithoutPassword };
};