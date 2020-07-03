const li = document.getElementsByClassName("li");
const subMenu = document.getElementsByClassName("sub_menu");

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