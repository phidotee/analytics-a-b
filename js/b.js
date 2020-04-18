/*
 * General
 */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
$(function () {
  $('[data-toggle="popover"]').popover()
})

$("#search-input").keyup(function(e){
  if(e.keyCode == 13) {
    $(this).addClass("is-valid");
    $(".visualization-placeholder, .insights-placeholder").hide();
    $(".loader").show();
    setTimeout( function() {
      $(".visualization-chart, .insights .card-header .badge, .insight-results").show();
      $(".loader").hide();
    }, 3000 );
  }
});

/*
 * Chart
 */
var ctx = document.getElementById("demochart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
    datasets: [{
      label: 'Employee',
      backgroundColor: "#caf270",
      data: [12, 59, 5, 56, 58,12, 59, 87, 45],
    }, {
      label: 'Engineer',
      backgroundColor: "#45c490",
      data: [12, 59, 5, 56, 58,12, 59, 85, 23],
    }, {
      label: 'Government',
      backgroundColor: "#008d93",
      data: [12, 59, 5, 56, 58,12, 59, 65, 51],
    }, {
      label: 'Political parties',
      backgroundColor: "#2e5468",
      data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
    }],
  },
  options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
  }
});
