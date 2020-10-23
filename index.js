// function to check which sound to play
function playSound(x) {
   switch (x) {
      case "w":
         var kickBass = new Audio("sounds/kick-bass.mp3");
         kickBass.play();
         break;
      case "a":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;
      case "s":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
      case "d":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
      case "j":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
      case "k":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
      case 'l':
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
      default:
         console.log("Key does not match any piece.");
   }
}

// function for button animations:
function buttonAnimation(x) {
   var activeButton = document.querySelector("." + x);
   activeButton.classList.add("pressed");
   setTimeout(function () {activeButton.classList.remove("pressed")}, 100);
}

// detecting mouse click
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		let btn = this.innerHTML;
      playSound(btn);
      buttonAnimation(btn);
	});
}

// detecting keyboard press
document.addEventListener("keypress", function (event) {
   playSound(event.key);
   buttonAnimation(event.key);
});
