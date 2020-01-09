var myStyle = {
    fillColor: "green",
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
};
var bcn = $.ajax({
    url: "../geodata/cat.geojson",
    dataType: "json",
    success: console.log("BCN data successfully loaded."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
$.when(bcn).done(function () {
    var mymap = L.map('mapid').setView([41.50, 1.50], 7);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11'
    }).addTo(mymap);
    console.log(bcn);
    var myLayer = L.geoJSON(bcn.responseJSON, {style: myStyle}).addTo(mymap);
});
