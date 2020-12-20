const express = require('express');
const app = express();

require('dotenv').config();

const connectDB = require("./models/connectDB");
const router = require('./routes/router');

connectDB();

// app.use(express.urlencoded({ extended: false }));

app.use("/api", router)

app.use(express.json());

// production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
};


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
