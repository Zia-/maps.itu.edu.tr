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

    //var abs = [[41.102041, 29.023001], [41.103998, 29.031327], [41.106875, 29.024160], [41.102041, 29.023001]]
    /*var bank = L.polyline(bankpoly, bankcolor), bankcolor = {color: '#0000FF'};
    var other = L.polyline(otherpoly, othercolor), othercolor = {color: '#B03A2E'};
    var faculty = L.polyline(facultypoly, facultycolor), facultycolor = {color: '#F7DC6F'};
    var pool = L.polyline(poolpoly, poolcolor), poolcolor = {color: '#BA4A00'};
    var lojman = L.polyline(lojmanpoly, lojmancolor), lojmancolor = {color: '#1C2833'};
    var market = L.polyline(marketpoly, marketcolor), marketcolor = {color: '#6C3483'};
    var school = L.polyline(schoolpoly, schoolcolor), schoolcolor = {color: '#2874A6'};
    var autopark = L.polyline(autoparkpoly, autoparkcolor), autoparkcolor = {color: '#A04000'};
    var social = L.polyline(socialpoly, socialcolor), socialcolor = {color: '#839192'};
    var sport = L.polyline(sportpoly, sportcolor), sportcolor = {color: '#73C6B6'};
    var hostel = L.polyline(hostelpoly, hostelcolor), hostelcolor = {color: '#EB984E'};*/

    var bank = L.marker([41.106656, 29.025201]).bindPopup('Bank'),
    other  = L.marker([41.10626, 29.01517]).bindPopup('Other Buildings'),
    faculty  = L.marker([41.10414, 29.02612]).bindPopup('Maden Faculty'),
    pool    =  L.marker([41.10198, 29.03102]).bindPopup('Dam'),
    lojman    =  L.marker([41.10231, 29.03519]).bindPopup('Lojman'),
    market  = L.marker([41.10603, 29.02011]).bindPopup('Market'),
    school  = L.marker([41.10600, 29.03590]).bindPopup('School'),
    autopark    =  L.marker([41.10279, 29.02303]).bindPopup('Main Autopark'),
    social    =  L.marker([41.10627, 29.02369]).bindPopup('SD Social Center'),
    sport    =  L.marker([41.10283, 29.02152]).bindPopup('Sports Stadium'),
    hostel    =  L.marker([41.10211, 29.02899]).bindPopup('Golet Hostel');

    var wholecampus = L.polyline(ayazagapolyline, polyline_options)
    hotlocation = L.layerGroup([wholecampus, bank, other, faculty, pool, lojman, market, school, autopark, social, sport, hostel]);
    var grouphotlocation = new L.featureGroup([wholecampus]);
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


// Navigate Function
function navigate(){
  var start  =  L.marker([41.105481, 29.023517]).bindPopup('Tuzla Campus');
  var end  =  L.marker([41.106491, 29.021161]).bindPopup('Tuzla Campus');
  var route1color = {color: '#00B3FD'}, route1 = L.polyline(route1line, route1color);
  var route2color = {color: '#FF9E00'}, route2 = L.polyline(route2line, route2color);
  var route3color = {color: '#800080'}, route3 = L.polyline(route3line, route3color);
  var routesall = L.layerGroup([route1, route2, route3, start, end]);

  var wholecampus = L.polyline(ayazagapolyline)
  var grouphotlocation = new L.featureGroup([wholecampus]);
  map.fitBounds(grouphotlocation.getBounds());

  map.addLayer(routesall);
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
