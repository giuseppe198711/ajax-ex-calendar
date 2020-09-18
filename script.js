$(document).ready (function() {
  // data iniziale del caledario
  var data = "2018-01-01";

  var momentDate = moment(date);

  // teamplate dei giorni del mio calendario da prendere su handlebars
  // cambiando la source
  var source = $("#day-template").html();
  var template = Handlebars.compile(source);


  // stampo i giorni del mio calendario
  for (var i = 1; i <=momentDate.daysInMonth(); i++) {


    var context = {
      "day": i,
      "month": momentDate.format("MMMM")
    };

    var html = teamplate(context);

    $("#days").append(html)




  }





});
