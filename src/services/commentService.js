const axios = require('axios');
const { getSetRedisCache } = require('../utils/redis.util');

const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments"

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
  const expirationTime = 60 * 60; // Cache the data for 1 hour (3600 seconds)

  try {
    // global function 
    const data = await getSetRedisCache({
      key: cacheKey,
      callbackFn: async () => {
        const { data } = await axios.get(COMMENTS_API_URL, { params: { postId } });
        return data;
      },
      expirationTime,
    })
    res.json({ data })
  } catch (error) {
    res.json({ error })
  }
}

module.exports = {
  getCommentsService,
  getCommentsWithRedisService
}