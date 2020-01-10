'use strict';
/*jshint esversion: 6 */
/*jshint node:true */
const Pool = require('pg').Pool;
const GeoJSON = require('geojson');
const config = require('../config');
const { db: { user, host, database, password, port } } = config;
const pool = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: port,
});

const getGeojson = (request, response, next) => {
    let queryLayer = 'SELECT  st_asGeoJson(geom) as geometry FROM test;';
    pool.query(queryLayer, (err, res) => {
        if (err) {
            return console.error('Error ejecutando la consulta. ', err.stack);
        }
        let data = res.rows;
        data.forEach( function (item, index, array){
            var geo  = JSON.parse (array[index].geometry);
            array[index].geometry = geo;
        });
        let geojson = GeoJSON.parse(data, {GeoJSON : 'geometry' });
        response.json(geojson);
    });
};
module.exports = { getGeojson };
