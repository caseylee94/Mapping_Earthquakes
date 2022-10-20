// Add console.log to check to see if our code is working.
console.log("working");

// API Key
const API_Key = "pk.eyJ1IjoiY2FzZXlsZWUyOCIsImEiOiJjbDllc29kOHozZWRnM29xbTI2dG81dXlzIn0.Ks6tpjGqgq-YpoeFlJYM6w";

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 14);

//  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "yellow",
    fillColor: '#fffa1'
 }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_Key
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);