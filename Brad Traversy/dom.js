// Single element
const form = document.getElementById("my-form");
// or
const form2 = document.querySelector("h1"); 
// console.log(form);

// Multiple element
// console.log(document.querySelectorAll(".item"));

const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item));

// Manipulating the DOM
const ul = document.querySelector(".items");

// ul.remove()
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = "Hey, Shazzar"
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
// btn.style.background = "red";

// btn.addEventListener("mouseover", (e) => {
// btn.addEventListener("mouseout", (e) => {
btn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("Shazzar");
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector("body").classList.add("bg-dark");
    document.querySelector(".items")
    .lastElementChild.innerHTML = "<h1>Hello</h1>";
});