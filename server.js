// server.js
//Subscribe Our Channel https://www.youtube.com/dost2web/
//Set up a basic server that responds with "Hello, !" at the root endpoint (GET /).
const express = require('express');
const app = express();
const PORT = 3000;

// define the route
app.get('/', (req, res) => {
  res.send('<a href="https://www.youtube.com/dost2web/"><h1 style="color: green;">Hello,Subscribe Our Channel https://www.youtube.com/dost2web/</h1></a>');
});
//Subscribe Our Channel https://www.youtube.com/dost2web/

// start the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
