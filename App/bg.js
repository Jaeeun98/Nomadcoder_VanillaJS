const body = document.querySelector("body");

const imgNumber = 3;

function handleImgLoad() {
	console.log('finished loading');
}

function paintImg(imgNumber) {
	const img = new Image();
	img.src = `background${imgNumber + 1}.jpg`;
	img.classList.add("bgImg")
	body.appendChild(img);
}

function genRandom(){
	const number = Math.floor(Math.random() * 3);
	return number;
}

function init() {
	const randomNumber = genRandom();
	paintImg(randomNumber);
}

init();