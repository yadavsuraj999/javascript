let a = parseInt(prompt("enter amount :"));
let b = parseInt(prompt("enter Rate of interest : "));
let c = parseInt(prompt("enter Year : "));


total = (a*b*c)/100;

document.getElementById("amount").innerHTML = a;
document.getElementById("interest").innerHTML = b;
document.getElementById("years").innerHTML = c;
document.getElementById("total").innerHTML = total;


