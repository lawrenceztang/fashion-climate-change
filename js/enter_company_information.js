function onSubmitClick() {
  var worker-condition = document.getElementById("worker-condition").innerHTML
  var carbon-footprint = document.getElementById("carbon-footprint").innerHTML
  var clothing-materials = document.getElementById("clothing-materials").innerHTML
  var dictionary = {worker-condition: worker-condition, carbon-footprint: carbon-footprint, clothing-materials: clothing-materials}
  var json = JSON.stringify(dictionary)
  $.post("/login", json)
}
