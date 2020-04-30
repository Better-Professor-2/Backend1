const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");
const authenticator = require("../auth/authenticator.js");
const studentsRouter = require("../students/students-router");
const deadlinesRouter = require("../deadlines/deadlines-router");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", authenticator, usersRouter);
server.use("/api/auth", authRouter);
server.use("/api/students", studentsRouter);
server.use("/api/deadlines", deadlinesRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
