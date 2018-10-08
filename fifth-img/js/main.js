+(function(){
  var table = document.querySelector("table");
  //var cell = table.getElementsByTagName("td")
  var cell = table.querySelectorAll('td'); 
  var step = "0";
  var screen = document.querySelector('#screen');
  screen.innerHTML = "Ходят адепты Сварога";  
	table.onclick = function(event){       
    	if(event.target.className=="cell"){
				if(step % 2 == 0){
					//event.target.innerHTML = "x";
					screen.innerHTML = "Ходят гламурные сатанисты";
					event.target.innerHTML += '<img src="images/run1.jpg" width="150" height="150" alt="" />';					
				}
				else{
					event.target.innerHTML +='<img src="images/pent.jpg" width="150" height="150" alt="" />';
					//event.target.innerHTML = "0";
					screen.innerHTML = "Ходят адепты Сварога";	
				}
				step++;
				checking();
		}
	};
     
function checking() {
	/*var svarog = document.querySelector('img[src="images/run1.jpg"]');
	var satan = document.querySelector('img[src="images/pent.jpg"]');
	console.log(svarog);
	console.log(satan);*/

	if (cell[0].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[1].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[2].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />') {
		alert("Победили адепты Сварога");		
		clearField();
	}
	/*if (cell[0].innerHTML=savarog && cell[1].innerHTML=savarog && cell[2].innerHTML=savarog){
		alert("Победили адепты Сварога");		
		clearField();
	}*/
	if (cell[3].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[4].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[5].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />') {
		alert("Победили адепты Сварога");
		clearField();
	}
	if (cell[6].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[7].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[8].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />') {
		alert("Победили адепты Сварога");
		clearField();
	}
	if (cell[0].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[3].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[6].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />') {
		alert("Победили адепты Сварога");
		clearField();
	}
	if (cell[1].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[4].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[7].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />') {
		alert("Победили адепты Сварога");
		clearField();
	}
	if (cell[2].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[5].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[8].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />') {
		alert("Победили адепты Сварога");
		clearField();
	}
	if (cell[0].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[4].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[8].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />') {
		alert("Победили адепты Сварога");
		clearField();
	}
	if (cell[2].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[4].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />' && cell[6].innerHTML=='<img src="images/run1.jpg" width="150" height="150" alt="" />') {
		alert("Победили адепты Сварога");
		clearField();
	}

	if (cell[0].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[1].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[2].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />') {
		alert("Победили гламурные сатанисты!");
		clearField();
	}
	if (cell[3].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[4].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[5].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />') {
		alert("Победили гламурные сатанисты!");
		clearField();
	}
	if (cell[6].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[7].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[8].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />') {
		alert("Победили гламурные сатанисты!");
		clearField();
	}
	if (cell[0].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[3].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[6].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />') {
		alert("Победили гламурные сатанисты!");
		clearField();
	}
	if (cell[1].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[4].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[7].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />') {
		alert("Победили гламурные сатанисты!");
		clearField();
	}
	if (cell[2].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[5].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[8].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />') {
		alert("Победили гламурные сатанисты!");
		clearField();
	}
	if (cell[0].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[4].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[8].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />') {
		alert("Победили гламурные сатанисты!");
		clearField();
	}
	if (cell[2].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[4].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />' && cell[6].innerHTML=='<img src="images/pent.jpg" width="150" height="150" alt="" />') {
		alert("Победили гламурные сатанисты!");
		clearField();
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
    var Step = "0";
    for(var i = 0, lenght = cell.length; i < lenght; i++){
   
      cell[i].innerHTML = '';
    }
  };   
    
}())
