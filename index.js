var randomnumber1 = Math.floor(((Math.random()*6)+1));
var randomnumber2 = Math.floor(((Math.random()*6)+1));

if(randomnumber1===1){
  document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
}
else if (randomnumber1===2) {
  document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
}
else if (randomnumber1===3) {
  document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
}
else if (randomnumber1===4) {
  document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
}
else if (randomnumber1===5) {
  document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
}
else if (randomnumber1===6) {
  document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
}

if(randomnumber2===1){
  document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
}
else if (randomnumber2===2) {
  document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
}
else if (randomnumber2===3) {
  document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
}
else if (randomnumber2===4) {
  document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
}
else if (randomnumber2===5) {
  document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
}
else if (randomnumber2===6) {
  document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
}

if(randomnumber1>randomnumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins";
}
else if (randomnumber1<randomnumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
else if (randomnumber1===randomnumber2) {
  document.querySelector("h1").textContent = "Draw 🏁";
}
