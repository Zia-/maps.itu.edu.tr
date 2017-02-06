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
