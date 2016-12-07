// Display content of hotButtons
var hotlocation;
function hotbuttonfun(x){
  if (map.hasLayer(hotlocation)){
    map.removeLayer(hotlocation);
  }
  //hotlocation = L.marker([41.017058, 28.872271]).bindPopup('This is Littleton, CO.'),
  var polyline_options = {
  color: '#FF0000'
  };
  if (x == 'itu'){
    var ayazaga = L.marker([41.105509, 29.026404]).bindPopup('Ayazaga Campus'),
    taskisla  = L.marker([41.041059, 28.989922]).bindPopup('Taskisla Campus'),
    gumussuyu  = L.marker([41.038149, 28.991070]).bindPopup('Gumussuyu Campus'),
    macka    =  L.marker([41.044805, 28.995469]).bindPopup('Macka Campus'),
    tuzla    =  L.marker([40.814296, 29.292378]).bindPopup('Tuzla Campus');
    hotlocation = L.layerGroup([ayazaga, taskisla, gumussuyu, macka, tuzla]);
    var grouphotlocation = new L.featureGroup([ayazaga, taskisla, gumussuyu, macka, tuzla]);
    map.fitBounds(grouphotlocation.getBounds());
  }
  else if (x == 'ayazagapoly'){
    hotlocation = L.polyline(ayazagapolyline, polyline_options)
    var grouphotlocation = new L.featureGroup([hotlocation]);
    map.fitBounds(grouphotlocation.getBounds());
  }
  else if (x == 'taskislapoly'){
    var taskisla    = L.marker([41.041059, 28.989922]).bindPopup('Taskisla Campus');
    hotlocation = L.layerGroup([taskisla]);
    var grouphotlocation = new L.featureGroup([taskisla]);
    map.fitBounds(grouphotlocation.getBounds());
  }
  else if (x == 'gumussuyupoly'){
    var gumussuyu = L.marker([41.038149, 28.991070]).bindPopup('Gumussuyu Campus');
    hotlocation = L.layerGroup([gumussuyu]);
    var grouphotlocation = new L.featureGroup([gumussuyu]);
    map.fitBounds(grouphotlocation.getBounds());
  }
  else if (x == 'mackapoly'){
    var macka  =  L.marker([41.044805, 28.995469]).bindPopup('Macka Campus');
    hotlocation = L.layerGroup([macka]);
    var grouphotlocation = new L.featureGroup([macka]);
    map.fitBounds(grouphotlocation.getBounds());
  }
  else if (x == 'tuzlapoly'){
    var tuzla  =  L.marker([40.814296, 29.292378]).bindPopup('Tuzla Campus');
    hotlocation = L.layerGroup([tuzla]);
    var grouphotlocation = new L.featureGroup([tuzla]);
    map.fitBounds(grouphotlocation.getBounds());
  }
  map.addLayer(hotlocation);
}

// Following code works for hotButtons
$(document).ready(function() {
    $('input:radio[name=hotbuttons]').change(function() {
        if (this.value == 'itu') {
          hotbuttonfun('itu')
        }
        else if (this.value == 'ayazaga') {
            hotbuttonfun('ayazagapoly')
        }
        else if (this.value == 'taskisla') {
            hotbuttonfun('taskislapoly')
        }
        else if (this.value == 'gumussuyu') {
            hotbuttonfun('gumussuyupoly')
        }
        else if (this.value == 'macka') {
            hotbuttonfun('mackapoly')
        }
        else if (this.value == 'tuzla') {
            hotbuttonfun('tuzlapoly')
        }
    });
});
