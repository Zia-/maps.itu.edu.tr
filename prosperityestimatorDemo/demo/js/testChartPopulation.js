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


var liveTrafficData = [2,4,6,3,4,5,7,5,3,0,3,0,7,5,0,3,4,6,4,2,2];
//var trafficColor = ["#990033","#996600","#809900","#990080","#FF1463","#339900","#660099","#1A0099","#008099","#D1A375","#993333","#B164D8","#33CC4D","#FFFF66","#FFB366","#FF1F1F","#CCFF99","#CC8033","#66CCCC","#996699","#809900"];
var trafficColor = "#990033"
var trafficLabel = ["<5","5-10","10-15","15-20","20-25","25-30","30-35","35-40","40-45","45-50","50-55","55-60","60-65","65-70","70-75","75-80","80-85","85-90","90-95","95-100",">100"];

var liveTrafficDistribution = {
    type: 'line', // Learn more here: https://www.sitepoint.com/introduction-chart-js-2-0-six-examples/
    data: {
        datasets: [{
            data: liveTrafficData,
            backgroundColor: trafficColor,
            label: 'Live Traffic Distribution' // for legend
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
            //text: 'Live Traffic Distribution 2'
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

var liveTrafficChartOptions = {
    bezierCurve : false,
    multiTooltipTemplate: "<%%=datasetLabel%> : <%%= value %>"
};


var ctxLiveTraffic = document.getElementById('livetrafficChart-area').getContext('2d');
var chartLiveTraffic = new Chart(ctxLiveTraffic,liveTrafficDistribution);



$("#saveLivetrafficChart").on("click", function(e){
  window.location.href = document.getElementById("livetrafficChart-area").toDataURL("image/png").replace("image/png", "image/octet-stream");
});




// Following code is imp
/*
// Help from here: https://github.com/chartjs/Chart.js/issues/2430
var ctx = document.getElementById('livetrafficChart-area').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'Th', 'F', 'S', 'Sz'],
    datasets: [{
      label: 'apples',
      data: [12, 10, "null", "null", "null", "null", "null"],
      //lineTension: 0,
      backgroundColor: "rgba(153,255,51,1)"
    }, {
      label: 'oranges',
      data: ["null", 10, 29, "null", "null", "null", "null"],
      backgroundColor: "rgba(255,153,0,1)"
    }, {
      label: 'oranges',
      data: ["null", "null", 29, 15, "null", "null", "null"],
      backgroundColor: "rgba(0,153,0,1)"
    }, {
      label: 'oranges',
      data: ["null", "null", "null", 15, 8, "null", "null"],
      backgroundColor: "rgba(255,0,0,1)"
    }, {
      label: 'oranges',
      data: ["null", "null", "null", "null", 8, 2, "null"],
      backgroundColor: "rgba(0,153,255,1)"
    }, {
      label: 'oranges',
      data: ["null", "null", "null", "null", "null", 2, 15],
      backgroundColor: "rgba(255,153,255,1)"
    }]
  }
});
*/
