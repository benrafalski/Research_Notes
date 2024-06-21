function showTooltip(evt, id) {
  // id for identifying the current country
  let thisId = document.getElementById(id);

//   console.log(thisId);
//   console.log("hihfdihasi")

  // country name from the path attributes
  let countryName = thisId.getAttribute("title");
  // this country svg shape
  let countryD = thisId.getAttribute("d");
  // where the first point of the country svg begins
  let pathh = countryD.split(" ");
  let startXY = pathh[1];
  let pathXY = startXY.split(",");

  let startX = pathXY[0];
  let startY = pathXY[1];

  let startXX = startX * 1.1;
  let startYY = startY * 0.8;
  let tooltip = document.getElementById("tooltip");
  let myCheck = document.getElementById("myCheck");

  tooltip.innerHTML = countryName;

  tooltip.style.display = "block";
  //get the width of the tooltip
  let toolWidth = tooltip.offsetWidth;
  let toolHeight = tooltip.offsetHeight;
  //alert(evt.pageX)
  if (evt.pageX <= window.innerWidth / 2) {
    // tooltip.style.left = evt.clientX + 2 + "px";
    tooltip.style.left = evt.pageX + 2 + "px";
  } else {
    tooltip.style.left = evt.pageX - toolWidth - 2 + "px";
  }
  if (evt.pageY <= window.innerHeight / 2) {
    tooltip.style.top = evt.pageY + 25 + "px";
  } else {
    tooltip.style.top = evt.pageY - toolHeight + "px";
  }
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}
