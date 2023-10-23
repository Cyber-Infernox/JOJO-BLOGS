const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./Routes/User");
const authRoutes = require("./Routes/Auth");
const postRoutes = require("./Routes/Post");

// File Management Middleware
// By witing the below code we can get images on typing "http://localhost:8800/Assets/Images/Person/1.jpeg" in the browser.
// That means we can access the Images directory in the server from client.
app.use(
  "/Assets/Images/blogPosts",
  express.static(path.join(__dirname, "Assets/Images/blogPosts"))
);

// Middlewares
app.use(cookieParser());
app.use(express.json()); // BodyParser for POST requests
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions)); // For interaction between client and server which are in different ports
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// File Management
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Assets/Images/blogPosts");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    // Date.now() + file.originalname
    // req.body.name (For frontend)
    // file.originalname (For Postman)
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    return res.status(200).json(file.filename);
  } catch (error) {
    console.log(error);
  }
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(process.env.PORT, () => {
  console.log("Connected to server");
});
