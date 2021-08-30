var x = document.getElementById("myBtn");
x.addEventListener("click", clickCounter);
let clicks= 0;

function clickCounter() { 
  clicks++;
  document.getElementById("demo").innerHTML = "&nbsp;&nbsp;Clicked " + clicks + " times<br>";
}