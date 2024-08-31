const express = require('express');
const { getCommentsService, getCommentsWithRedisService } = require('../services/commentService');
const router = express();

// fetch data without redis
router.get('/v1', getCommentsService);
// fetch data with redis
router.get('/v2', getCommentsWithRedisService);

module.exports = router;