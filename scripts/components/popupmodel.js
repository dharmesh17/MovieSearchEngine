// Function that calls getDetails function and open model(popup window)
function showinfo(num) {
  getDetails(num);
  document.getElementById("myModal").style.display = "block";
}

//Replaces any data that is n/a or undefined to "-" to
//Avoid exception as well as show user '-' in frontend rather than 'undefined" or "n/a"
function isMissing(string) {
  if (string.toLowerCase() == "n/a" || string.toLowerCase() == "undefined") {
    return "-";
  }
  return string;
}

var model = {
  DetailPoster: "DetailPoster",
  DetailTitle: "DetailTitle",
  DetailYear: "DetailYear",
  DetailGenre: "DetailGenre",
  DetailRated: "DetailRated",
  DetailReleased: "DetailReleased",
  DetailDirector: "DetailDirector",
  DetailWriter: "DetailWriter",
  DetailActors: "DetailActors",
  DetailPlot: "DetailPlot",
  DetailLanguage: "DetailLanguage",
  DetailimdbRating: "DetailimdbRating",
  DetailProduction: "DetailProduction"
};

// calls API to get the info of a movie through title
function getDetails(num) {
  var InnerElemets = [
    "DetailPoster", "DetailTitle", "DetailYear", "DetailGenre", "DetailRated", "DetailReleased",
    "DetailDirector", "DetailWriter", "DetailActors", "DetailPlot", "DetailLanguage",
    "DetailimdbRating", "DetailProduction"
  ];

  InnerElemets.forEach(element => {
    document.getElementById(element).innerHTML = "";
  });

  $.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/?t=" + searchData[num].Title + "&apikey=3173bd84",

    success: function (result) {
      var googlequery = 'location.href="https://www.google.com/search?q=+' + result.Title + '"';

      document.getElementById("DetailPoster").innerHTML = "<img height='100%' width='100%' class='card imagedetail' src='" + isMissing(result.Poster) + "' onclick='" + googlequery + "'/>";
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

// function to close popup window
function closeWindow() {
  document.getElementById("myModal").style.display = "none";
}

var template = Handlebars.compile(` <!-- MODEL POPUP WINDOW -->
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" title="Close" onclick="closeWindow()">&times;</span>
      <div id="deatilSection">
        <div class="deatilSection">
          <div id="DetailPoster"></div>
          <div class="Detailinfo">
            <div class="texthover" style="padding-bottom: 5%;display: flex;flex-direction: column;align-items: center;">
              <div id="DetailTitle"></div>
              <div style="height: 1px;width: 80%;background: #e28c6e;box-shadow: 0px 0px 10px 1px #e28c6e;"></div>
            </div>
            <div class="DetailInfoContent">
              <div class="texthover">
                <div id="DetailYear"></div>
              </div>
              <div>
                <div id="DetailimdbRating"></div>
              </div>
              <div class="texthover">
                <div id="DetailGenre"></div>
              </div>
              <div>
                <div id="DetailRated"></div>
              </div>
              <div>
                <div id="DetailReleased"></div>
              </div>
              <div>
                <div id="DetailLanguage"></div>
              </div>
              <div>
                <div id="DetailDirector"></div>
              </div>
              <div>
                <div id="DetailWriter"></div>
              </div>
              <div class="texthover">
                <div id="DetailActors"></div>
              </div>
              <div>
                <div id="DetailProduction"></div>
              </div>
            </div>
            <div class="texthover" style="padding-top: 5%;display: flex;flex-direction: column;align-items: center;">
              <div style="height: 1px;width: 80%;background: #e28c6e;box-shadow: 0px 0px 10px 1px #e28c6e;"></div>
              <div id="DetailPlot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `);

document.write(template(model));