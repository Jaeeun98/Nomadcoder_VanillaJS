const li = document.getElementsByClassName("li");
const subMenu = document.getElementsByClassName("sub_menu");
let mainBtn = document.querySelector(".main_button");
//왜 getElementsByClassName으로 했을땐 안되지?
let btnTop = document.querySelector(".sub_1").offsetTop;
const hoverBox = document.querySelectorAll(".jsBox");
const hoverText = document.querySelectorAll(".jsText");
const onLoad = document.querySelector(".main_box");
const imgHover = document.querySelectorAll(".jsImg");

console.log(imgHover);

// onload 

window.onload = function(){
	onLoad.style.opacity = "1";
}


//Menu
function handleMenu(){
	subMenu[0].style.display = "block";
}
function handleMenu1(){
	subMenu[1].style.display = "block";
}
function handleMenu2(){
	subMenu[2].style.display = "block";
}
function handleMenu3(){
	subMenu[3].style.display = "block";
}

//subMenu
function handleSubMenu(){
	subMenu[0].style.display = "none";
}
function handleSubMenu1(){
	subMenu[1].style.display = "none";
}
function handleSubMenu2(){
	subMenu[2].style.display = "none";
}
function handleSubMenu3(){
	subMenu[3].style.display = "none";
}

li[0].addEventListener("mouseover", handleMenu);
li[1].addEventListener("mouseover", handleMenu1);
li[2].addEventListener("mouseover", handleMenu2);
li[3].addEventListener("mouseover", handleMenu3);

li[0].addEventListener("mouseout", handleSubMenu);
li[1].addEventListener("mouseout", handleSubMenu1);
li[2].addEventListener("mouseout", handleSubMenu2);
li[3].addEventListener("mouseout", handleSubMenu3);

//button_scroll

function handleBtn(){
	window.scroll({top:btnTop, behavior:'smooth'});
}

mainBtn.addEventListener("click", handleBtn);

//hover

function handleHover(){
	hoverBox[0].style.opacity = "0.7";
	hoverText[0].style.opacity = "1";
}
function handleHover1(){
	hoverBox[1].style.opacity = "0.7";
	hoverText[1].style.opacity = "1";
}
function handleHover2(){
	hoverBox[2].style.opacity = "0.7";
	hoverText[2].style.opacity = "1";
}

function handleBack(){
	hoverBox[0].style.opacity = "0";
	hoverText[0].style.opacity = "0";
}
function handleBack1(){
	hoverBox[1].style.opacity = "0";
	hoverText[1].style.opacity = "0";
}
function handleBack2(){
	hoverBox[2].style.opacity = "0";
	hoverText[2].style.opacity = "0";
}

hoverBox[0].addEventListener("mouseover", handleHover);
hoverBox[1].addEventListener("mouseover", handleHover1);
hoverBox[2].addEventListener("mouseover", handleHover2);

hoverBox[0].addEventListener("mouseout", handleBack);
hoverBox[1].addEventListener("mouseout", handleBack1);
hoverBox[2].addEventListener("mouseout", handleBack2);