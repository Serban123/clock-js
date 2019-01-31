






function update() {

  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();


document.getElementById("hour").innerHTML = h+" : ";
document.getElementById("minute").innerHTML = m+" : ";
document.getElementById("second").innerHTML = s;

}

setInterval(update, 1000);
