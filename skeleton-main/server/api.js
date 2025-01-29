import React from "react";

const User = require("./models/user");
const express = require('express');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const Homepage = require('../client/pages/Homepage.jsx').default;
const LoggedIn = require('../client/pages/LoggedIn.jsx').default;
const EasyMode = require('../client/pages/EasyMode.jsx').default;
const LeaderPage = require('../client/pages/LeaderPage.jsx').default;
const AccountSetts = require('../client/pages/AccountSetts.jsx').default;
const NormalMode = require('../client/pages/NormalMode.jsx').default;
const ProMode = require('../client/pages/ProMode.jsx').default;
const PlayStage = require('../client/pages/PlayStage.jsx').default;
const auth = require('./auth'); // Ensure this is the correct path to your auth module
const socketManager = require('./server-socket'); // Ensure this is the correct path to your socketManager module


const router = express.Router();

router.post('/login', auth.login);
router.post('/logout', auth.logout);

router.get('/whoami', (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }
  res.send(req.user);
});

router.post('/initsocket', (req, res) => {
  // do nothing if user not logged in
  if (req.user) {
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  }
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/user", async (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });

  try {
    const user = await User.findById(req.user.id).select("username profilePicture correctGuesses");
    if (!user) return res.status(404).json({ message: "User not found" });
     // Update the user data if new values are provided
     if (username) user.username = username;
     if (profilePicture) user.profilePicture = profilePicture;
 
     // Save the updated user data
     await user.save();
     res.json({
      username: user.username,
      profilePicture: user.profilePicture,
    }); // Return user data in JSON format
  } catch (err) {
    console.error("Error:", err); // Log the error on the server
    res.status(500).json({ message: "Error fetching user data", error: err });
  }
});



router.get('/homepage', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(Homepage));
  auth.login(req, res);
  // login(token);
  console.log("test");
  res.send(html);
});

router.get('/loggedin', (req, res) => {
  const html1 = ReactDOMServer.renderToString(React.createElement(LoggedIn));
  res.send(html1);
});

router.get('/easymode', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(EasyMode));
  res.send(html);
});

router.get('/leaderpage', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(LeaderPage));
  res.send(html);
});

router.get('/accountsetts', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(AccountSetts));
  res.send(html);
});

router.get('/normalmode', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(NormalMode));
  res.send(html);
});

router.get('/promode', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(ProMode));
  res.send(html);
});

router.get('/playstage', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(PlayStage));
  res.send(html);
});



// anything else falls to this "not found" case
router.all('*', (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: 'API route not found' });
});

module.exports = router;