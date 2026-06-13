import env from "./env.js";
import Redis from "ioredis";

const redis=new Redis(env.REDIS_URL)

redis.on("connect",()=>{console.log("redis connected")})
redis.on("error",(err)=>{console.log(err)})

export default redis;