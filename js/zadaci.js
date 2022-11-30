containers = document.querySelectorAll(".task-container")
containers.forEach(element => {
  element.addEventListener("click", (e) =>{
    elem = e.target;
    for(let i =0;i<10;i++){
      if(elem.classList.contains("task-container"))break;
      if(elem.classList.contains("html")) return;
      elem = elem.parentElement;
    }
    elem.classList.add("show");
    hiddenElem = elem.querySelector(".hidden");
    elem.style.height = (50+hiddenElem.clientHeight) +"px"
  });
});
