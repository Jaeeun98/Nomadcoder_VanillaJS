const slideImg  = document.getElementsByClassName("slideImg");
const slide = document.querySelector(".slide");
const slideLe = slideImg.length;

const modalImg = document.getElementsByClassName("modalImg");
const modal = document.querySelector(".modal");
const modalBtn = document.getElementsByClassName("modalBtn");

const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const frame = document.querySelector(".translateJS");
const slideWidth = 600;
let slideIn = 1;


/*modal*/

function handleModal4(){
	modal.style.display = "block";
	modalImg[4].style.display = "block";
}
function handleModal3(){
	modal.style.display = "block";
	modalImg[3].style.display = "block";
}
function handleModal2(){
	modal.style.display = "block";
	modalImg[2].style.display = "block";
}
function handleModal1(){
    modal.style.display = "block";
	modalImg[1].style.display = "block";
}
function handleModal0(){
	modal.style.display = "block";
	modalImg[0].style.display = "block";
}

function handleNon(){
	modal.style.display = "none";
}

slideImg[4].addEventListener("click", handleModal4);
slideImg[3].addEventListener("click", handleModal3);
slideImg[2].addEventListener("click", handleModal2);
slideImg[1].addEventListener("click", handleModal1);
slideImg[0].addEventListener("click", handleModal0);

modalBtn[4].addEventListener("click", handleNon)
modalBtn[3].addEventListener("click", handleNon)
modalBtn[2].addEventListener("click", handleNon)
modalBtn[1].addEventListener("click", handleNon)
modalBtn[0].addEventListener("click", handleNon)

/*btn slide*/

function handleSlideRight(){	
	if(slideIn < slideLe){
		frame.style.left = "-" + (slideWidth*slideIn) + "px";
		slideIn++;
	}  else if(slideIn === slideLe){
		frame.style.left = 0 + "px";
		slideIn = 1;
	}	
}

function handleSlideLeft(){
	if(slideIn === 1) {
		frame.style.left = "-" + (slideWidth*(slideLe-1)) + "px";
		slideIn = slideLe+1;
	} else if(slideIn <= slideLe)
		console.log(slideIn);
		frame.style.left = "-" + (slideWidth*(slideIn-2)) + "px";
		slideIn--;
}

rightBtn.addEventListener("click", handleSlideRight);
leftBtn.addEventListener("click", handleSlideLeft);
