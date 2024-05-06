import createError from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import http from "http";
import dotenv from "dotenv";
import { indexRouter } from "@routes/index";
import { usersRouter } from "@routes/users";

import "@config/init";
// import "@config/async";
import "@helpers/associations";

import User from "@models/User";

dotenv.config();

const app = express();
const cors = require("cors");

const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOpts));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin/", indexRouter);
app.use("/users/", usersRouter);

app.get("/admin/test/", function (req: Request, res: Response) {
  res.send("Test is done.");
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const server = http.createServer(app);
const port: string | number | undefined = process.env.PORT || 3000;
server.listen(port, async () => {
  let Admin = await User.findOne({
    raw:true
  });
  if(Admin === null) {
    await User.create({
      "fullname": "adminer",
      "email": "admin@gmail.com",
      "password": "admin@123",
    });    
  }  
  console.log(`Server is running on Port: ${port}`);
});

server.timeout = 9000;
