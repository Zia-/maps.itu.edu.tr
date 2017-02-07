var toggleVar = 0;
function displayData() {
  if (toggleVar == 0) {
    loadData();
    toggleVar = 1;
  } else {
    unLoadData();
    toggleVar = 0;
  }
}

var featureLayer;

function loadData() {
  var realUrl = "https://raw.githubusercontent.com/Zia-/Zia-.github.io/master/tuik_data/population.geojson"

  featureLayer = L.mapbox.featureLayer(realUrl, {
      pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, {
              radius: (feature.properties.population)/200000
          })
      },
      style: function (feature) {
      return {color: color_rgb_gen_redgreen( 78550, 14657434, feature.properties.population)};
      },

  })
    .on('ready', featureLayerPopupBind)
    .addTo(map);

  function featureLayerPopupBind() {
    featureLayer.eachLayer(function(layer) {
      var popup = new L.Popup({ autoPan: false });
      popup.setContent(
        '<div class="table-responsive">    '+
            '<table class = "table">'+
         '<caption><h1><strong>Properties</strong></h1></caption>'+
         '<tbody>'+
          '  <tr class = "active">'+
          '     <td>Name</td>'+
            '   <td>' + layer.feature.properties.name + '</td>'+
          '  </tr>'+
          '  <tr class = "active">'+
          '     <td>Population</td>'+
            '   <td>' + layer.feature.properties.population + '</td>'+
          '  </tr>'+
         '</tbody>'+
        '</table>'+
        '</div>'
      )
      layer.bindPopup(popup);
    });
  };

  var color_rgb_gen_redgreen = function(minvalue, maxvalue, currvalue){
    if (currvalue <= (maxvalue-minvalue)/2){
      R = parseInt(255 * currvalue / ((maxvalue-minvalue)/2))
      G = 255
      B = 0
    } else if (currvalue > (maxvalue-minvalue)/2){
      R = 255
      G = parseInt(255 * (maxvalue-currvalue) / ((maxvalue-minvalue)/2))
      B = 0
    }
    return 'rgb(' + R + ',' + G + ',' + B + ')'
  }
}


////////////////////////
// Add POI Layers

var featureLayerRegionalBoundary = L.mapbox.featureLayer(regionalBoundary);
var featureLayerWorkCenter = L.mapbox.featureLayer(workCenter);
var featureLayerTheater = L.mapbox.featureLayer(theater);
var featureLayerSupermarket = L.mapbox.featureLayer(supermarket);
var featureLayerSportsClub = L.mapbox.featureLayer(sportsClub);
var featureLayerPrimarySchool = L.mapbox.featureLayer(primarySchool);
var featureLayerPolice = L.mapbox.featureLayer(police);
var featureLayerPharmacy = L.mapbox.featureLayer(pharmacy);
var featureLayerMosque = L.mapbox.featureLayer(mosque);
var featureLayerMiddleSchool = L.mapbox.featureLayer(middleSchool);
var featureLayerMarket = L.mapbox.featureLayer(market);
var featureLayerLibrary = L.mapbox.featureLayer(library);
var featureLayerHotel = L.mapbox.featureLayer(hotel);
var featureLayerHighSchool = L.mapbox.featureLayer(highSchool);
var featureLayerGroceryStore = L.mapbox.featureLayer(groceryStore);
var featureLayerCarParking = L.mapbox.featureLayer(carParking);
var featureLayerRestaurant = L.mapbox.featureLayer(restaurant);
var featureLayerBeautyCenter = L.mapbox.featureLayer(beautyCenter);
var featureLayerBar = L.mapbox.featureLayer(bar);
var featureLayerBank = L.mapbox.featureLayer(bank);
var featureLayerATM = L.mapbox.featureLayer(atm);

featureLayerRegionalBoundary.setStyle({color:'red',weight:3,fillColor:'white',fillOpacity:0});
map.addLayer(featureLayerRegionalBoundary);

$("#menu li").on("click", function(){
  //alert($(this).text());

  if ($(this).attr('class') == "active"){
    featLayer = "featureLayer" + String($(this).text().replace(/\s/g, ''))
    map.removeLayer(window[featLayer]);
    $(this).removeClass("active");
  } else {
    featLayer = "featureLayer" + String($(this).text().replace(/\s/g, ''))
    map.addLayer(window[featLayer]);
    $(this).addClass("active");
  }

});




////////////////////////
// Add Polygon

var featureGroup = L.featureGroup().addTo(map);
var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: featureGroup
  },
  draw: {
    polygon: true,
    polyline: true,
    rectangle: true,
    circle: false,
    marker: true
  }
}).addTo(map);

