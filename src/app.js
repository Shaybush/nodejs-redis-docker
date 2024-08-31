const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const commentRouter = require('./routers/comment.router');
const indexRouter = require('./routers/index.router')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
// tiny logger
app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
})

app.use('/', indexRouter);
app.use('/comments', commentRouter);

// tiny error handler
app.use((err, req, res, next) => {
  console.error(`${req.method}:${req.originUrl}, failed with error:${err}`);
  res.status(500).json({ error: err.message })
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is up on: http://localhost:${PORT}`);
});
