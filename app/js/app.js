'use strict';
var app = angular.module("demoapp", ["leaflet-directive"]);
app.controller("GeoJSONController", [ '$scope', '$http', 'leafletData', function($scope, $http, leafletData) {
  angular.extend($scope, {
    catalunya: {
      lat: 41.50,
      lng: 1.50,
      zoom: 8
    },
    defaults: {
      scrollWheelZoom: true
    }
  });
  $http.get("../geodata/cat.geojson").then(successCallback,errorCallback);

  function successCallback(response) {
    angular.extend($scope, {
      geojson: {
        data: response.data,
        style: {
          fillColor: "green",
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }
    });
  }
  function errorCallback (response) {
  }
}]);
