
var numImgs = 3;
var actualImg = 1;

function moveImg(event){
	var cursorX = event.clientX;
	var cursorY = event.clientY;
	var width = document.getElementById("frontImg").offsetWidth;
	var height = document.getElementById("frontImg").offsetHeight;

	//event.style.background-position = "50% + " + cursorX/100 + " 50% + " + cursorY/100;
	document.getElementById("frontImg").style.left = (- width/2 + cursorX)/30 - 26 + "px";
	document.getElementById("frontImg").style.top = (- height/2 + cursorY)/10 - 10 + "px";
}

function outImg(event){
	document.getElementById("frontImg").style.left = -26 + "px";
	document.getElementById("frontImg").style.top = -10 + "px";
}

function dimmerOut(event){
	document.getElementById("dimmer").style.zIndex = "8";
	document.getElementById("dimmer").style.backgroundColor = "rgba(0,0,0,0)";
}

function dimmerIn(event){
	document.getElementById("dimmer").style.zIndex = "20";
	document.getElementById("dimmer").style.backgroundColor = "rgba(0,0,0,0.4)";
}

setInterval(function imgSwap(event){
	if(actualImg == numImgs){
		document.getElementsByClassName("introCard")[actualImg - 1].style.opacity = "0";
		document.getElementsByClassName("introCard")[0].style.opacity = "1";
		actualImg = 1;
	}else{
		document.getElementsByClassName("introCard")[actualImg - 1].style.opacity = "0";
		document.getElementsByClassName("introCard")[actualImg].style.opacity = "1";
		actualImg++;
	}

}, 10000);

