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
    $(this).hide();
    $(".question").show();
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
    labels: ["January 2020","February 2020","March 2020","April 2020","May 2020","June 2020"],
    datasets: [{
      label: 'Businesses (B2B)',
      backgroundColor: "#caf270",
      data: [52, 59, 44, 32, 21, 12],
    }, {
      label: 'Customers (B2C)',
      backgroundColor: "#45c490",
      data: [40, 45, 35, 25, 15, 12],
    }, {
      label: 'Non-government organizations (NGOs)',
      backgroundColor: "#008d93",
      data: [25, 32, 25, 20, 15, 12],
    }, {
      label: 'Government (Public)',
      backgroundColor: "#2e5468",
      data: [10, 15, 35, 56, 43, 34],
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
