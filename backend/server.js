const express = require("express");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
