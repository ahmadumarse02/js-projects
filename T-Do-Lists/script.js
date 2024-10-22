const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTasks() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "li") {
      e.target.classList.toggle(".clicked");
    } else if (e.target.tagName === "span") {
      e.target.parentElement.remove();
    }
  },
  false
);
