let button = document.querySelector(".button");
let input = document.querySelector(".inp");
let ul = document.querySelector(".ul");

button.addEventListener("click", () => {
  let storage = localStorage.getItem("todo");

  if (storage === null) {
    arr = [];
  } else {
    arr = JSON.parse(storage);
  }

  arr.push(input.value);
  localStorage.setItem("todo", JSON.stringify(arr));
  show();

  input.value = "";
});

let show = () => {
  let storage = localStorage.getItem("todo");

  if (storage === null) {
    arr = [];
  } else {
    arr = JSON.parse(storage);
  }

  let html = "";

  arr.forEach((e, index) => {
    html += `<li> ${e} <span><i class="fa-solid fa-trash del"></i></span></li>`;
  });

  ul.innerHTML = html;
};
