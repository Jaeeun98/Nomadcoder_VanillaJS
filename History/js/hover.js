const scrollHover = document.querySelector(".jsScroll");
const scrollTop = document.querySelector(".sub_3").offsetTop;
const onLoad = document.querySelector(".main_box");


// onload 
window.onload = function handleOnLoad(){
  onLoad.style.opacity = "1";
}

function handleScrollHover(){
	let windowTop = window.offsetTop;
	if(windowTop = scrollTop) {
		scrollHover.style.opacity = "1";
	}
} 

window.addEventListener("scroll", handleScrollHover);




