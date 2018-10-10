+(function(){
  var table = document.querySelector("table");
  var cell = table.querySelectorAll('td'); 
  var step = "0";
  var screen = document.querySelector('#screen');
  const IMG_X = '<img src="images/run1.jpg" width="150" height="150" alt="" />';
  const IMG_0 = '<img src="images/pent.jpg" width="150" height="150" alt="" />';
  screen.innerHTML = "Ходят адепты Сварога"; 
 /* var imageMap = {
    "0": IMG_0,
    "x": IMG_X
};*/

	table.onclick = function(event){
	//var step =  (step % 2 == 0) ? 'x' : '0'; 
		if(event.target.className=="cell") {    	
				if(step % 2 == 0){					
					screen.innerHTML = "Ходят гламурные сатанисты";
					event.target.innerHTML += IMG_X;
					event.target.setAttribute("data-value", "x")
										
				}
				else{
					event.target.innerHTML += IMG_0;
					event.target.setAttribute("data-value", "0");					
					screen.innerHTML = "Ходят адепты Сварога";	
				}
				step++;
				checking();
		}
	};

function checking() {
	var fire = document.querySelector(".fire");
	if (cell[0].getAttribute('data-value') == "x" && cell[1].getAttribute('data-value') == "x" && cell[2].getAttribute('data-value') == "x"){
	alert("Победили адепты Сварога");		
	clearField();	
	//fire.classList.add("active");	
	}
	
	if (cell[3].getAttribute('data-value') == "x" && cell[4].getAttribute('data-value') == "x" && cell[5].getAttribute('data-value') == "x") {
		alert("Победили адепты Сварога");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[6].getAttribute('data-value') == "x" && cell[7].getAttribute('data-value') == "x" && cell[8].getAttribute('data-value') == "x") {
		alert("Победили адепты Сварога");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[0].getAttribute('data-value') == "x" && cell[3].getAttribute('data-value') == "x" && cell[6].getAttribute('data-value') == "x") {
		alert("Победили адепты Сварога");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[1].getAttribute('data-value') == "x" && cell[4].getAttribute('data-value') == "x" && cell[7].getAttribute('data-value') == "x") {
		alert("Победили адепты Сварога");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[2].getAttribute('data-value') == "x" && cell[5].getAttribute('data-value') == "x" && cell[8].getAttribute('data-value') == "x") {
		alert("Победили адепты Сварога");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[0].getAttribute('data-value') == "x" && cell[4].getAttribute('data-value') == "x" && cell[8].getAttribute('data-value') == "x") {
		alert("Победили адепты Сварога");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[2].getAttribute('data-value') == "x" && cell[4].getAttribute('data-value') == "x" && cell[6].getAttribute('data-value') == "x") {
		alert("Победили адепты Сварога");
		clearField();
		//fire.classList.add("active");
	}

	if (cell[0].getAttribute('data-value') == "0" && cell[1].getAttribute('data-value') == "0" && cell[2].getAttribute('data-value') == "0") {
		alert("Победили гламурные сатанисты!");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[3].getAttribute('data-value') == "0" && cell[4].getAttribute('data-value') == "0" && cell[5].getAttribute('data-value') == "0") {
		alert("Победили гламурные сатанисты!");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[6].getAttribute('data-value') == "0" && cell[7].getAttribute('data-value') == "0" && cell[8].getAttribute('data-value') == "0") {
		alert("Победили гламурные сатанисты!");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[0].getAttribute('data-value') == "0" && cell[3].getAttribute('data-value') == "0" && cell[6].getAttribute('data-value') == "0") {
		alert("Победили гламурные сатанисты!");
		clearField();
		fire.classList.add("active");
	}
	if (cell[1].getAttribute('data-value') == "0" && cell[4].getAttribute('data-value') == "0" && cell[7].getAttribute('data-value') == "0") {
		alert("Победили гламурные сатанисты!");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[2].getAttribute('data-value') == "0" && cell[5].getAttribute('data-value') == "0" && cell[8].getAttribute('data-value') == "0") {
		alert("Победили гламурные сатанисты!");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[0].getAttribute('data-value') == "0" && cell[4].getAttribute('data-value') == "0" && cell[8].getAttribute('data-value') == "0") {
		alert("Победили гламурные сатанисты!");
		clearField();
		//fire.classList.add("active");
	}
	if (cell[2].getAttribute('data-value') == "0" && cell[4].getAttribute('data-value') == "0" && cell[6].getAttribute('data-value') == "0") {
		alert("Победили гламурные сатанисты!");
		clearField();
		//fire.classList.add("active");
	}
	var both = false;      
    top: for(var i = 0; i < cell.length; i++) {
        if(cell[i].innerHTML == '') {
          both = false;
          break top;
        }
        else {
          both = true;
        }
    };
      if(both){
        alert("Ничья");
        clearField();
      }


}; 

function clearField(){
    var step = "0";
    for(var i = 0, lenght = cell.length; i < lenght; i++){   
      cell[i].innerHTML = '';
      cell[i].removeAttribute("data-value");
    }
  }; 
  clearField();  
    
}())


