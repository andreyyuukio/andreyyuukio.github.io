slider ();
var left = 0;
var timer;
function slider (){
if(true){
  timer = setTimeout(function (){
    var carusel = document.getElementById('carusel');
    left = left - 1280;
    if (left < -2560) {
      left = 0;
       
    }
    carusel.style.left = left +'px';
    slider ();
  }, 1000);
  carusel.onmouseover = function(){
        clearTimeout(timer);
      } 
      carusel.onmouseout= function() {
      	slider();
      } 
} 
    
}