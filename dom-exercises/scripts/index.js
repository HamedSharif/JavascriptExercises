/* ex1
let button=document.getElementById("btn")
let paragraph=document.getElementById("paragraph")

button.addEventListener('click',function () {
    paragraph.style.color="blue"
    paragraph.style.fontSize="33px"

}) */

/* ex2
let firstName=document.getElementById("fname")
let lastName=document.getElementById("lname")
let button=document.getElementById("btn")

button.addEventListener('click', function () {
   console.log("Name: " + firstName.value +"   "+  lastName.value)
})*/

/*Ex3
let button = document.getElementById("submit");
let link = document.getElementById('myLink');
let id = link.getAttribute("id");
let href = link.getAttribute('href');
let target = link.getAttribute('target');
let hreflang = link.getAttribute('hreflang');

button.addEventListener('click', function() {
    console.log(id, href, target, hreflang);
});


*/

// Add p and h1 to the html

let paragraph = document.createElement("p");
let text = document.createTextNode("My paragraph text");


let header = document.createElement("h1");
let headertext= document.createTextNode("this header text");
let image = document.createElement("img");
 image.setAttribute("src", "img_pulpit.jpg")


header.appendChild(headertext);
paragraph.appendChild(text);





let existingDiv = document.querySelector("div");
existingDiv.appendChild(header);
existingDiv.appendChild(paragraph);
existingDiv.appendChild(image);



document.write(existingDiv.innerHTML);


/*
let button = document.getElementById("submit");
let remove = document.getElementById("remove");
let table = document.getElementById('table');

button.addEventListener('click', function() {
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = "NEW";
    cell2.innerHTML = "NEW NEW";
});

remove.addEventListener('click', function() {
    table.deleteRow(0);
});*/
//
// let myVar = "This " +
//     "is text";
//
// let h1 = ("<h1 style='color:blue;'> Hello world </h1>");
// let p = ("<p style='color:orange; font-style: italic;" +
//     " font-size: xx-large; font-family: Arial;'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi aspernatur deserunt, facere fugiat harum hic laboriosam nam numquam odit quam quod repellendus sapiente sit temporibus totam vero voluptatum! </p>");
//
//
//
//
// document.write(myVar)
// document.write(h1)
// document.write(p)
//
//
// let a=1;
// let b=3;
// let c=a+b;
//
// document.write("The result is : " + c);
//
//



        let p = document.getElementById("paragraph");
        let button   = document.getElementById("btn");

        let button2   = document.getElementById("btn2");
        let firstName = document.getElementById("fname");
        let lastName = document.getElementById("lname");

        let link = document.getElementById("link");
        let button3 = document.getElementById("btn3");
        let id = link.getAttribute("id");
        let href = link.getAttribute("href");
        let hrefLang = link.getAttribute("hreflang");
        let target = link.getAttribute("target");






        let button4 = document.getElementById("btn1");
        let button5 = document.getElementById("btn5");
        let table = document.getElementById("table")


button4.addEventListener('click', function() {
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = "5";
    cell2.innerHTML = "55";
});

        button5.addEventListener('click', function () {
table.deleteRow(0)
        })




        button.addEventListener('click', function () {
            p.style.color = "blue";
            p.style.fontSize = "33px";
        });




        button2.addEventListener('click', function () {

           console.log(firstName.value + " " + lastName.value);
        });






        button3.addEventListener('click', function () {

            console.log(id, href,  hrefLang, target);
            document.write(id +" "+ href +  hrefLang +  target);
        });






