
const scrollHover = document.querySelector(".jsScroll");
const scrollTop = document.querySelector(".sub_3").offsetTop;

function handleScrollHover(){
	let windowTop = window.offsetTop;
	if(windowTop = scrollTop) {
		scrollHover.style.opacity = "1";
	}
} 

window.addEventListener("scroll", handleScrollHover);


