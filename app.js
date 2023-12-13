"use strict"

let button = document.getElementById("but_on")
console.log(button);

let main_header = document.getElementById("mainheader")
let btn_cl=document.querySelectorAll(".btn")


button.addEventListener("click", () => {
   main_header.classList.toggle("dark_th")
   // button.style.color="black"
   // button.classList.add("Change_txt");
   if (button.innerText == "Dark Mode") {
      button.innerText = "Light Theme"
   }
   else {
      button.innerText = "Dark Mode"
   }
   
   if(button.style.color=="white"){
      button.style.color="black"
   }
   else{
      button.style.color="white"
   }
})
// button.style.color=""
