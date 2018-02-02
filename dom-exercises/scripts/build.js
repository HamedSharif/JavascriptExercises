


    let newDiv = document.createElement("div");
    let h1 = document.createTextNode("This is a header");
    let p = document.createTextNode("This is a paragraph");
    let image = document.createElement("img");

    image.setAttribute("src", "img_pulpit.jpg");
    image.setAttribute("width", "200");
    image.setAttribute("height", "200");
    image.setAttribute("alt", "bild");


     newDiv.appendChild(h1);
     newDiv.appendChild(p);
     document.body.appendChild(image);
     console.log(h1,p,image)


