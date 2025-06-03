let btn = document.getElementById("add-btn");
let ul = document.getElementById("list-container");
let inp = document.getElementById("input-box");

btn.addEventListener("click", function () {
  if (inp.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
  saveData();
});

ul.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON" && event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    saveData();
  } else if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  }
});

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}

function showTask(){
    ul.innerHTML=localStorage.getItem("data");
}

showTask();
