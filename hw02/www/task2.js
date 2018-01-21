(function () {
  "use strict";

  function init() {
    var alertButton = document.getElementById("alert");
    alertButton.addEventListener("click", popup);

    var incrementButton = document.getElementById("increment");
    incrementButton.addEventListener("click", increment);

    var appendButton = document.getElementById("append");
    appendButton.addEventListener("click", append);
  }

  function popup() {
    var currentValue = document.getElementById("heading").innerHTML;
    alert(currentValue);
  }

  function increment() {
    var heading = document.getElementById("heading");
    var currentValue = heading.innerHTML;
    var incrementedValue = (currentValue * 1) + 1;
    heading.innerHTML = incrementedValue;
  }

  function append() {
    var paragraphs = document.getElementById("paragraphs");
    var newParagraph = document.createElement("p");
    var currentValue = document.getElementById("heading").innerHTML;
    var newText = document.createTextNode(currentValue);
    newParagraph.appendChild(newText);
    paragraphs.appendChild(newParagraph);
  }

  window.addEventListener("load", init, false);
}) ();
