const express = require('express');
const { usersSerivce } = require('./users.service');
const { fetchJudges } = require('../../DB/index');
const router = express.Router();

// Assuming you have a separate module for handling login and registration

router.post('/login', async (req, res) => {
  try {
    const { userID, password } = req.body;
    const userRes = await usersSerivce.checkLoginDetails(userID, password);

    if (userRes.success) {
      res.json(userRes);
    } else {
      res.json({ success: false, error: userRes.error });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

router.post('/add-id', async (req, res) => {
  try {
    const { token, ID } = req.body;
    const userRes = await usersSerivce.addId("/add-id", token, ID);

    // More sophisticated logic can be added here to handle login
    res.json(userRes);
  } catch (error) {
    console.log(error);
  }
});

router.post('/registerFullInfo', (req, res) => {
  const { userID, fullName, email, type, password } = req.body;
  usersSerivce.registerNewUserWithFullDetails(userID, fullName, email, type, password);
  // More sophisticated logic can be added here to handle registration
  res.json("Registration successful or error message");
});

router.post("/example-guarded-data", async (req, res) => {
  const { token } = req.body;
  const user = await usersSerivce.checkToken(token);
  if (user?.type === "admin") {
    // admmin shit
  } else if (user?.type === "judge") {
    // judge shit
  }
  // kick them out
})

router.post('/check-token', async (req, res) => {
  try {
    const { token } = req.body;
    const user = await usersSerivce.checkToken(token);
    if (!user) {
      return {
        success: false,
        error: "Failed to auth"
      }
    }
    const userToReturn =  {type: user.type, name: user.name} 
    res.json({success:true, user: userToReturn });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});




module.exports = router;