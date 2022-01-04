const express = require("express");
const app = express.Router();
const Service = require('../services/service');

app.get("/getSymbols", function (req, res) {
    Service.getSymbols(req, res);
});

app.get("/getForcasts", function (req, res) {
    Service.getForcasts(req, res);
});


module.exports = app;
