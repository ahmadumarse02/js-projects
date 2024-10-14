const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (e) {
    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "chocolate") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "chartreuse") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
