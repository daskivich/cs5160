(function () {
  "use strict";

  var lorem;
  var bottles;
  var last;

  var loremText;
  var bottlesText;
  var lastText;

  function init() {
    lorem = document.getElementById("lorem");
    bottles = document.getElementById("bottles");
    last = document.getElementById("last");

    loremText = document.getElementById("lorem-text");
    bottlesText = document.getElementById("bottles-text");
    lastText = document.getElementById("last-text");

    lorem.addEventListener("click", showLorem);
    bottles.addEventListener("click", showBottles);
    last.addEventListener("click", showLast);
  }

  function showLorem() {
    loremText.style.display = "block";
    bottlesText.style.display = "none";
    lastText.style.display = "none";
  }

  function showBottles() {
    loremText.style.display = "none";
    bottlesText.style.display = "block";
    lastText.style.display = "none";
  }

  function showLast() {
    loremText.style.display = "none";
    bottlesText.style.display = "none";
    lastText.style.display = "block";
  }

  window.addEventListener("load", init, false);
}) ();
