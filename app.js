const slct = document.getElementById("select-object");
const putobj = document.getElementById("put-object");
const inpt = document.getElementById("input-data");
const smtbtn = document.getElementById("submit-btn");

// slct.addEventListener("mouseover", function (e) {
//   slct.innerText = "rahul kumar";
// });
// slct.addEventListener("mouseout", function (e) {
//   slct.innerText = "rohit kumar";
// });

const objcrt = document.getElementsByClassName("object-created");
const objput = document.getElementsByClassName("object-put");

function drag(event) {
  // console.log(event.target);
  event.dataTransfer.setData("box", event.target.id);
}

function drop(event) {
  event.preventDefault();
  // console.log(event.target);
  let data = event.dataTransfer.getData("box");
  // console.log(data);
  event.target.appendChild(document.getElementById(data));
}

function allowDrop(event) {
  event.preventDefault();
  // console.log(event.target);
}

function dragnew(data) {
  localStorage.setItem("box", data);
}

smtbtn.addEventListener("click", function (e) {
  let inputValue = inpt.value;
  // console.log(inputValue);
  inpt.value = "";
  let crtdiv = document.createElement("div");
  crtdiv.innerHTML = inputValue;
  crtdiv.className = "object-created";
  crtdiv.id = objcrt.length;
  crtdiv.draggable = true;
  // crtdiv.ondragstart = dragnew(crtdiv);
  slct.appendChild(crtdiv);
});
