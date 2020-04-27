const slide_1 = document.querySelector(".slide_1");
const slide_2 = document.querySelector(".slide_2");
const slide_3 = document.querySelector(".slide_3");
const slide_4 = document.querySelector(".slide_4");
const slide_5 = document.querySelector(".slide_5");
const slide = [slide_1, slide_2, slide_3, slide_4, slide_5];

const modal_1 = document.querySelector(".modal_1");
const modal_2 = document.querySelector(".modal_2");
const modal_3 = document.querySelector(".modal_3");
const modal_4 = document.querySelector(".modal_4");
const modal_5 = document.querySelector(".modal_5");
const modal = [modal_1, modal_2, modal_3, modal_4, modal_5];

const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

console.log(modal.length);

/*modal*/

function handleModal4(){
	modal[4].style.display = "block";
}
function handleModal3(){
	modal[3].style.display = "block";
}
function handleModal2(){
	modal[2].style.display = "block";
}
function handleModal1(){
	modal[1].style.display = "block";
}
function handleModal0(){
	modal[0].style.display = "block";
}

function handleNon4(){
	modal[4].style.display = "none";
}
function handleNon3(){
	modal[3].style.display = "none";
}
function handleNon2(){
	modal[2].style.display = "none";
}
function handleNon1(){
	modal[1].style.display = "none";
}
function handleNon0(){
	modal[0].style.display = "none";
}

slide[4].addEventListener("click", handleModal4);
slide[3].addEventListener("click", handleModal3);
slide[2].addEventListener("click", handleModal3);
slide[1].addEventListener("click", handleModal3);
slide[0].addEventListener("click", handleModal3);

modal[4].addEventListener("click", handleNon4);
modal[3].addEventListener("click", handleNon3);
modal[2].addEventListener("click", handleNon2);
modal[1].addEventListener("click", handleNon1);
modal[0].addEventListener("click", handleNon0);

/*btn slide*/

function rightSlide(){

}

rightBtn.addEventListener("click", rightSlide);
