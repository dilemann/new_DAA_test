
const input = document.querySelector("input");
const form= document.querySelector("form");
const parent = document.querySelector(".parent");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = input.value;
    parent.append(li);
    form.reset();
});