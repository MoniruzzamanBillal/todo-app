let button = document.querySelector(".button");
let input = document.querySelector(".inp");
let ul = document.querySelector(".ul");

show();

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

  ul.innerHTML = html;
  input.value = "";
}

function del(index)
{
  let storage = localStorage.getItem("todo");
  let arr;
  arr = JSON.parse(storage);

  arr.splice(index,1);
  localStorage.setItem("todo", JSON.stringify(arr) );
  show();
}



