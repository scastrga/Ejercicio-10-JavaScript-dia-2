var div = document.createElement("div");

var parrafo = document.createElement("p");

parrafo.setAttribute("id", "newP");

var contenido = document.createTextNode("HOlaafdadas");

parrafo.appendChild(contenido);

div.appendChild(parrafo);

document.body.appendChild(div);

