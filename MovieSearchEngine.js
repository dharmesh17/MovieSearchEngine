'use strict';
var searchData;
var pagenum = 1;

$("#SearchButton").click(function (e) {
  e.preventDefault();
  callApi(1);
  document.getElementById("pagenum").innerHTML = pagenum;
});

function searchMovie() {
  pagenum = 1;
  callApi(1);
  document.getElementById("pagenum").innerHTML = pagenum;
}

function callApi(page) {
  console.log('callApi');
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?s=" + document.getElementById("searchKeyward").value + "&apikey=3173bd84" + "&page=" + page,
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

      document.getElementById("gridRow3").innerHTML +=
        "<div class='card desktop-only' style='background:transparent'>"+
        "</div>" +
        "<div class='card desktop-only' style='background:transparent'>"+
        "</div>";
      searchData = result.Search;
      getDetails(0);
    },
    error: function (result) {
      alert('error : Unable To Search');
    }
  });
}

function showinfo(num) {
  getDetails(num);
  document.getElementById("myModal").style.display = "block";
}

function closeWindow() {
  document.getElementById("myModal").style.display = "none";
}

function getDetails(num) {
  console.log(searchData[num].Title);
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?t=" + searchData[num].Title + "&apikey=3173bd84",

    success: function (result) {
      var googlequery = 'location.href="https://www.google.com/search?q=+' + result.Title + '"'
      document.getElementById("DetailPoster").innerHTML = "<img height='100%' width='100%' class='imagedetail' src='" + isMissing(result.Poster) + "' onclick='" + googlequery + "'/>";
      document.getElementById("DetailTitle").innerHTML = "<span class='highlight'>" + isMissing(result.Title) + "</span>";
      document.getElementById("DetailYear").innerHTML = "<i class='fa fa-calendar' aria-hidden='true'></i>" + "<span class='highlight'>" + isMissing(result.Year) + "</span>";
      document.getElementById("DetailGenre").innerHTML = "<b>Genre:  </b>" + "<span class='highlight'>" + isMissing(result.Genre) + "</span>";
      document.getElementById("DetailRated").innerHTML = "<b>Rated:  </b>" + isMissing(result.Rated);
      document.getElementById("DetailReleased").innerHTML = "<i class='fa fa-ticket' aria-hidden='true'></i>" + "<span class='highlight'>" + isMissing(result.Released) + "</span>";
      document.getElementById("DetailDirector").innerHTML = "<b>Director:  </b>" + isMissing(result.Director);
      document.getElementById("DetailWriter").innerHTML = "<b>Writer:  </b>" + isMissing(result.Writer);
      document.getElementById("DetailActors").innerHTML = "<b>Actors:  </b>" + "<span class='highlight'>" + isMissing(result.Actors) + "</span>";
      document.getElementById("DetailPlot").innerHTML = "<b>Plot:  </b>" + isMissing(result.Plot);
      document.getElementById("DetailLanguage").innerHTML = "<i class='fa fa-language' aria-hidden='true'></i>" + isMissing(result.Language);
      document.getElementById("DetailimdbRating").innerHTML = "<i class='fa fa-star'></i>" + isMissing(result.imdbRating);
      document.getElementById("DetailProduction").innerHTML = "<b>Production:  </b>" + isMissing(result.Production);
    },
    error: function (result) {
      alert('error:Unable to fetch Details');
    }
  });

}

function isMissing(string) {

  if (string.toLowerCase() == "n/a" || string.toLowerCase() == "undefined") {
    return "-";
  }

  return string;
}


function pagenxt(e) {
  console.log('btnnext');
  pagenum += 1;
  callApi(pagenum);
  document.getElementById("pagenum").innerHTML = pagenum;
};

function pageprv(e) {
  if (pagenum > 1) {
    pagenum -= 1;
    callApi(pagenum);
    document.getElementById("pagenum").innerHTML = pagenum;
  }
};