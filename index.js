const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.get("/hi", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
