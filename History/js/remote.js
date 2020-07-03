const btnRemote = document.querySelector(".btnRemote");
const remote = document.querySelector(".remote");
const close = document.querySelector(".close");
const btnTop = document.querySelector(".btnTop");
const btnBottom = document.querySelector(".btnBottom");
const btnNum = document.querySelectorAll(".btnNum");
const mainTop = document.querySelector("main").offsetTop;
const subBottom = document.querySelector(".sub_5").offsetTop;
const sub3Top = document.querySelector(".sub_2").offsetTop;
const sub4Top = document.querySelector(".sub_3").offsetTop;
const modalClose = document.querySelector(".modalClose");
const sub6 = document.querySelector(".sub_6");

	
//remocon

function handleRemote(){
	btnRemote.style.opacity = "0";
	remote.style.opacity = "1";
}

function handleClose(){
	remote.style.opacity = "0";
	btnRemote.style.opacity = "1";
}

btnRemote.addEventListener("click", handleRemote);
close.addEventListener("click", handleClose);

function handleTop(){
	window.scroll({top:mainTop, behavior:'smooth'});
}
function handleBottom(){
	window.scroll({top:subBottom, behavior:'smooth'});
}

btnTop.addEventListener("click", handleTop);
btnBottom.addEventListener("click", handleBottom);


function handlebtnNum3(){
	window.scroll({top:sub3Top, behavior:'smooth'});
}
function handlebtnNum4(){
	window.scroll({top:sub4Top, behavior:'smooth'});
}

function handleModal(){
	let windowHeight = window.scrollY;
	sub6.style.top = windowHeight + "px";
	sub6.style.display = "block";
}

btnNum[0].addEventListener("click", handleTop);
btnNum[1].addEventListener("click", handleBtn);
btnNum[2].addEventListener("click", handlebtnNum3);
btnNum[3].addEventListener("click", handlebtnNum4);
btnNum[4].addEventListener("click", handleBottom);
btnNum[5].addEventListener("click", handleModal);

//modal

function handleModalClose(){
	sub6.style.display = "none";
}

modalClose.addEventListener("click", handleModalClose);
