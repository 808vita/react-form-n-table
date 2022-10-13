require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const feedbackRoutes = require("./routes/feedbackRoutes");
const app = express();
const path = require("path");
app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const port = process.env.PORT || 4000;

app.use("/api/feedback", feedbackRoutes);

// ----------------------------------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/build")));

  app.get("*", (req, res) =>
    // res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
    res.sendFile(path.join(__dirname1, "/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// ----------------------------------------------
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
