
$(function(){
  $(".z1").load("files/lv01/load.html"); 
  $(".z2").load("files/lv02/load.html"); 
  $(".z3").load("files/lv03/load.html"); 
  $(".z4").load("files/lv04/load.html"); 
  $(".z5").load("files/lv05/load.html"); 
  $(".z6").load("files/lv06/load.html"); 
  $(".z7").load("files/lv07/load.html");
  $(".z8").load("files/lv08/load.html"); 
  $(".z9").load("files/lv09/load.html"); 
  $(".z10").load("files/lv10/load.html"); 
  $(".z11").load("files/lv11/load.html");
  $(".z13").load("files/lv13/load.html");
  $(".z14").load("files/lv14/load.html");
  $(".z15").load("files/lv15/load.html");
  $(".z16").load("files/lv16/load.html");
  $(".z17").load("files/lv17/load.html");
  $(".z18").load("files/lv18/load.html");
  $(".z19").load("files/lv19/load.html");
  $(".z20").load("files/lv20/load.html");
  $(".z21").load("files/lv21/load.html");
  $(".z22").load("files/lv22/load.html");
  $(".z23").load("files/lv23/load.html");
});

containers = document.querySelectorAll(".task-container")
containers.forEach(element => {
  element.addEventListener("click", (e) =>{
    elem = e.target;
    for(let i =0;i<10;i++){
      if(elem.classList.contains("close"))return;
      if(elem.classList.contains("task-container"))break;
      if(elem.classList.contains("html")) return;
      elem = elem.parentElement;
    }
    elem.classList.add("show");
    hiddenElem = elem.querySelector(".hidden");
    elem.style.height = (50+hiddenElem.clientHeight) +"px"
  });
});

containers = document.querySelectorAll(".close")
containers.forEach(element => {
  element.addEventListener("click", (e) =>{
    elem = e.target;
    for(let i =0;i<10;i++){
      if(elem.classList.contains("task-container"))break;
      if(elem.classList.contains("html")) return;
      elem = elem.parentElement;
    }
    elem.classList.remove("show");
    hiddenElem = elem.querySelector(".hidden");
    elem.style.height = "50px";
  });
});