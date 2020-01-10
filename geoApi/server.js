'use strict';
//server.js
/*jshint esversion: 6 */
/*jshint node:true */
const express = require("express");
const app = express();
const layerRouter = require('./routes/api');
app.use('/api', layerRouter);
app.listen(3000, () => {
    console.log("API of geocalized data. Server running on port 3000");
});
