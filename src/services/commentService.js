const axios = require('axios');
const { getSetRedisCache } = require('../utils/redis.util');

const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments"
const EXPIRATION_TIME = 60 * 60; // 1 hour (3600 seconds)

async function getCommentsService(req, res, next) {
  const postId = req.query.postId;
  try {
    const { data } = await axios.get(COMMENTS_API_URL, { params: { postId } });
    return res.status(200).json(data);
  } catch (error) {
    next(new Error('API request has failed'))
  }
}

async function getCommentsWithRedisService(req, res, next) {
  const postId = req.query.postId;
  const cacheKey = `comments?postId=${postId}`;

  try {
    const data = await getSetRedisCache({
      key: cacheKey,
      callbackFn: async () => {
        const { data } = await axios.get(COMMENTS_API_URL, { params: { postId } });
        return data;
      },
      expirationTime: EXPIRATION_TIME,
    })
    res.json({ data })
  } catch (error) {
    next(new Error(error.message))
  }
}

module.exports = {
  getCommentsService,
  getCommentsWithRedisService
}