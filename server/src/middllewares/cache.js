import redis from "../config/redis.js";

const cache = (ttl = 300) => async (req, res, next) => {
  const key = `cache:${req.originalUrl}`;

  const cached = await redis.get(key);
  if (cached) {
    console.log(`Cache HIT → ${key}`);
    return res.json(JSON.parse(cached));
  }

  const originalJson = res.json.bind(res);
  res.json = (data) => {
    redis.set(key, JSON.stringify(data), "EX", ttl);
    return originalJson(data);
  };

  next();
};

export default cache;