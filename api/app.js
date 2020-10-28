const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require('./database');
const loginRouter = require("./routes/login");
const createRouter = require("./routes/create");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/login", loginRouter);
app.use("/create", createRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});



module.exports = app;
