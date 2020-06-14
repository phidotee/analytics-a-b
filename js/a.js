/*
 * General
 */
if ($(window).width() > 767) {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  })
}

if ($(window).width() > 767) {
  $( function() {
    $( ".draggable" ).draggable({
      helper: 'clone',
      snap: ".ui-droppable",
      revert: true
    });
    $( ".droppable" ).droppable({
    tolerance: 'pointer',
    drop: function(event, ui) {
      $(this).append(ui.draggable.clone());
      $(this).parent().addClass("success");
      $(this).children().addClass("success");
      $(".visualization").addClass("success");
      $(".visualization-placeholder").hide();
      $(".visualization-chart").show();
    }
    });
  });
} else {
  $(".interactive").click(function() {
    $(".visualization, .interactive").addClass("success");
    $(".visualization-placeholder").hide();
    $(".visualization-chart").show();
  });
}

$('.chart-type').on('change', function() {
  if ( this.value == 'Pie Chart') {
    $(".pie-chart").show();
    $(".bar-chart").hide();
  } else {
    $(".pie-chart").hide();
    $(".bar-chart").show();
  }
});
var target = $('.chart-type option:selected').val();
if(target == "#pie") {
  $(".pie-chart").show();
} else if(target == "#bar") {
  $(".bar-chart").show();
}

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
