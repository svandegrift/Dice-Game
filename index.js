var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var title = document.querySelector('h1');
var diceImage1 = document.querySelector(".img1");
var diceImage2 = document.querySelector(".img2");

diceImage1.setAttribute("src", `images/dice${randomNumber1}.png`);
diceImage2.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) 
{
    title.textContent = "🎉 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) 
{
    title.textContent = "Player 2 Wins! 🎉";
} else 
{
    title.textContent = "It's a Draw!";
}