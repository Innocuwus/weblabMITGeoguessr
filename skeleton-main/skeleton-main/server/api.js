/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
const User = require("./models/user");
const express = require('express');
const path = require('path');
const renderComponent = require('./renderComp');
const Homepage = require('../client/src/components/pages/Homepage.jsx').default;
const LoggedIn = require('../client/src/components/pages/LoggedIn.jsx').default;
const EasyMode = require('../client/src/components/pages/EasyMode.jsx').default;
const LeaderPage = require('../client/src/components/pages/LeaderPage.jsx').default;
const AccountSetts = require('../client/src/components/pages/AccountSetts.jsx').default;
const NormalMode = require('../client/src/components/pages/NormalMode.jsx').default;
const ProMode = require('../client/src/components/pages/ProMode.jsx').default;
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

router.get('/homepage', (req, res) => {
  const html = renderComponent(Homepage);
  res.send(html);
});

router.get('/loggedin', (req, res) => {
  const html = renderComponent(LoggedIn);
  res.send(html);
});

router.get('/easymode', (req, res) => {
  const html = renderComponent(EasyMode);
  res.send(html);
});

router.get('/leaderpage', (req, res) => {
  const html = renderComponent(LeaderPage);
  res.send(html);
});

router.get('/accountsetts', (req, res) => {
  const html = renderComponent(AccountSetts);
  res.send(html);
});

router.get('/normalmode', (req, res) => {
  const html = renderComponent(NormalMode);
  res.send(html);
});

router.get('/promode', (req, res) => {
  const html = renderComponent(ProMode);
  res.send(html);
});

// anything else falls to this "not found" case
router.all('*', (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: 'API route not found' });
});

module.exports = router;