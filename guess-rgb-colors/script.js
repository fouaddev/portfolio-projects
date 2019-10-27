// Declare the global variables
var colors = document.querySelectorAll(".color");
var easyClicked = false;
var hardClicked = false;
var colorPicked = colors[Math.floor(Math.random() * colors.length)];
var targetColor = document.querySelector("#target-color");
var hiddenGameOver = document.querySelector("#lost-hidden");
var hiddenYouWon = document.querySelector("#congrats-hidden");
var row2 = document.querySelector("#row-2");
var gameOver = false;
var newColorsGenerated = 1;
var totalClicked = 1;

// Function to generate colors
function colorGenerator() {
	var newRGBColor = 
	"rgb(" + Math.floor(Math.random() * 256) 
	+ ", " + Math.floor(Math.random() * 256) 
	+ ", " + Math.floor(Math.random() * 256) + ")";
	return newRGBColor;
}

// Function to update background color of html elements
function updatingColors(colors) {
	for(var i = 0; i < colors.length; i++) {
		colors[i].style.backgroundColor = colorGenerator();
	}
}

function bgColor(someColorPicked) {
	return someColorPicked.style.backgroundColor;
}

function updatingTargetColor(someColor) {
	someColor.innerHTML = "RGB " + bgColor(colorPicked).slice(3);
}

function toggleGameOver() {
	hiddenGameOver.classList.toggle("lost-text");
}

function toggleYouWon() {
	hiddenYouWon.classList.toggle("congrats-text");
}

function displayCongrats() {
	hiddenYouWon.style.color = bgColor(colorPicked);
	setTimeout(toggleYouWon, 500);
	setTimeout(toggleYouWon, 6500);
}

function displayLoosing() {
	setTimeout(toggleGameOver, 500);
	setTimeout(toggleGameOver, 3500);
}

function newColors() {
	if(!gameOver) {
		if(newColorsGenerated < 2) {
			for(var i = 0; i < colors.length; i++) {
				if(colors[i].style.backgroundColor != bgColor(colorPicked)) {
					colors[i].style.backgroundColor = colorGenerator();
				}
			}
			newColorsGenerated++;
		}
	}
}

function toggleLevelMessageClass() {
	document.querySelector("#easy-hard-message").classList.toggle("level-message");
}

function easy() {
	if(easyClicked === false) {
		var easyMSG = document.querySelector("#easy-hard-message");
		easyMSG.innerHTML = "EASY mode! Try 1 time!";
		easyMSG.style.animation = "easyMessage 3s ease forwards";
		row2.style.position = "absolute";
		row2.style.display = "none";
		reset();
		easyClicked = true;
		hardClicked = false;
	}
}
 function hard() {
	if(hardClicked === false) {
		var hardMSG = document.querySelector("#easy-hard-message");
		hardMSG.innerHTML = "HARD mode! Try 3 time!";
		hardMSG.style.animation = "hardMessage 3s ease forwards";
		row2.style.position = "relative";
		row2.style.display = "block";
		reset();
		hardClicked = true;
		easyClicked = false;
	}
}

function animationRemover(elementList) {
	for(var i = 0; i < elementList.length; i++) {
		elementList[i].style.animation = undefined;
	}
}

colors.updatingAllColors = function(targetBGColor) {
	for(var i = 0; i < this.length; i++) {
		this[i].style.backgroundColor = targetBGColor;
		animationRemover(this[i]);
	}
};

function main() {
	for(var i = 0; i < colors.length; i++) {
		colors[i].wasClicked = false;
		colors[i].addEventListener("click", function action(event) {
			if(gameOver === false) {
				if(this.style.backgroundColor === bgColor(colorPicked)) {
					displayCongrats();
					animationRemover(colors);
					colors.updatingAllColors(bgColor(colorPicked));
					gameOver = true;
				} else {
					this.style.animation = "fadein 1s linear forwards";
					if(this.wasClicked === false) {
						totalClicked++;
						this.wasClicked = true;
						
					}
					if ((totalClicked > 3) || easyClicked) {
						gameOver = true;
						displayLoosing();
					}
				}
			}
			event.stopPropagation();
		});
	}
}

function reset() {
	main();
	updatingColors(colors);
	if(easyClicked) {
		colorPicked = colors[Math.floor(Math.random() * colors.length / 2)];
	} else {
		colorPicked = colors[Math.floor(Math.random() * colors.length)];
	}
	updatingTargetColor(targetColor);
	animationRemover(colors);
	gameOver = false;
	newColorsGenerated = 1;
  totalClicked = 1;
}

function init() {
	hard();
	main();
}

init();
