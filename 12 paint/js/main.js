(function(){
  //объявляем переменные холста, контекста и палитры
  let canwrap = document.querySelector('.canvas-wrapp');
  const canvas = document.getElementById('myCanvas'); 
  const context = canvas.getContext('2d');
  let cad = document.querySelector('#cad');
  let paint = document.querySelector('#paint');
  let select= document.querySelector('#select');
  let colWrapp = document.querySelector('.color_wrapp');
  let black = document.querySelector('#colB');
  let white = document.querySelector('#colW');
  let red = document.querySelector('#colR');
  let yellow = document.querySelector('#colY');
  let green =document.querySelector('#colG');
  let blue = document.querySelector('#colBl');
  let violet = document.querySelector('#colV');
  let orange = document.querySelector('#colO');
  let brown = document.querySelector('#colBr');
  let grey = document.querySelector('#colGr');      
  let buruse = document.querySelector('#bur');
  let cleen = document.querySelector('#clear')
  let pensilWeight = document.querySelector('#weight'); 
//определяем стиль цвета через выбор в палитре 
colWrapp.addEventListener('click', function newColor(e){
  let myCol  = getComputedStyle(e.target);  
   context.strokeStyle = myCol.backgroundColor;
 })

  let drawWeight = select.value;
   //context.lineWidth = drawWeight;

 //назначаем атрибут "st" = "CAD", если нажали кнопку "от точки к точке"
cad.addEventListener("click", function(e){
    canvas.setAttribute("st", "CAD")
    canvas.removeAttribute('PAINT')
   
});
//назначаем атрибут "st" = PAINT" ЕСЛИ НАЖАЛИ КНОПКУ "беспрерывно"
  paint.addEventListener("click", function(e){
      canvas.setAttribute("st", "PAINT");
      canvas.removeAttribute('CAD');     
});  
//определяем действие мыши при движении, определяем координаты
  canwrap.onmousemove = function drawImg(e){
      var x = e.offsetX;
      var y = e.offsetY;
      var newX = e.movementX;
      var newY = e.movementY;
      //определяем назначен ли атрибут "st" вообще, либо он = "PAINT", и зажата ли кнопка мыши ==> начало рисования 
      if (canvas.getAttribute('st') != "CAD"  && e.buttons > 0) {

        context.beginPath();  
        context.moveTo(x, y);
        context.lineTo(x - newX, y - newY);
        context.stroke();
        context.closePath();    
        context.lineCap = "round";      
        context.lineWidth = 3; 
          };

                 if(canvas.getAttribute('st') == "CAD"){
          
            //context.beginPath();  
            //context.moveTo(e.clientX, e.clientY); 
            canwrap.onmousedown = function(e){
               context.lineTo(e.clientX, e.clientY);
               context.lineCap = "round";
               context.lineWidth = 3;
               context.stroke();
          }
           
      };
   
    }
    //определяем назначен ли атрибут "st" вообще, либо он = "CAD"

       
//назначаем действие очистки холста при нажатии кнопки "очистить холст"
document.getElementById("clear").onclick = function clear() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      canvas.removeAttribute('CAD');
      canvas.removeAttribute('PAINT');

    };
}())
  

  
