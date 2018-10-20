// Erika Hamilton
// Assignment 2
//  Random Pic JS

console.clear();
  window.onload = GetSpooky;
function GetSpooky() {
  var divNode = document.getElementById("spooky");
  var spookypics = new Array();
  var spookypics = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg"];
  var currentSP = document.body.style.backgroundImage;
  var rando = Math.floor(Math.random() * spookypics.length);
  currentSP = spookypics[rando];
  document.body.style.backgroundImage = "url('" +currentSP+"')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
}
