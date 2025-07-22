import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "http backend is listening",
  });
});
app.listen(3001, () => {
  console.log(`Server is listening on port : 3001...`);
});
