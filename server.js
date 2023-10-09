const express = require("express");
const { connectToDatabase } = require("./database");

const app = express();

app.get("/gold-rate", async (req, res) => {
  const database = await connectToDatabase();
  const goldRate = await database.collection("gold-rates").findOne();

  res.json({ goldRate });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
