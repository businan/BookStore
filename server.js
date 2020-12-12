const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const connectDB = require("./models/connectDB");
connectDB();

const router = require('./routes/router');

app.use("/api", router)


app.listen(process.env.PORT, () => {
    console.log(`I'm listening on port ${process.env.PORT}`);

});