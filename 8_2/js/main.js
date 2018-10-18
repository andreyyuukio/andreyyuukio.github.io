 +(function() {
   let field = document.querySelector('body');
    let fcord = field.getBoundingClientRect();
    let btn = document.getElementById('idbtn');
   btn.style.left = Math.random()*100 + '%';
   btn.style.top = Math.random()*100 + '%';  
 
  if(true){
      btn.onmouseover = function fly(event){  

          let btnpos = btn.getBoundingClientRect();  
          btn.style.left = (fcord.left + Math.random()* (fcord.left + field.clientWidth - fcord.left)) + "px";       
          btn.style.top = (fcord.top + Math.random() *(fcord.top + field.clientHeight - fcord.top))*0.9 + "px";
  
          if(btnpos.left >= (fcord.left + field.clientWidth)*Math.random && fcord.top >= (fcord.top + field.clientHeight)*Math.random){
          this();
          }          

      }

  }

    field.onmousemove = function() {
      let smile = document.querySelector('.advise');
      var cursorX = event.clientX;
      var cursorY = event.clientY;        
        smile.style.left = cursorX + 15 * Math.random() + "px";       
        smile.style.top = cursorY  + 10 * Math.random() + "px";  

        if(cursorX <= (btnpos.left + 1.5 + "px") && cursorY <= (btnpos.top + 1.5 + "px")) {  
          fly(event);
        }       
      
    }

    var running = setInterval(function(){
        var speak = document.querySelector('.speak');
        var troll = document.createElement('span');
        speak.innerHTML = "Нажми на кнопку и получишь годовой запас пиваса"
        speak.appendChild(troll)
        speak.classList.toggle("active");
    }, 2500)

 }());
 





