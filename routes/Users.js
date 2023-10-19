const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create New User :
router.post("/", async (req, res) => {
  // 1)
  const { username, password } = req.body;

  // 2) Hash the Password :
  bcrypt.hash(password, 12).then((hashedPass) => {
    // 3)
    Users.create({
      username: username,
      password: hashedPass,
    });
    // 4)
    res.json("SUCCESS");
  });
});

router.get("/signedUsers", async (req, res) => {
  const signedUsers = await Users.findAll();

  res.json({ signedUsers: signedUsers });
});

module.exports = router;
