var d = new Date();
var tag = d.getDate();
var monat = d.getMonth()+1;
var jahr = d.getFullYear();

if (tag < 10) {
  var tag = "0" + d.getDate();
}

if (monat < 10) {
  var monat = "0" + (d.getMonth()+1);
}

datum.innerHTML = tag + "." + monat + "." + jahr;
