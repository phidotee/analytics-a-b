/*
 * General
 */
var Clock = {
  totalSeconds: 0,
  start: function () {
    if (!this.interval) {
        var self = this;
        function pad(val) { return val > 9 ? val : "0" + val; }
        this.interval = setInterval(function () {
          self.totalSeconds += 1;


          $("#min").text(pad(Math.floor(self.totalSeconds / 60 % 60)));
          $("#sec").text(pad(parseInt(self.totalSeconds % 60)));
        }, 1000);
    }
  },
  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
  },
};

var code = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
$('.code').text(code);

$('#start').click(function () { Clock.start(); });

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
      revert: "invalid",
    });
    $( ".droppable.horizontal" ).droppable({
      accept: ".to-horizontal",
      tolerance: 'pointer',
      drop: function(event, ui) {
        $(this).append(ui.draggable.clone());
        if ( $('.to-horizontal','.horizontal').length == 1 || $('.to-vertical','.vertical').length == 1 || $('.to-color','.color').length == 1 ) {
          $(this).parent().addClass("success");
          $(this).children().addClass("success");
        }
        if ( $('.to-horizontal','.horizontal').length == 1 && $('.to-vertical','.vertical').length == 1 && $('.to-color','.color').length == 1 ) {
          $(".visualization-placeholder").hide();
          $(".loader").show();
          setTimeout( function() {
            $(".visualization-chart").show();
            $(".loader").hide();
            Clock.pause();
            $(".timer").addClass("text-success");
          }, 1000 );
        }
      }
    });
    $( ".droppable.vertical" ).droppable({
      accept: ".to-vertical",
      tolerance: 'pointer',
      drop: function(event, ui) {
        $(this).append(ui.draggable.clone());
        if ( $('.to-horizontal','.horizontal').length == 1 || $('.to-vertical','.vertical').length == 1 || $('.to-color','.color').length == 1 ) {
          $(this).parent().addClass("success");
          $(this).children().addClass("success");
        }
        if ( $('.to-horizontal','.horizontal').length == 1 && $('.to-vertical','.vertical').length == 1 && $('.to-color','.color').length == 1 ) {
          $(".visualization-placeholder").hide();
          $(".loader").show();
          setTimeout( function() {
            $(".visualization-chart").show();
            $(".loader").hide();
            Clock.pause();
            $(".timer").addClass("text-success");
          }, 1000 );
        }
      }
    });
    $( ".droppable.color" ).droppable({
      accept: ".to-color",
      tolerance: 'pointer',
      drop: function(event, ui) {
        $(this).append(ui.draggable.clone());
        if ( $('.to-horizontal','.horizontal').length == 1 || $('.to-vertical','.vertical').length == 1 || $('.to-color','.color').length == 1 ) {
          $(this).parent().addClass("success");
          $(this).children().addClass("success");
        }
        if ( $('.to-horizontal','.horizontal').length == 1 && $('.to-vertical','.vertical').length == 1 && $('.to-color','.color').length == 1 ) {
          $(".visualization-placeholder").hide();
          $(".loader").show();
          setTimeout( function() {
            $(".visualization-chart").show();
            $(".loader").hide();
            Clock.pause();
            $(".timer").addClass("text-success");
          }, 1000 );
        }
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

if ( $('.to-horizontal','.horizontal').length == 1 && $('.to-vertical','.vertical').length == 1 && $('.to-color','.color').length == 1 ) {
  $(".visualization-placeholder").hide();
  $(".visualization-chart").show();
  $(".visualization").addClass("success");
  Clock.pause();
  $(".timer").addClass("text-success");
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

$('#info').modal('show');

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
