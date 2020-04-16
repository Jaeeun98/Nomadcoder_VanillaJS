const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const defaultColor = "#2c2c2c";
const canvasSize = 700;

canvas.width = canvasSize;
canvas.height = canvasSize;

ctx.strokeStyle = defaultColor;
ctx.fillStyle = defaultColor;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
	painting = false;
}

function startPainting() {
	painting = true;
}

function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	if(!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

function handleColorClick (event) {
	const color = event.target.style.backgroundColor;
	ctx.strokeStyle = color;
	ctx.fillStyle = color;
}

function handleRangeChang(event) {
	const size = event.target.value;
	ctx.lineWidth = size;
}

function handleModeClick() {
	if(filling === true) {
		filling = false;
		mode.innerText = "Fill"
	} else {
		filling = true;
		mode.innerText = "Faint"
	}
}

function handleCanvasClick(){
	if(filling) {
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
	
}

if(canvas){
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
	canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach(color => 
	color.addEventListener("click", handleColorClick)
	);

if(colors) {
	range.addEventListener("input", handleRangeChang)
}

if(mode) {
	mode.addEventListener("click", handleModeClick);
}