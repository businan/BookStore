const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const connectDB = require("./models/connectDB");
connectDB();

const router = require('./routes/router');

app.use("/api", router)


// production
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
}) 
};


const server = app.listen(process.env.port || 4000, function () {
    const port = server.address().port;
    console.log("Express is working on port " + port);
  });