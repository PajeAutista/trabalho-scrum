function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-teal", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-teal";
}

function convertTemp(direction) {

  var fObj = document.convert.ftemp, cObj = document.convert.ctemp, kObj = document.convert.ktemp;

  if (direction == "ftoc") {
      cObj.value = Math.round((fObj.value - 32) * (5 / 9));
      kObj.value = Math.round(((fObj.value - 32) * (5 / 9)) + (273.15));
  }
  else if (direction == "ktof") {
      fObj.value = Math.round((kObj.value - 273.15) * (9 / 5)) + 32;
      cObj.value = Math.round((fObj.value - 32) * (5 / 9));

  }
  else {
      fObj.value = Math.round((parseInt(cObj.value) * (9 / 5)) + 32);
      kObj.value = Math.round((parseInt(cObj.value) + 273));
  }
}

function clearAll() {
  document.convert.ftemp.value = "";
  document.convert.ctemp.value = "";
  document.convert.ktemp.value = "";
}



