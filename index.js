let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fight-button")
let winnerButton = document.getElementById("winner-button")
let gameBox = document.getElementById("gamebox")

fightButton.addEventListener("click", function() {
  gameBox.style.animation = "rotate 1s";
  let indexOne = Math.floor(Math.random() *fighters.length);
  let indexTwo = Math.floor(Math.random() *fighters.length);
  stageEl.textContent = `${fighters[indexOne]} V ${fighters[indexTwo]}`
  let choices = [fighters[indexOne], fighters[indexTwo]]

  winnerButton.addEventListener("click", function() {
  gameBox.style.animation = "rotate 10s linear";
  let dice = Math.floor(Math.random() *2);
   stageEl.textContent = `${choices[dice]} wins!`;
})
})















