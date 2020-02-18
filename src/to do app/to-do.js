var closeButton = document.getElementsByClassName("close");

function createNewElement() {
  var li = document.createElement("li");
  var theInputValue = document.getElementById("my-input").value;
  var textNode = document.createTextNode(theInputValue);
  li.appendChild(textNode);

  if (theInputValue === "") {
    alert("put new task");
  } else {
    document.getElementById("the-input").appendChild(li);
  }

  document.getElementById("my-input").value = "";

  var thePanTag = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  thePanTag.className = "close";
  thePanTag.appendChild(txt);
  li.appendChild(thePanTag);

  for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
      var theDiv = this.parentElement;
      theDiv.style.display = "none";
    };
  }
}

var ulList = document.querySelector("ul");
ulList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});
