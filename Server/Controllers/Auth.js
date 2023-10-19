const bcrypt = require("bcrypt");
const { db } = require("../Db");

const register = (req, res) => {
  // Check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists");

    // generate salt
    const salt = bcrypt.genSaltSync(10);
    // hash password
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created");
    });
  });
};

const login = (req, res) => {
  res.json("This is login");
};

const logout = (req, res) => {
  res.json("This is logout");
};

module.exports = {
  register,
  login,
  logout,
};
