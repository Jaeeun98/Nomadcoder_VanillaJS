//mainHover
const onLoad = document.querySelector(".main_box");
//menu
const li = document.getElementsByClassName("li");
const subMenu = document.getElementsByClassName("sub_menu");
//mainBtn, sub_1Top
let mainBtn = document.querySelector(".main_button");
//왜 getElementsByClassName으로 했을땐 안되지?
let subTop = document.querySelector(".sub_1").offsetTop;
//hoverText
const hoverBox = document.querySelectorAll(".jsBox");
const hoverText = document.querySelectorAll(".jsText");
//imgHober
const imgHover = document.querySelectorAll(".jsImg");
//scrollHover
const scrollHover = document.querySelector(".jsScroll");
const scrollTop = document.querySelector(".sub_3").offsetTop;
//remocon
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


// onload 
function handleOnLoad(){
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
	window.scroll({top:subTop, behavior:'smooth'});
}

mainBtn.addEventListener("click", handleBtn);

//scrollHover 
function handleScrollHover(){
	let windowTop = window.offsetTop;
	if(windowTop = scrollTop) {
		scrollHover.style.opacity = "1";
	}
} 

window.addEventListener("scroll", handleScrollHover);

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

//modal

function handleModalClose(){
	sub6.style.display = "none";
}

modalClose.addEventListener("click", handleModalClose);
	
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

//map

function initialize() {
   var myLatlng = new google.maps.LatLng(37.579697, 126.977075); //<- 위도와 경도
   var myOptions = {
    zoom: 15,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
   }
   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   var marker = new google.maps.Marker( {
    position: myLatlng, 
    map: map, 
    title:"경복궁" //<- 본인의 목적에 맞게수정
   });   
   var infowindow = new google.maps.InfoWindow( {
    content: "경복궁" //<- 본인의 목적에 맞게수정
   });
   infowindow.open(map,marker);
  }
  window.onload=function() {
   initialize();
   handleOnLoad();
  }