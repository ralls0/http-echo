const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.all("*", (req, res) => {
  const protocol = req.protocol;
  const endpoint = req.originalUrl;
  const headers = req.headers;
  const body = req.body;

  console.log("Protocol:", protocol);
  console.log("Endpoint:", endpoint);
  console.log("Headers:", headers);
  if (Object.keys(body).length !== 0) {
    console.log("Body:", body);
  }

  res.send("Request received and logged");
});

app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});
