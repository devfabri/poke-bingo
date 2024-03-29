const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use("/dist", express.static(path.resolve(__dirname, "dist")));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages", 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});