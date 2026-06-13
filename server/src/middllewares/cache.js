import redis from "../config/redis.js";

const cache = (ttl = 300) => async (req, res, next) => {
  const key = `cache:${req.originalUrl}`;

  const cached = await redis.get(key);
  if (cached) {
    return res.json(JSON.parse(cached));
  }

  // override res.json to save to cache before sending
  const originalJson = res.json.bind(res);
  res.json = (data) => {
    redis.setEx(key, ttl, JSON.stringify(data));
    return originalJson(data);
  };

  next();
};

export default cache;