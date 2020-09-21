// funzione
function renderCalendar(date) {
  // copia dell'oggetto date per manipolarlo come voglio
  var dateCalendar = moment(date);

  // pulisco la lista
  $("#list-days").html("");

  // modifica intestazione mese
  $("h1").text(dateCalendar.format("MMMM YYYY"));

  // i giorni del mese della data passata come argomento della funzione
  var dayInMonth = dateCalendar.daysInMonth();

  // preparazione del template del <li> dei giorni
  var source = $("#day-template").html();
  var template = Handlebars.compile(source);

  // stampa dei giorni del mese
  for (var i = 1; i <= dayInMonth; i++) {

  // creazione del context
    var data = {
      "day": i,
      "month": dateCalendar.format("MMMM"),
      "dateComplete": dateCalendar.format("YYYY-MM-DD")
    };

    // creazione del codice html del giorno
    var html = template(data);

    // andiamo ad appendere in lista days il tamplate(html) che ci siamo
    // preparati prima
    $("#list-days").append(html);

    // incrementiamo di un giorno la nostra data nella variabile date
    dateCalendar.add(1, "days");
  }
}
// funzione che fa la chiamata alle api e stampa le festivita
function renderHolidays(date) {

  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/holidays",
      "data": {
        "year": 2018,
        "month": date.format("M") - 1
      },
      "method": "GET",
      "success": function(data) {
        var response = data.response;
        for(var i = 0; i < response.length; i++){
          var dateHoliday = response[i].date;
          var nameHoliday = response[i].name;
          $(".day[data-date-complete='"+ dateHoliday +"']").addClass("holiday");
          $(".day[data-date-complete='"+ dateHoliday +"'] div").text(nameHoliday);
        }
      },
      "error": function() {
        alert("Errore");
      }
    }
  );

}

$(document).ready (function() {

  // andiamo ad utilizzare il moment per sapere info su
  // quanti giorni ha quel mese dell'anno
  var date = moment("2018-01-01");

  renderCalendar(date);
  renderHolidays(date);


   $(".prev").click(function() {

     if(date.format("M") == 1) {
       alert("Non puoi tornare all'anno precedente!");
     } else {
        // spostare la data 1 mese dietro
        date.subtract(1, 'months');
        renderCalendar(date);
        renderHolidays(date);
     }

   });

   $(".next").click(function() {

     if(date.format("M") == 12) {
       alert("Non puoi andare all'anno successivo!");
     } else {
        // spostare la data 1 mese dietro
        date.add(1, 'months');
        renderCalendar(date);
        renderHolidays(date);
     }

   });

});
