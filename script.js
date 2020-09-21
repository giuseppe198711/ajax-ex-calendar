$(document).ready (function() {

  for (var i = 1; i <= 31; i++) {
    var source = $("#day-template").html();
    var template = Handlebars.compile(source);

    var data = {
      "day": i,
      "month": "Gennaio"
    };


    var html = template(data);

    // andiamo ad appendere in lista days il tamplate(html) che ci siamo
    // preparati prima
    $("#list-days").append(html);
  }







});
