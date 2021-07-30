// Pure Java Script Function for getting url parameters
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),results = regex.exec(url);
  if (!results) return null; if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(function () {
  var input = document.getElementById("searchKeyward");
  pagenum = 1;
  input.addEventListener("keyup", function (event) {
    console.log('enter');
    if (event.keyCode === 13) {
      event.preventDefault();
      callApi(pagenum);
      document.getElementById("pagenum").innerHTML = pagenum;
    }
  });
});

$(document).ready(function () {
  if (getParameterByName("q") != null) {
    document.getElementById("searchKeyward").value = getParameterByName("q");
    searchMovie();
  }
})

// Search bar functionality
$(document).ready(function () {
  $("#SearchButton").click(function (e) {
    e.preventDefault()
    callApi(pagenum = 1);
    document.getElementById("pagenum").innerHTML = pagenum;
  })
});

var model = {};
var template = Handlebars.compile(`
<div class="topnav">
<div class="nav-container-wrapper">
  <a class="logo" href="#">
    <i class="fa fa-film logo" aria-hidden="true"></i>
    <div class="logo">SEARCH MOVIES</div>
  </a>
  <div class="search-container">
    <input type="text" placeholder="Search" name="search" id="searchKeyward">
    <button id="SearchButton" type="submit">
      <i class="fa fa-search"></i>
    </button>
  </div>
</div>
</div>
`);

document.write(template(model));
