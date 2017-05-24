L.mapbox.accessToken = 'pk.eyJ1IjoiemlhLW0iLCJhIjoiQjM5aVpfTSJ9.s_U7YxQCK-Zq5SaJemH5bA';
var minlatbound = 41.039631, minlonbound = 29.009983, maxlatbound = 41.068771, maxlonbound = 29.049293;
var southWestbound = L.latLng(minlatbound, minlonbound),
    northEastbound = L.latLng(maxlatbound, maxlonbound),
    bounds = L.latLngBounds(southWestbound, northEastbound);

var map = L.mapbox.map('map-div', 'mapbox.streets-satellite', {
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 13
});
map.fitBounds(bounds)
L.control.scale({imperial:false}).addTo(map); // Add Scale
