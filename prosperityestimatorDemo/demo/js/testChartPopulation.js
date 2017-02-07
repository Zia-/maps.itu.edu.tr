var dataarray2015 = [14.657434,3.387449,10.138132,7.499352,7.643315,10.039939,3.894341,4.502525,2.572850,2.195359,3.824817,8.385540,];
var datacolor = ["#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360","#50614E","#61544E","#4E4F61","#000ABF","#A8A8A8","#42844C","#844242",];
var datalabel = ["Istanbul","West Marmara","Aegean","East Marmara","West Anatolia","Mediterranean","Central Anatolia","West Black Sea","East Black Sea","North East Anatolia","Central East Anatolia","South East Anatolia",];

var populationdata = {
    type: 'polarArea',
    data: {
        datasets: [{
            data: dataarray2015,
            backgroundColor: datacolor,
            label: 'population data' // for legend
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
            text: '2015 Population per Region in Turkey'
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
// window.onload = function() {
//     var ctx = document.getElementById("chart-area");
//     window.myPolarArea = Chart.PolarArea(ctx, config);
// };

var ctx = document.getElementById('chart-area').getContext('2d');
new Chart(ctx,populationdata);
