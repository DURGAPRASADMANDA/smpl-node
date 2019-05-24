// Import required modules
const express = require('express');
const router = new express.Router();
const userCTRL = require('./user.controller');
// URLs
const routes = () => {
    router.route('/')
        .get(userCTRL.fetchUsers)
    return router;
};

module.exports = routes;
