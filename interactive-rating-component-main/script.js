const input_div = document.querySelector(".rating_input");
const button = document.querySelector(".rating_btn");
const label = document.getElementsByClassName("rating_labels");
let new_window;
let value;

input_div.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i of label) {
    if (i.style.backgroundColor && i !== e.target) {
      i.style.backgroundColor = `#1b1f244a`;
    }
  }
  e.target.style.backgroundColor = `#fa7a16`;

  value = e.target?.previousElementSibling?.value;
});
button.addEventListener("click", function (e) {
  if (value) {
    new_window = window.open("thanks.html", "bijoy");
    new_window.v = value;
    console.log(new_window);
  }
});
