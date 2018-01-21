(function () {
  "use strict";

  var first;
  var second;
  var third;

  var lorem;
  var bottles;
  var last;

  var loremText;
  var bottlesText;
  var lastText;

  function init() {
    first = document.getElementById("first");
    second = document.getElementById("second");
    third = document.getElementById("third");

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
    first.style.backgroundColor = "steelblue";
    second.style.backgroundColor = "lightsteelblue";
    third.style.backgroundColor = "lightsteelblue";

    loremText.style.display = "block";
    bottlesText.style.display = "none";
    lastText.style.display = "none";
  }

  function showBottles() {
    first.style.backgroundColor = "lightsteelblue";
    second.style.backgroundColor = "steelblue";
    third.style.backgroundColor = "lightsteelblue";

    loremText.style.display = "none";
    bottlesText.style.display = "block";
    lastText.style.display = "none";
  }

  function showLast() {
    first.style.backgroundColor = "lightsteelblue";
    second.style.backgroundColor = "lightsteelblue";
    third.style.backgroundColor = "steelblue";

    loremText.style.display = "none";
    bottlesText.style.display = "none";
    lastText.style.display = "block";
  }

  window.addEventListener("load", init, false);
}) ();
