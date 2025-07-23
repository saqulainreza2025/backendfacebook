import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/facebook", (req, res) => {
  res.send("FACEBOOK APP IS HERE");
});

app.get("/instagram", (req, res) => {
  res.send("INSTAGRAM APP IS HERE");
});

//LISTEN THE APP
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING");
});
