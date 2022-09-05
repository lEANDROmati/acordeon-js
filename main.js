const despliegue = document.querySelectorAll(".acordeon");
const span = document.querySelector("span")

for (let i = 0; i < despliegue.length; i++) {
	despliegue[i].addEventListener("click",function(){
       this.classList.toggle("active");
	})
}

