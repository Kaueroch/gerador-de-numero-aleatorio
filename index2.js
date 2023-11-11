let n1;   
let n2;
let n3;
let n4;
document.getElementById("Gerador").onclick = function(){
n1= Math.floor(Math.random() * 6) + 1;
n2=Math.floor(Math.random()* 6)+ 1;
n3=Math.floor(Math.random()* 6)+ 1;
n4=Math.floor(Math.random()* 6)+ 1;

document.getElementById("n1").innerHTML = n1;
document.getElementById("n2").innerHTML = n2;
document.getElementById("n3").innerHTML = n3;
document.getElementById("n4").innerHTML = n4; 

}
