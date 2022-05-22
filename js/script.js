const mainMenu=document.querySelector('#main-menu');
const openMenu=document.querySelector('#open-menu');



	openMenu.addEventListener('click',toggleFun);

 function toggleFun(){
	if (mainMenu.style.display === "none") {
		mainMenu.style.display = "block";
	} else {
		mainMenu.style.display='none'
	}
 }
	

