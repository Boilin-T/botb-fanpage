function enterHere() {
  let human = prompt("Are you new?");

  if (human === "yes") {
    let intro = document.querySelector(".newby");
    intro.innerHTML =
      "Move the cursor over pictures to enlarge them and click on song titles to play the videos. ↡ Scroll down and have FUN!";
  } else {
    let intro = document.querySelector(".newby");
    intro.innerHTML = "Well, then you know your way around. 🤣";
  }
}

function redirect() {
  alert("You will be directed to a new website");
}

let name = prompt("Welcome to my BTOB Fanpage! What is your name?");
let greeting = document.querySelector(".greet");
greeting.innerHTML = "Hi " + name + ", nice of you to drop by!";

let entryButton = document.querySelector(".firstTime");
entryButton.addEventListener("click", enterHere);

let buyButton = document.querySelector(".buyIt");
buyButton.addEventListener("click", redirect);
