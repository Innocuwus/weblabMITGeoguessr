/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
//ADDED
/*
require('@babel/register')({
  extensions: ['.js', '.jsx'], // Make sure Babel transpiles JS and JSX files
});

const Homepage = require('../client/pages/Homepage.jsx').default;
const LoggedIn = require('../client/pages/LoggedIn.jsx').default;
const EasyMode = require('../client/pages/EasyMode.jsx').default;
const LeaderPage = require('../client/pages/LeaderPage.jsx').default;
const AccountSetts = require('../client/pages/AccountSetts.jsx').default;
const NormalMode = require('../client/pages/NormalMode.jsx').default;
const ProMode = require('../client/pages/ProMode.jsx').default;
const PlayStage = require('../client/pages/PlayStage.jsx').default;

const React = require('react');
const ReactDOMServer = require('react-dom/server');
// 

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get('/homepage', (req, res) => {
  try {
    const html = ReactDOMServer.renderToString(React.createElement(Homepage));
    console.log(html);
    res.send(html);
  } catch (error) {
    console.error("Error rendering homepage:", error);
    res.status(500).send("Error rendering the homepage");
  }
});


  router.get('/loggedin', (req, res) => {
      try {
        const html = ReactDOMServer.renderToString(React.createElement(LoggedIn));
        res.send(html);
      } catch (error) {
        console.error("Error rendering Loggedin:", error);
        res.status(500).send("Error rendering the loggedin");
      }
    });

    router.get('/easymode', (req, res) => {
      try {
        const html = ReactDOMServer.renderToString(React.createElement(EasyMode));
        res.send(html);
      } catch (error) {
        console.error("Error rendering EasyMode:", error);
        res.status(500).send("Error rendering the EasyMode");
      }
    });

    router.get('/leaderpage', (req, res) => {
      try {
        const html = ReactDOMServer.renderToString(React.createElement(LeaderPage));
        res.send(html);
      } catch (error) {
        console.error("Error rendering LeaderPage:", error);
        res.status(500).send("Error rendering the leaderpage");
      }
    });

    router.get('/accountsetts', (req, res) => {
      try {
        const html = ReactDOMServer.renderToString(React.createElement(AccountSetts));
        res.send(html);
      } catch (error) {
        console.error("Error rendering AccountSetts:", error);
        res.status(500).send("Error rendering the accountsetts");
      }
    });

    router.get('/normalmode', (req, res) => {
      try {
        const html = ReactDOMServer.renderToString(React.createElement(NormalMode));
        res.send(html);
      } catch (error) {
        console.error("Error rendering NormalMode:", error);
        res.status(500).send("Error rendering the normalmode");
      }
    });

    router.get('/promode', (req, res) => {
      try {
        const html = ReactDOMServer.renderToString(React.createElement(ProMode));
        res.send(html);
      } catch (error) {
        console.error("Error rendering ProMode:", error);
        res.status(500).send("Error rendering the promode");
      }
    });

    router.get('/playstage', (req, res) => {
      try {
        const html = ReactDOMServer.renderToString(React.createElement(PlayStage));
        res.send(html);
      } catch (error) {
        console.error("Error rendering PlayStage:", error);
        res.status(500).send("Error rendering the playstage");
      }
    });

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
*/
/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
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

router.get('/homepage', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(Homepage));
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