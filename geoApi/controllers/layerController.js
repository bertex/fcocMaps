const Pool = require('pg').Pool
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
    let queryLayer = 'SELECT  nomprov, geom FROM provincies;'
    pool.query(queryLayer, (err, res) => {
        if (err) {
            return console.error('Error ejecutando la consulta. ', err.stack)
        }
        let geojson = GeoJSON.parse(res.rows, { MultiPolygon: 'geom' });
        response.json(geojson);
    })
}
module.exports = { getGeojson }