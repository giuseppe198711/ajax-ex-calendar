// funzione
function renderCalendar(date) {

  var source = $("#day-template").html();
  var template = Handlebars.compile(source);

  for (var i = 1; i <= 31; i++) {

    var data = {
      "day": i,
      "month": "Gennaio"
    };


    var html = template(data);
    // andiamo ad appendere in lista days il tamplate(html) che ci siamo
    // preparati prima
    $("#list-days").append(html);
  }
}

$(document).ready (function() {

  // andiamo ad utilizzare il moment per sapere info su
  // quanti giorni ha quel mese dell'anno
  var momentDate = moment("2018-01-01");
  // richiamo della funzione
  renderCalendar(date);


  // richiamo della funzionefunzione
  renderCalendar();







});
