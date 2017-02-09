// Good Chart Demos:
// https://www.sitepoint.com/introduction-chart-js-2-0-six-examples/


//////////////////
// POI Polar Chart

var dataarray2015 = [6,2,15,15,5,8,2,13,1,9,1,1,3,1,1,20,3,7,1,2];
var datacolor = ["#990033","#996600","#809900","#990080","#FF1463","#339900","#660099","#1A0099","#008099","#D1A375","#993333","#B164D8","#33CC4D","#FFFF66","#FFB366","#FF1F1F","#CCFF99","#CC8033","#66CCCC","#996699"];
var datalabel = ["ATM","Bank","Bar","Beauty Center","Car Parking","Grocery Store","High School","Hotel","Library","Market","Middle School","Mosque","Pharmacy","Police","Primary School","Restaurant","Sports Club","Supermarket","Theater","Work Center"];

var populationdata = {
    type: 'pie', // Learn more here: https://www.sitepoint.com/introduction-chart-js-2-0-six-examples/
    data: {
        datasets: [{
            data: dataarray2015,
            backgroundColor: datacolor,
            label: 'POI population' // for legend
        }],
        labels: datalabel
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'POI distribution in the region'
        },
        scale: {
          ticks: {
            beginAtZero: true
          },
          reverse: false
        },
        animateRotate:false
    }
};


var ctxPolar = document.getElementById('polarchart-area').getContext('2d');
var chartPOIPolar = new Chart(ctxPolar,populationdata);


$("#savePolarChart").on("click", function(e){
  window.location.href = document.getElementById("polarchart-area").toDataURL("image/png").replace("image/png", "image/octet-stream");
});





//////////////////
// Live Traffic Line Chart

