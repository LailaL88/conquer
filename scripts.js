function toggleMenu() {
  var x = document.getElementById("drop");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

function smoothScroll(){
	var element = document.querySelector("#section1");
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function smoothScroll1(){
var element = document.querySelector("#section2");
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function smoothScroll2(){
	var element = document.querySelector("#section3");
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function smoothScroll3(){
	var element = document.querySelector("#section7");
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

