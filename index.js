/*------------------Change Navbar color on Scroll-------------------*/
function changeBg(){
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  
  if(scrollValue < 100){
    navbar.classList.remove('bgColor');
  }
  else{
    navbar.classList.add('bgColor');
  }
}

window.addEventListener('scroll',changeBg);

/*------------------Float Effect------------------*/

window.addEventListener("scroll",reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i=0;i< reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
  
    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}





