'use strict';
var searchData; //stores current search keyword response data.

/*
main function that  calls the API
Parse data to cards and also sets data to frontend using DOM.
*/
function callApi(page) {
  console.log('callApi');
  $.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/?s=" + document.getElementById("searchKeyward").value + "&apikey=3173bd84" + "&page=" + page,
    success: function (result) {
      document.getElementById("gridRow1").innerHTML = "";
      document.getElementById("gridRow2").innerHTML = "";
      document.getElementById("gridRow3").innerHTML = "";

      // 1st ROW
      for (let i = 0; i < 4; i++) {
        if (!isNaN(result.Search[i].Poster)) {
          result.Search[i].Poster = 'https://lightning.od-cdn.com/static/img/no-cover_en_US.a8920a302274ea37cfaecb7cf318890e.jpg';
        }
        document.getElementById("gridRow1").innerHTML +=
          "<div class='card card" + i + "' style='background: url(" + result.Search[i].Poster + "');' onclick='showinfo(" + i + ")' >" +
          "<div class='border'>" +
          "<h2>" + result.Search[i].Title + "</h2>" +
          "<h2>" + result.Search[i].Year + "</h2>" +
          "<h2>" + result.Search[i].Type + "</h2>" +
          "</div>" +
          "</div>";
      }

      // 2nd ROW
      for (let i = 4; i < 8; i++) {
        if (!isNaN(result.Search[i].Poster)) {
          result.Search[i].Poster = 'https://lightning.od-cdn.com/static/img/no-cover_en_US.a8920a302274ea37cfaecb7cf318890e.jpg';
        }
        document.getElementById("gridRow2").innerHTML +=
          "<div class='card card" + i + "' style='background: url(" + result.Search[i].Poster + "');' onclick='showinfo(" + i + ")' >" +
          "<div class='border'>" +
          "<h2>" + result.Search[i].Title + "</h2>" +
          "<h2>" + result.Search[i].Year + "</h2>" +
          "<h2>" + result.Search[i].Type + "</h2>" +
          "</div>" +
          "</div>";
      }

      // 3rd ROW
      for (let i = 8; i < 10; i++) {
        if (!isNaN(result.Search[i].Poster)) {
          result.Search[i].Poster = 'https://lightning.od-cdn.com/static/img/no-cover_en_US.a8920a302274ea37cfaecb7cf318890e.jpg';
        }
        document.getElementById("gridRow3").innerHTML +=
          "<div class='card card" + i + "' style='background: url(" + result.Search[i].Poster + "');' onclick='showinfo(" + i + ")' >" +
          "<div class='border'>" +
          "<h2>" + result.Search[i].Title + "</h2>" +
          "<h2>" + result.Search[i].Year + "</h2>" +
          "<h2>" + result.Search[i].Type + "</h2>" +
          "</div>" +
          "</div>"
      }

      // Puts Extra cards on for desktop view to fix UI issue
      document.getElementById("gridRow3").innerHTML +=
        "<div class='card desktop-only' style='background:transparent'>" +
        "</div>" +
        "<div class='card desktop-only' style='background:transparent'>" +
        "</div>";
      searchData = result.Search;
      getDetails(0);
    },
    error: function (result) {
      alert('error : Unable To Search');
    }
  });
}
