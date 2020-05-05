const slideImg  = document.getElementsByClassName("slideImg");
const slide = document.querySelector(".slide");
const slideLe = slideImg.length;

const modalImg = document.getElementsByClassName("modalImg")

const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const frame = document.querySelector(".translateJS");
const slideWidth = 600;
let slideIn = 0;


/*modal*/


function handleModal4(){
	modalImg[4].style.display = "block";
}
function handleModal3(){
	modalImg[3].style.display = "block";
}
function handleModal2(){
	modalImg[2].style.display = "block";
}
function handleModal1(){
	modalImg[1].style.display = "block";
}
function handleModal0(){
	modalImg[0].style.display = "block";
}

function handleNon4(){
	modalImg[4].style.display = "none";
}
function handleNon3(){
	modalImg[3].style.display = "none";
}
function handleNon2(){
	modalImg[2].style.display = "none";
}
function handleNon1(){
	modalImg[1].style.display = "none";
}
function handleNon0(){
	modalImg[0].style.display = "none";
}

slideImg[4].addEventListener("click", handleModal4);
slideImg[3].addEventListener("click", handleModal3);
slideImg[2].addEventListener("click", handleModal2);
slideImg[1].addEventListener("click", handleModal1);
slideImg[0].addEventListener("click", handleModal0);

modalImg[4].addEventListener("click", handleNon4);
modalImg[3].addEventListener("click", handleNon3);
modalImg[2].addEventListener("click", handleNon2);
modalImg[1].addEventListener("click", handleNon1);
modalImg[0].addEventListener("click", handleNon0);

/*btn slide*/

function handleSlideRight(){	
	if(slideIn < slideLe){
		frame.style.left = "-" + (slideWidth*slideIn) + "px";
		slideIn++;
		console.log(slideIn);
		console.log(slideLe);
	}  else if(slideIn === slideLe){
		frame.style.left = 0 + "px";
		slideIn = 0
		console.log(slideIn);
	}	
}

function handleSlideLeft(){
	if(slideIn < slideLe) {
		frame.style.left = slideWidth + "px";
	}
}

rightBtn.addEventListener("click", handleSlideRight);
leftBtn.addEventListener("click", handleSlideLeft);
