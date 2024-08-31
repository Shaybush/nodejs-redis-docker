const express = require('express');
const router = express();

router.get('/health', (req, res, next) => {
  return res.send('OK');
});

module.exports = router
