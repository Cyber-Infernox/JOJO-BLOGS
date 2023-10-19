const cors = require("cors");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./Routes/User");
const authRoutes = require("./Routes/Auth");
const postRoutes = require("./Routes/Post");

// Middlewares
app.use(express.json()); // BodyParser for POST requests
app.use(cors()); // For interaction between client and server which are in different ports
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(process.env.PORT, () => {
  console.log("Connected to server");
});