var liveTrafficData0_5 = [2,5,"null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData5_10 = ["null",5,8,"null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData10_15 = ["null","null",8,10,"null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData15_20 = ["null","null","null",10,16,"null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData20_25 = ["null","null","null","null",16,20,"null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData25_30 = ["null","null","null","null","null",20,30,"null","null","null","null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData30_35 = ["null","null","null","null","null","null",30,42,"null","null","null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData35_40 = ["null","null","null","null","null","null","null",42,40,"null","null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData40_45 = ["null","null","null","null","null","null","null","null",40,45,"null","null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData45_50 = ["null","null","null","null","null","null","null","null","null",45,50,"null","null","null","null","null","null","null","null","null","null"];
var liveTrafficData50_55 = ["null","null","null","null","null","null","null","null","null","null",50,47,"null","null","null","null","null","null","null","null","null"];
var liveTrafficData55_60 = ["null","null","null","null","null","null","null","null","null","null","null",47,42,"null","null","null","null","null","null","null","null"];
var liveTrafficData60_65 = ["null","null","null","null","null","null","null","null","null","null","null","null",42,40,"null","null","null","null","null","null","null"];
var liveTrafficData65_70 = ["null","null","null","null","null","null","null","null","null","null","null","null","null",40,37,"null","null","null","null","null","null"];
var liveTrafficData70_75 = ["null","null","null","null","null","null","null","null","null","null","null","null","null","null",37,35,"null","null","null","null","null"];
var liveTrafficData75_80 = ["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null",35,32,"null","null","null","null"];
var liveTrafficData80_85 = ["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null",32,25,"null","null","null"];
var liveTrafficData85_90 = ["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null",25,20,"null","null"];
var liveTrafficData90_95 = ["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null",20,10,"null"];
var liveTrafficData95_100 = ["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null",10,3];
var liveTrafficData100_more = ["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null",3];

//var trafficColor = ["#990033","#996600","#809900","#990080","#FF1463","#339900","#660099","#1A0099","#008099","#D1A375","#993333","#B164D8","#33CC4D","#FFFF66","#FFB366","#FF1F1F","#CCFF99","#CC8033","#66CCCC","#996699","#809900"];
//var trafficColor = "#990033"
var trafficLabel = ["<5","5-10","10-15","15-20","20-25","25-30","30-35","35-40","40-45","45-50","50-55","55-60","60-65","65-70","70-75","75-80","80-85","85-90","90-95","95-100",">100"];

var liveTrafficDistribution = {
    type: 'line', // Learn more here: https://www.sitepoint.com/introduction-chart-js-2-0-six-examples/
    data: {
        datasets: [{
            data: liveTrafficData0_5,
            backgroundColor: '#FF0000', // Generate Color: http://www.perbang.dk/rgbgradient/
            label: '<5' // for legend
        },{
            data: liveTrafficData5_10,
            backgroundColor: '#FB1700',
            label: '5-10' // for legend
        },{
            data: liveTrafficData10_15,
            backgroundColor: '#F82F00',
            label: '10-15' // for legend
        },{
            data: liveTrafficData15_20,
            backgroundColor: '#F44500',
            label: '15-20' // for legend
        },{
            data: liveTrafficData20_25,
            backgroundColor: '#F15B00',
            label: '20-25' // for legend
        },{
            data: liveTrafficData25_30,
            backgroundColor: '#EE7100',
            label: '25-30' // for legend
        },{
            data: liveTrafficData30_35,
            backgroundColor: '#EA8600',
            label: '30-35' // for legend
        },{
            data: liveTrafficData35_40,
            backgroundColor: '#E79A00',
            label: '35-40' // for legend
        },{
            data: liveTrafficData40_45,
            backgroundColor: '#E3AD00',
            label: '40-45' // for legend
        },{
            data: liveTrafficData45_50,
            backgroundColor: '#E0C000',
            label: '45-50' // for legend
        },{
            data: liveTrafficData50_55,
            backgroundColor: '#DDD200',
            label: '50-55' // for legend
        },{
            data: liveTrafficData55_60,
            backgroundColor: '#CFD900',
            label: '55-60' // for legend
        },{
            data: liveTrafficData60_65,
            backgroundColor: '#B7D600',
            label: '60-65' // for legend
        },{
            data: liveTrafficData65_70,
            backgroundColor: '#A0D300',
            label: '65-70' // for legend
        },{
            data: liveTrafficData70_75,
            backgroundColor: '#8ACF00',
            label: '70-75' // for legend
        },{
            data: liveTrafficData75_80,
            backgroundColor: '#74CC00',
            label: '75-80' // for legend
        },{
            data: liveTrafficData80_85,
            backgroundColor: '#5FC800',
            label: '80-85' // for legend
        },{
            data: liveTrafficData85_90,
            backgroundColor: '#4BC500',
            label: '85-90' // for legend
        },{
            data: liveTrafficData90_95,
            backgroundColor: '#37C200',
            label: '90-95' // for legend
        },{
            data: liveTrafficData95_100,
            backgroundColor: '#24BE00',
            label: '95-100' // for legend
        },{
            data: liveTrafficData100_more,
            backgroundColor: '#11BB00',
            label: '>100' // for legend
        }],
        labels: trafficLabel
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Live Traffic Distribution'
        },
        scales: {
          ticks: {
            beginAtZero: true
          },
          reverse: false,

          // Axis Label
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Speed Limit in km/h'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Road Count in the region'
            }
          }]

        },
        animateRotate:false
    }
};

var ctxLiveTraffic = document.getElementById('livetrafficChart-area').getContext('2d');
var chartLiveTraffic = new Chart(ctxLiveTraffic,liveTrafficDistribution);

// Live Traffic Update Function.
// So many conditions to keep last index value and first index value of subsequent arrays same.
var lastDistValue = 0;
var whichCount = true;
function updateLiveTraffic(arrayVariable, min, max){
  for (var i=0; i<arrayVariable.length; i++){
    if (arrayVariable[i] !== "null"){
      if (i == 0){
        arrayVariable[i] = Math.round(Math.random() * (max - min) + min);
      } else if (whichCount){
        var newValue = Math.round(Math.random() * (max - min) + min);
        arrayVariable[i] = newValue;
        lastDistValue = newValue;
        whichCount = false;
      } else {
        arrayVariable[i] = lastDistValue;
        whichCount = true;
      }
    }
  };
};

// Update Live Traffic distribution Every 5 second.
setInterval(function(){
  // Update Live Traffic data
  // More Info: http://jsbin.com/yitep/5/edit?html,js,output
  // More Info: http://jsbin.com/ruyicuwoto/edit?html,js,output
  updateLiveTraffic(liveTrafficData0_5, 0, 5);
  updateLiveTraffic(liveTrafficData5_10, 5, 8);
  updateLiveTraffic(liveTrafficData10_15, 8, 10);
  updateLiveTraffic(liveTrafficData15_20, 10, 16);
  updateLiveTraffic(liveTrafficData20_25, 16, 20);
  updateLiveTraffic(liveTrafficData25_30, 20, 30);
  updateLiveTraffic(liveTrafficData30_35, 30, 42);
  updateLiveTraffic(liveTrafficData35_40, 42, 40);
  updateLiveTraffic(liveTrafficData40_45, 40, 45);
  updateLiveTraffic(liveTrafficData45_50, 45, 50);
  updateLiveTraffic(liveTrafficData50_55, 50, 47);
  updateLiveTraffic(liveTrafficData55_60, 47, 42);
  updateLiveTraffic(liveTrafficData60_65, 42, 40);
  updateLiveTraffic(liveTrafficData65_70, 40, 37);
  updateLiveTraffic(liveTrafficData70_75, 37, 35);
  updateLiveTraffic(liveTrafficData75_80, 35, 32);
  updateLiveTraffic(liveTrafficData80_85, 32, 25);
  updateLiveTraffic(liveTrafficData85_90, 25, 20);
  updateLiveTraffic(liveTrafficData90_95, 20, 10);
  updateLiveTraffic(liveTrafficData95_100, 10, 3);
  updateLiveTraffic(liveTrafficData100_more, 3, 0);

  chartLiveTraffic.update();
}, 5000);

// Live Time Loop
$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#currentDateTime').html('&nbsp' + momentNow.format('A hh:mm:ss') + ' '
                            + momentNow.format('YYYY MMMM DD') + ' '
                            + momentNow.format('dddd')
                             .substring(0,3).toUpperCase());
        //$('#time-part').html(momentNow.format('A hh:mm:ss'));
    }, 100);
});

