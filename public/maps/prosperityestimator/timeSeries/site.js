var bbox =  [30.779823, 38.746725, 33.794917, 40.790177];
L.mapbox.accessToken = 'pk.eyJ1IjoiemlhLW0iLCJhIjoiY2ozMnE0NzJhMDAwbzMycHBqeGltNWx3ZiJ9._pdNbiqPlQ941qPwpJBgGA';

var map = L.mapbox.map('map', 'mapbox.dark',
    {zoomControl: false ,attributionControl: false, infoControl: true})
    .setView([39.904650, 32.607538], 8);
map.scrollWheelZoom.disable();

var layerGroup = L.layerGroup().addTo(map);

var activeGrid = pointgrid;
var activeGridName = 'point';
var speeds = {
    'slow': 1000,
    'medium': 200,
    'fast': 50
};
var speed = speeds.medium;

var year = 1955;
var i = 0;
setInterval(function(){
    if(i % speed === 0){
        setViz(activeGrid, year.toString());
        year++;
        if(year > 2013) year = 1955;
    }
    i+=5;
}, 1);

function setViz (grid, year) {
    // update year
    document.getElementById('progress').style.width = ((year-1955)/(2013-1955))*100+'%';
    document.getElementById('year').innerHTML = year;
    // filter empty data
    var filtered = turf.featurecollection([]);
    filtered.features = grid.features.filter(function(cell){
        return cell.properties[year];
    });
    // clear old data
    layerGroup.clearLayers();

    if(activeGridName === 'point') {
        // scaled point grid
        L.geoJson(activeGrid, {
            pointToLayer: function(feature, latlng) {
                var radius = 0;
                var prop = year.toString()+'_class';
                radius = feature.properties[prop];

                return L.circleMarker(latlng, {
                        radius: radius,
                        fillColor: '#0ff',
                        fillOpacity: (feature.properties[prop])/10,
                        stroke: false
                    });
            }
        }).addTo(layerGroup);
    } else if(activeGridName === 'heat') {
        // heatmap on points
        var contour = '#0ff';
        var heatData = filtered.features.map(function(pt) {
          return [pt.geometry.coordinates[1], pt.geometry.coordinates[0], pt.properties[year+'_class']/10];
        });
        L.heatLayer(heatData, {
            maxZoom: 4,
            radius: 30,
            blur: 25,
            max:1,
            gradient: {0:contour,0.1:'#4dffff',
                0.2:'#00b3b3',0.21:contour,0.3:'#00b3b3',
                0.4:'#00cccc',0.41:contour,0.43:'#00cccc',
                0.6:'#00cccc',0.61:contour,0.63:'#00cccc',
                0.8:'#00e5e5',0.81:contour,0.83:'#00e5e5',
                0.988:'#4dffff',0.989:contour,0.90:'#4dffff',
                0.97:'#4dffff',0.98:contour,0.99:'#4dffff',
                1:'#fff'}
            }).addTo(layerGroup);
    } else {
        // poly grid layers
        var prop = year.toString()+'_class';
        filtered.features.forEach(function(cell) {
            cell.properties.fill = '#0ff';
            cell.properties['stroke-width'] = 0.2;
            cell.properties.stroke = '#0ff';
            cell.properties['stroke-opacity'] = (cell.properties[prop])/4;
            cell.properties['fill-opacity'] = (cell.properties[prop])/8.5;
        });

        L.geoJson(filtered, {
            style: L.mapbox.simplestyle.style,
        }).addTo(layerGroup);
    }
}

document.getElementById('square').onclick = function() {
    activeGrid = squaregrid;
    activeGridName = 'square';
};
document.getElementById('triangle').onclick = function() {
    activeGrid = trigrid;
    activeGridName = 'triangle';
};
document.getElementById('hex').onclick = function() {
    activeGrid = hexgrid;
    activeGridName = 'hex';
};
document.getElementById('point').onclick = function() {
    activeGrid = pointgrid;
    activeGridName = 'point';
};
document.getElementById('heat').onclick = function() {
    activeGrid = pointgrid;
    activeGridName = 'heat';
};

// set speed
document.getElementById('slow').onclick = function() {
    speed = speeds.slow;
    document.getElementById('progress').style.transition = 'width 1s linear';
};
document.getElementById('medium').onclick = function() {
    speed = speeds.medium;
    document.getElementById('progress').style.transition = 'width 0.2s linear';
};
document.getElementById('fast').onclick = function() {
    speed = speeds.fast;
    document.getElementById('progress').style.transition = 'width 0.05s linear';
};
