//server.js
const express = require("express");
const app = express();
const layerRouter = require('./routes/api');
app.use('/api', layerRouter);
app.listen(3000, () => {
    console.log("API de datos geográficos. El servidor está inicializado en el puerto 3000");
});
