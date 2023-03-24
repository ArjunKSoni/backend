const express = require('express')
const User = require('../models/Register')
const router = express.Router()


router.post("/register", async (req, res) => {
  let newuser = new User({
    user: req.body.user,
    email: req.body.email,
    password: req.body.password,
    mobileNo: req.body.mobileNo,
  })
  var hash = await Buffer.from(newuser.password, 'utf8').toString('base64')
  const userN = await User.findOne({ user: newuser.user });
  const userE = await User.findOne({ email: newuser.email });
  if (userN || userE) {
    return res.json({ message: "User already exist", success: "fail" });
  }
  else {
    newuser.password=hash
    await newuser.save();
    newuser = await User.findOne({ user: newuser.user });
    const payload = newuser._id
    const authToken = await Buffer.from(payload, 'utf8').toString('base64') //creating json web token for payload
    newuser.token = authToken
    return res.send({ authToken, message: "Account created successfully", success: "success" })
  }
})

router.post('/login', async (req, res) => {
  const registereduser = req.body.user;
  const password = req.body.password;
  try {
    let olduser = await User.findOne({ user: registereduser });
    if (!olduser) {
      return res.status(400).json({ message: "User name not found", success: "failed" });
    }
    const passwordCompare =await Buffer.from(password, 'utf8').toString('base64')
    if (passwordCompare!=olduser.password) {
      return res.status(400).json({ message: "invalid password", success: "fail" });
    }
    const payload = olduser._id
    const authToken = await Buffer.from(payload, 'utf8').toString('base64') //creating json web token for payload
    olduser.token = authToken
    return res.json({ authToken, message: "Loged in successfully", success: "success" })

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "some error occured", success: "reject" });
  }
})

module.exports = router;