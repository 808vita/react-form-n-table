require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const port = process.env.PORT;

app.use("/api", (req, res) => res.status(200).json({ oof: "oof" }));

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(` connected to db & Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
