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
