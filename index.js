var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1_img = "images/dice" + randomNumber1 + ".png";
var dice2_img = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",dice1_img);
document.querySelector(".img2").setAttribute("src",dice2_img);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  document.querySelector(".flag-2").style.display = "none";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  document.querySelector(".flag-1").style.display = "none";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
  document.querySelector(".flag-1").style.display = "none";
  document.querySelector(".flag-2").style.display = "none";
}
