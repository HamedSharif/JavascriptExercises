/* ex1
let button=document.getElementById("btn")
let paragraph=document.getElementById("paragraph")

button.addEventListener('click',function () {
    paragraph.style.color="blue"
    paragraph.style.fontSize="33px"

}) */

let firstName=document.getElementById("fname")
let lastName=document.getElementById("lname")
let button=document.getElementById("btn")

button.addEventListener('click', function () {
   console.log("Name: " + firstName.value +"   "+  lastName.value)
})