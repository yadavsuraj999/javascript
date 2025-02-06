let grid = prompt("Enter GR ID");
let date = prompt("Enter date");
let name1 = prompt("Enter name");
let course = prompt("Enter course");
let duration  = prompt("Enter your course duration");;
let contact = prompt("Enter contact");
let imgURL = prompt("Enter Image Link");


document.getElementById("grID").innerHTML = grid;
document.getElementById("date").innerHTML = date;
document.getElementById("fullName").innerHTML = name1;
document.getElementById("course").innerHTML = course;
document.getElementById("duration").innerHTML = duration;
document.getElementById("contact").innerHTML = contact;
document.getElementById("image").src = imgURL;