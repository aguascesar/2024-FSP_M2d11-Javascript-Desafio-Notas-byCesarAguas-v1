document.write("<div class='card' style='width: device-width;'>");
document.write("<ul class='list-group list-group-flush'>");
document.write("<li class='list-group-item'><h1>Notas Finales</h1></li>");
document.write("<p>");
var nombre = prompt("Nombre...");
document.write("<li class='list-group-item'>Nombre : "+nombre+"</li>");
document.write("<div></div>");
document.write("</p>");
document.write("<p>");
var carrera = prompt("Carrera...");
document.write("<li class='list-group-item'>Carrera: "+carrera+"</li>");
document.write("</p>");
document.write("</ul>");

var r1   = prompt("1er asignatura...");
var r1n1  = prompt("1er Nota");
var r1n2  = prompt("2da Nota");
var r1n3  = prompt("3ra Nota");
var r1p = (parseFloat(r1n1) + parseFloat(r1n2) + parseFloat(r1n3)) / 3;

var r2   = prompt("2da asignatura...");
var r2n1  = prompt("1er Nota");
var r2n2  = prompt("2da Nota");
var r2n3  = prompt("3ra Nota");
var r2p = (parseFloat(r2n1) + parseFloat(r2n2) + parseFloat(r2n3)) / 3;

var r3   = prompt("3ra asignatura...");
var r3n1  = prompt("1er Nota");
var r3n2  = prompt("2da Nota");
var r3n3  = prompt("3ra Nota");
var r3p = (parseFloat(r3n1) + parseFloat(r3n2) + parseFloat(r3n3)) / 3;


document.write("<table class='table'>");
document.write("<thead class='table-dark'> ");
document.write("<tr>");
document.write("<th scope='col'>RAMO</th>");
document.write("<th scope='col'>N1</th>");
document.write("<th scope='col'>N2</th>");
document.write("<th scope='col'>N3</th>");
document.write("<th scope='col'>PR</th>");
document.write("</tr>");
document.write("</thead>");

document.write("<tbody class='table-light'>");
document.write("<small>");
document.write("<tr>");
document.write("<td>&nbsp;"+r1+"&nbsp;</th>");
document.write("<td>&nbsp;"+r1n1+"&nbsp;</th>");
document.write("<td>&nbsp;"+r1n2+"&nbsp;</th>");
document.write("<td>&nbsp;"+r1n3+"&nbsp;</th>");
document.write("<td>&nbsp;"+r1p+"&nbsp;</th>");
document.write("</tr>");
document.write("</small>");

document.write("<small>");
document.write("<tr>");
document.write("<td>&nbsp;"+r2+"&nbsp;</th>");
document.write("<td>&nbsp;"+r2n1+"&nbsp;</th>");
document.write("<td>&nbsp;"+r2n2+"&nbsp;</th>");
document.write("<td>&nbsp;"+r2n3+"&nbsp;</th>");
document.write("<td>&nbsp;"+r2p+"&nbsp;</th>");
document.write("</tr>");
document.write("</small>");

document.write("<small>");
document.write("<tr>");
document.write("<td>&nbsp;"+r3+"&nbsp;</th>");
document.write("<td>&nbsp;"+r3n1+"&nbsp;</th>");
document.write("<td>&nbsp;"+r3n2+"&nbsp;</th>");
document.write("<td>&nbsp;"+r3n3+"&nbsp;</th>");
document.write("<td>&nbsp;"+r3p+"&nbsp;</th>");
document.write("</tr>");
document.write("</small>");
document.write("</table>");

var rf   = (parseFloat(r1p) + parseFloat(r2p) + parseFloat(r3p)) / 3;



document.write("<div class='container p-4'>");
document.write("<div class='row'>");
document.write("<div class='col-md-4 mx-auto'>");
document.write("<div class='card text-center'>");
document.write("<div class='card-header'>");

if (rf >= 4) {
    document.write("<h3>APROBADO</h3>");
} else {
    document.write("<h3>REPROBADO</h3>");
}
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
