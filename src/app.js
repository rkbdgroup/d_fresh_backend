
import express from "express";


const app = express();

app.use (express.json());

app.get("/", (req, res) => {
  res.send("Vegetable Delivery API Running... ");
});

export default app;
