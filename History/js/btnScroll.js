let mainBtn = document.querySelector(".main_button");
let subTop = document.querySelector(".sub_1").offsetTop;

function handleBtn(){
	window.scroll({top:subTop, behavior:'smooth'});
}

mainBtn.addEventListener("click", handleBtn);