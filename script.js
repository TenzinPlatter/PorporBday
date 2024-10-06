let hasClicked = false

let msgTop = "Here's to another year of fun, family, and friendship."
let msgMid = "(And a hole in one!)"
let msgBot = "Love,"
let msgLast = "Dave, Kate, Tenzin, Teo"

function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        destination.textContent += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

const textImg = document.querySelector(".opening-container");
const messageTopC = document.querySelector(".message-top");
const messageMidC = document.querySelector(".message-mid");
const messageBotC = document.querySelector(".message-bot");
const messageLastC = document.querySelector(".message-last");

document.querySelector("body").addEventListener("click", () => {
	if (hasClicked) {
		return;
	}

	hasClicked = true

	console.log("clicked")

	textImg.style.top = "-50%";
	textImg.style.transition = "2s ease-in";

	messageTopC.style.display = "block";
	messageMidC.style.display = "block";
	messageBotC.style.display = "block";

	const topDelay = 3000;
	const midDelay = 40 * (msgTop.length) + topDelay + 600;
	const botDelay = 40 * (msgMid.length) + topDelay + midDelay - 2100;
	const lastDelay = 40 * (msgBot.length) + topDelay + midDelay + botDelay - 8500;

	setTimeout(printLetterByLetter, topDelay, messageTopC, msgTop, 40);
	setTimeout(printLetterByLetter, midDelay, messageMidC, msgMid, 40);
	setTimeout(printLetterByLetter, botDelay, messageBotC, msgBot, 40);
	setTimeout(printLetterByLetter, lastDelay, messageLastC, msgLast, 70);
})
