const express = require('express');

const app = express()

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} in this super keen env: ${process.env.NODE_ENV}`);
});
