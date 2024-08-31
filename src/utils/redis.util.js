const Redis = require('redis');
const redisClient = Redis.createClient({ url: 'redis://redis:6379' }) // optional to pass { url: "" } inside (for production)
redisClient.connect().catch(console.error);

exports.getSetRedisCache = ({ key, callbackFn, expirationTime }) => {
  return new Promise((resolve, reject) => {
    // Connect the client
    redisClient.GET(key)
      .then(async (redisData) => {
        if (redisData && redisData !== null) return resolve(JSON.parse(redisData));
        const newData = await callbackFn();
        redisClient.SETEX(key, expirationTime, JSON.stringify(newData));
        resolve(newData);
      })
      .catch(err => reject(err))
  })
}