$("#saveLivetrafficChart").on("click", function(e){
  window.location.href = document.getElementById("livetrafficChart-area").toDataURL("image/png").replace("image/png", "image/octet-stream");
});






/////////////////////////
// View Data and Download

function appendNewRows(attributePOI){
  var tableBodyData = document.getElementById("tbodyData");
  var attributePOINew = window[attributePOI]
  for (var i=0; i<attributePOINew.features.length; i++){
    var row = tableBodyData.insertRow(i);
    row.insertCell(0).innerHTML = i+1;
    row.insertCell(1).innerHTML = attributePOINew.features[i].properties.description;
    row.insertCell(2).innerHTML = attributePOINew.features[i].geometry.coordinates[1] + "," + attributePOINew.features[i].geometry.coordinates[0];
  }
}

function pullData(attributePOI) {
  $("#tbodyData tr").remove();
  appendNewRows(attributePOI);
};

function viewData() {
    $('#myModalViewDownloadData').modal('show');
    $('input[name=inlineRadioOptionsView]').click(function() {
        // Update Title Name
        pullData($(this).val());
        document.getElementById("viewDataHeading").innerHTML = window[$(this).val()].properties;
        $('#myModalData').modal('show');
    });
}

/*function downloadViewDataHTML(){
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "export.html";
    a.href = "data:text/html," + document.getElementById("divForDownloadViewData").innerHTML;
    a.click();
}*/





//////////////////////////
// Print Map

/*$("#printMapButton").click(function() {
  console.log("1");
    html2canvas($("#map-div"), {
        onrendered: function(canvas) {
          console.log("3");
          window.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
          console.log("4");

            //theCanvas = canvas;

            //canvas.toBlob(function(blob) {
            //    saveAs(blob, "Dashboard.png");
            //});
        }
    });
});*/

/*$("#printMapCustom").on("click", function(e){

  window.location.href = document.getElementById("livetrafficChart-area").toDataURL("image/png").replace("image/png", "image/octet-stream");
});*/
