function onSearch() {
  var company_name = document.getElementById("company_name").innerHTML
  var json = JSON.stringify(company_name)
  var json = $.getJSON("/search", json)
  displayData(json)
}

function onSearchTest() {
  var json = $.getJSON("../search_result", json)
  alert("hi")
}

function displayData(json) {

}
