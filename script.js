let button = document.querySelector(".add");
let input = document.querySelector(".inp");
let ul = document.querySelector(".ul");
let clear = document.querySelector(".clear");
let num = document.querySelector(".num");
let task = document.querySelector(".task");

show();

clear.addEventListener("click", () => {
  localStorage.clear();
  show();
});


button.addEventListener("click", () => {
  let storage = localStorage.getItem("todo");
  let arr;
  if (storage === null) {
    arr = [];
  } else {
    arr = JSON.parse(storage);
  }
  let inpdata = input.value;
  if (inpdata.trim() != 0) {
    arr.push(input.value);
  } else {
    alert("enter your task");
  }
  localStorage.setItem("todo", JSON.stringify(arr));
  show();
});

function show() {
  let storage = localStorage.getItem("todo");
  let arr;

  if (storage === null) {
    arr = [];
  } else {
    arr = JSON.parse(storage);
  }

  let html = "";

  arr.forEach((e, index) => {
    html += `<li> ${e} <span><i class="fa-solid fa-trash del" onclick="del(${index})"></i></span></li>`;
  });

  num.innerText = arr.length;

  if (arr.length > 1) {
    task.innerText = "tasks";
  } else {
    task.innerText = "task";
  }

  ul.innerHTML = html;
  input.value = "";
}

function del(index) {
  let storage = localStorage.getItem("todo");
  let arr;
  arr = JSON.parse(storage);

  arr.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(arr));
  show();
}
