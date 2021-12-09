/*var myMessage=document.getElementById("message")

function showMessage(){

    myMessage.className="show";
}

setTimeout(showMessage, 3000);
*/

var colourChanger = document.getElementById("colour-changer");
var colour = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColour() {

    if (counter >= colour.length) {   //loop of colours
        counter = 0;
    }

    colourChanger.style.background = colour[counter];
    counter++;

}
//bellow haw we stop the timer
var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function () {

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";

};