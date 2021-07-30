var model = {
  searchInputOnClick: ""
};

var template = Handlebars.compile(`<!-- MAIN -->
<div class="main">
  <div id="gridContainer">
    <!-- data from ajex response -->
    <div class='container gridRow1' id="gridRow1">
      <div style="font-size: 60px;letter-spacing: 15px;color: #0000008a;word-spacing: 20px;">SEARCH TO SEE RESULTS
      </div>
    </div>
    <div class='container gridRow2' id="gridRow2"></div>
    <div class='container gridRow3' id="gridRow3"></div>
  </div>
</div>
`);

document.write(template(model));