drawControl.setPosition("topright")

map.on('draw:created', showFeatureGeometricalAtribute);
map.on('draw:edited', showFeatureGeometricalAtributeEdited);

function showFeatureGeometricalAtributeEdited(e) {
  e.layers.eachLayer(function(layer) {
    showFeatureGeometricalAtribute({ layer: layer });
  });
}
function showFeatureGeometricalAtribute(e) {
  if (e.layerType === 'polygon'){
    featureGroup.clearLayers();
    featureGroup.addLayer(e.layer);
    e.layer.bindPopup((LGeo.area(e.layer) / 1).toFixed(2) + ' m<sup>2</sup>');
    e.layer.openPopup();
  } else if (e.layerType === 'polyline'){
    featureGroup.clearLayers();
    featureGroup.addLayer(e.layer);
    var tempLatLng = null;
    var totalDistance = 0.00000;
    $.each(e.layer._latlngs, function(i, latlng){
        if(tempLatLng == null){
            tempLatLng = latlng;
            return;
        }
        totalDistance += tempLatLng.distanceTo(latlng);
        tempLatLng = latlng;
    });
    e.layer.bindPopup((totalDistance).toFixed(2) + ' meters');
    e.layer.openPopup();
  } else if (e.layerType === 'rectangle'){
    featureGroup.clearLayers();
    featureGroup.addLayer(e.layer);
    e.layer.bindPopup((LGeo.area(e.layer) / 1).toFixed(2) + ' m<sup>2</sup>');
    e.layer.openPopup();
  } else if (e.layerType === 'circle'){
    var area = 0;
    var radius = e.layer.getRadius();
    area = (Math.PI) * (radius * radius);
    e.layer.bindPopup((area / 1).toFixed(2) + ' m<sup>2</sup>');
    e.layer.openPopup();
  } else if (e.layerType === 'marker'){
    featureGroup.clearLayers();
    featureGroup.addLayer(e.layer);
  }
}



////////////////////////
// Add Polygon

map.on('mousemove', function (e) {
    /*document.getElementById('info').innerHTML =
    // e.point is the x, y coordinates of the mousemove event relative
    // to the top-left corner of the map
    JSON.stringify(e.containerPoint) +
        // e.lngLat is the longitude, latitude geographical position of the event
    JSON.stringify(e.latlng);*/
    //console.log(JSON.stringify(e.containerPoint));
    //document.getElementById("coord").value= JSON.stringify(e.containerPoint);
    document.getElementById("xyPointer").innerText = "X:" + e.containerPoint["x"] + ",Y:" + e.containerPoint["y"];
    document.getElementById("latlngPointer").innerText = "Lat:" + e.latlng["lat"].toFixed(5) + ",Lng:" + e.latlng["lng"].toFixed(5);
    document.getElementById("zoomLevel").innerText = "Zoom:" + map.getZoom();

});



////////////////////////
// Heat-Map

function convertToArray(geojson){
  var poiArray = window[geojson];
  var jsarray = [];
  for (var i=0; i<poiArray["features"].length; i++){
    var singleCoordArray = [];
    singleCoordArray.push(poiArray["features"][i]["geometry"]["coordinates"][1]);
    singleCoordArray.push(poiArray["features"][i]["geometry"]["coordinates"][0]);
    jsarray.push(singleCoordArray)
  }
  return jsarray
}

function heatMap(){
  // Following code will remove all GeoJSON layers and reset corresponding buttons
  map.eachLayer(function (layer) {
    try {
      if (layer['_geojson'][0] !== 'undefined'){
        map.removeLayer(layer)
      }
    } catch (e) {}
  });
  var ul = document.getElementById("menu");
  var items = ul.getElementsByTagName("li");
  for (var i = 0; i < items.length; ++i) {
    if ($(items[i]).attr('class') == "active"){
      $(items[i]).removeClass("active")
    } else {}
  }
  //////////////////////////////

  $('#myModal').modal('show')
  $('input[type=radio]').click(function() {
    map.eachLayer(function (layer) {
      console.log(layer);
      /*try {
        if (layer['_latlngs'] !== 'undefined'){
          //map.removeLayer(layer)
          console.log(layer);
        }
      } catch (e) {}*/
    });

    addressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });
    var heatMap = L.heatLayer(convertToArray($(this).val()));
    map.addLayer(heatMap);

  });

};



////////////////////////
// Select Diff Maps

function chooseMapStyle(){
  $('#myModal2').modal('show')
  $('input[type=radio]').click(function() {
    L.mapbox.styleLayer('mapbox://styles/mapbox/' + $(this).val() + '-v9').addTo(map);
    //$(this).val()
  });
}
